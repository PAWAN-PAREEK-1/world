
import { getCountryDetail } from '../Services/index';
import {React,useEffect,useState    } from 'react'
import { useParams } from 'react-router-dom';
import "./Home.css";
function CountryDetail(props) {
    const { CountryCode} = useParams();
    const [detail,setDetail] = useState({});
    useEffect(() => {
        getCountryDetail(CountryCode).then(result=>{
                setDetail(result.data)
        })
    },[CountryCode]);
    console.log(CountryCode);
    return (
        <div className='coundry-detail'>
            <div>
                <img src={detail.flag} alt={detail.name}  />
            </div>
            <div className="main">


              <h1> Name:{detail.name}</h1>
              <h1>Capital:{detail.capital}</h1>
              <h1>Population :{detail.population}</h1>
            <h1> Currency:{detail.currencies?.map(currency=>currency.name).join(",")}</h1>







            </div>

        </div>
    );
}

export default CountryDetail