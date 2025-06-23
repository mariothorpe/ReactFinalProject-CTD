import './App.css'
import React from 'react';
import CoasterList from './features/CoasterList';

import { useEffect, useState } from 'react';


const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
const token = `Bearer ${import.meta.env.VITE_PAT}`;
function App() {
  const [coasterList, setCoasterList] = useState([]);
  console.log("render loop?");


useEffect(() => {
  const fetchCoasters = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    };

    try {
      const resp = await fetch(url, options);

      if (!resp.ok) {
        throw new Error(resp.message);
      }
      console.log("resp: ", resp );
      const data = await resp.json();
      console.log(data);
      const coasters = data.records.map((record) => {
        const coaster = {
          id: record.id,
          name: record.fields.coaster,
          title: record.fields.coaster,
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
}, []);

return (
  <div>
    <h1>Coaster Credit Counter</h1>
    <CoasterList coasterList= {coasterList} />
  </div>
);
}


export default App;

