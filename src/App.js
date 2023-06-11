import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries") 
    .then ((response) => {
      setCountries(response.data);
    });
   }, [setCountries]);

  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="d-flex flex-row">
        <CountriesList countries={countries} setCountries={setCountries}/>
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} setCountries={setCountries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
