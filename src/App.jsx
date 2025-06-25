import './App.css'
import React from 'react';
import CoasterList from './features/CoasterList/CoasterList';
import { useEffect, useState } from 'react';
import NavBar from './shared/NavBar';
import HomePage from './pages/HomePage';
import CoasterViewForm from './features/CoasterViewForm';
import { useLocation, useNavigate, useSearchParams, Routes, Route } from 'react-router';


const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
const token = `Bearer ${import.meta.env.VITE_PAT}`;

const encodeUrl = ({ sortField, sortDirection, queryString }) => {
  let sortQuery = `sort[0][field]=${sortField}&sort[0][direction]=${sortDirection}`;
  let searchQuery = '';
  if (queryString) {
    searchQuery = `&filterByFormula=SEARCH("${queryString}", +name)`;
  }
  return encodeURI(`${url}?${sortQuery}${searchQuery}`);
}
function App() {
  const [coasterList, setCoasterList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('type');
  const [searchField, setSearchField] = useState('name');
  const [sortDirection, setSortDirection] = useState('desc');
  const [queryString, setQueryString] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState("");
  const location = useLocation();
  const itemsPerPage = 15;
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const indexOfFirstCoaster = (currentPage - 1) * itemsPerPage;
  const navigate = useNavigate();
  


  const filteredCoasterList = coasterList.filter(
    (coaster) =>
      coaster.name.toLowerCase().includes(queryString.toLowerCase())
  );
  console.log('filteredTodoList:', filteredCoasterList);

  const paginatedCoasterList = filteredCoasterList.slice(
    indexOfFirstCoaster,
    indexOfFirstCoaster + itemsPerPage
  );

  const totalPages = Math.ceil(filteredCoasterList.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };


useEffect(() => {
  const fetchCoasters = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    };

    try {
      const resp = await fetch(encodeUrl({sortField, sortDirection, queryString}), options);

      if (!resp.ok) {
        throw new Error(resp.message);
      }
      console.log("resp: ", resp );
      const data = await resp.json();
      console.log(data);
      const coasters = data.records.map((record) => {
        const coaster = {
          id: record.id,
          name: record.fields.name,
          park: record.fields.park,
          type: record.fields.type,
          height: record.fields.height,
          speed: record.fields.speed,
          inversions: record.fields.inversions,
          minheightreq: record.fields.minheightreq
        };
        return coaster;
      });
      console.log(coasters);
      setCoasterList([...coasters]);
    } catch (error) {
      console.log("fetching coasters error: ", error)
    }
  }
  fetchCoasters();
}, [sortField, sortDirection, queryString]);

const updateSearch = e => {
  setSearchQuery(e.target.value);
};
const getSearch = e => {
  e.preventDefault();
  setQueryString(searchQuery);
  setSearchQuery("");
}

useEffect(() => {
  if (location.pathname === '/') {
    setTitle('Coaster List');
  } else if (location.pathname === '/about') {
    setTitle('About');
  } else {
    setTitle('Page Not Found');
  }
}, [location]);

useEffect(() => {
  if (totalPages > 0) {
    if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
      navigate('/');
    }
  }
}, [currentPage, totalPages, navigate]);


return (
  <div>
    <NavBar/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    {/* <Route path="*" element={<About />} /> */}
    </Routes>
    <CoasterViewForm
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        sortField={sortField}
        setSortField={setSortField}
        queryString={queryString}
        setQueryString={setQueryString}
      />
      <CoasterList coasterList= {coasterList} />
  </div>
);
}


export default App;

