import CountryCard from "../components/CountryCard.js";
import "./Home.css";
import { useEffect, useState } from "react";
import { getAllCountries } from "../Services/index.js";
import {Link} from "react-router-dom"
function App() {
  const [countriesList,setCountriesLIst] = useState([]);
  useEffect(()=>{
    getAllCountries().then(result=>{
      const countries = result.data;
      setCountriesLIst(countries);

    });

  },[]);
  return (
    <div className="App">
      <div className="countrycard">
        {
          countriesList.map(country=>(
           <Link to={`/countries/${country.alpha3Code}`}
           style={{textDecoration: 'none'}}
           ><CountryCard
            name={country.name}
            capital={country.capital}
            population={country.population}
            flag={
              country.flag }
              key={country.alpha3Code}
          /></Link>
          ))
        }



      </div>
    </div>
  );
}

export default App;
