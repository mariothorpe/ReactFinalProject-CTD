import "./App.css";
import React from "react";
import { useEffect, useState, useCallback } from "react";
import NavBar from "./shared/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Signup from "./pages/SignUpForm";
import Login from "./pages/LoginForm";
import PageNotFound from "./pages/PageNotFound";
import {
  useLocation,
  useNavigate,
  useSearchParams,
  Routes,
  Route,
} from "react-router";


const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${
  import.meta.env.VITE_TABLE_NAME
}`;
const token = `Bearer ${import.meta.env.VITE_PAT}`;

const encodeUrl = ({ sortField, searchField, sortDirection, queryString }) => {
  let sortQuery = `sort[0][field]=${sortField}&sort[0][direction]=${sortDirection}`;
  let searchQuery = "";
  if (queryString) {
    searchQuery = `&filterByFormula=SEARCH("${queryString}", +${searchField})`;
  }
  return encodeURI(`${url}?${sortQuery}${searchQuery}`);
};
function App() {
  const [coasterList, setCoasterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("type");
  const [searchField, setSearchField] = useState("name");
  const [sortDirection, setSortDirection] = useState("desc");
  const [queryString, setQueryString] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
 


  const fetchCoasters = useCallback(async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: token,
      },
    };

    try {
      const resp = await fetch(
        encodeUrl({ sortField, searchField, sortDirection, queryString }),
        options
      );

      if (!resp.ok) {
        throw new Error(resp.message);
      }
      const data = await resp.json();
      const coasters = data.records.map((record) => {
        const coaster = {
          id: record.id,
          name: record.fields.name,
          park: record.fields.park,
          type: record.fields.type,
          height: record.fields.height,
          speed: record.fields.speed,
          inversions: record.fields.inversions,
          minheightreq: record.fields.minheightreq,
        };
        return coaster;
      });
      setCoasterList([...coasters]);
    } catch (error) {
      console.log("fetching coasters error: ", error);
    } finally {
      setIsLoading(false);
    }

  }, [sortField, sortDirection, queryString, searchField, setCoasterList, setIsLoading]);

  useEffect(() => {
    fetchCoasters();
  }, [fetchCoasters]);

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Coaster List");
    } else if (location.pathname === "/about") {
      setTitle("About");
    } else {
      setTitle("Page Not Found");
    }
  }, [location]);


  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              coasterList={coasterList}
              isLoading={isLoading}
              sortDirection={sortDirection}
              setSortDirection={setSortDirection}
              sortField={sortField}
              setSortField={setSortField}
              queryString={queryString}
              setQueryString={setQueryString}
              searchField={searchField}
              setSearchField={setSearchField}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/pagenotfound" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
