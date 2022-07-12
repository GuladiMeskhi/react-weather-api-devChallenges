import { Sidebar } from "./components/Sidebar/Sidebar";
import { Card } from "./components/Card/Card";
import { useState,useEffect } from "react";
import { Humidity } from "./components/Humidity/Humidity";
import { Windstatus } from "./components/Windstatus/Windstatus";
import { Visibility } from "./components/Visibility/Visibility";
import { Airpressure } from "./components/Airpressure/Airpressure";
import { Search } from "./components/Search/Search";
import Backdrop from "./components/Backdrop/Backdrop";
import { getDateFormat } from "./Utils/getDateFormat";
import { certainDate } from "./Utils/certainDate";
import './App.css'
import axios from "axios";

function App() {
  const apiKey = '3861861316ef407f1ab0c6abab37a421'

  const [latitude,setLatitude] = useState()
  const [longitude,setLongitude] = useState()
  const [data,setData] = useState([{}])
  const [city,setCity] = useState('tbilisi')
  const [isOpen,setOpen] = useState(false)
  const [backdrop,setBackdrop] = useState(false) 
  const [cactive,setCactive] = useState('celsiusBTN active')
  const [factive,setFactive] = useState('celsiusBTN')
  const [units,setUnits] = useState('units=metric')
  const [symbol,setSymbol] = useState('°C')

  function handleOpen() {
      setOpen(true)
      setBackdrop(true)
  }
  function handle(){
      setOpen(false)
      setBackdrop(false)
  }

  function handleCelsius(){
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => {
      setData(response.data)
    })
    setFactive('celsiusBTN')
    setCactive('celsiusBTN active')
    setSymbol('°C')
  }

  function handleFarenheit(){
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
    .then((response) => {
      setData(response.data)
    })
    setCactive('celsiusBTN')
    setFactive('celsiusBTN active')
    setSymbol('°F')
  }

  function getCurrentPosition(){
    navigator.geolocation.getCurrentPosition((position) =>{
      setLongitude(position.coords.longitude)
      setLatitude(position.coords.latitude)
    })
    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=a9fa4983f61fe815e73e8d6d7ece4b32`)
    .then((response) => response.json())
    .then(response => {
      setCity(response[0].name)
    })
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&${units}`)
    .then((response) => {
      setData(response.data)
    })
  }

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&${units}`)
    .then((response) => {
      setData(response.data)
    })
  },[])

  function handleRequest(){
    if(symbol === '°C'){
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => {
        setData(response.data)
      })
    }
    if(symbol === '°F'){
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
      .then((response) => {
        setData(response.data)
      })
    }

      handle();
  }

  

  let fileList = data.list?.filter((elem,index) => index === 4 || index === 12 || index === 23 || index === 29 || index === 39 )


  // temp,weather,today,weekday,city
  return (
    <div className='App'>
          {backdrop && <Backdrop handleClose={handle}/>}
          {isOpen ? <Search handleChange={(e) => setCity(e.target.value)} handleClick={handleRequest} /> :null}
          <div className='fake-sidebar'>
          {data.list?.slice(0,1).map((elem) => {
            return <Sidebar handleLocation={getCurrentPosition} symbol={symbol} key={Math.floor(Math.random() * 100999)} weekday={getDateFormat(elem.dt_txt)} handleOpen={handleOpen} icon={`/assets/${elem.weather[0].icon}.png`} temp={Math.round(elem.main.temp)} weather={elem.weather[0].main} city={data?.city.name}/>
          }) 
          }
          </div>
          <div className='half'>
            <div className='halfCTA'>
              <button className={cactive} onClick={handleCelsius}>°C</button>
              <button className={factive} onClick={handleFarenheit}>°F</button>
            </div>
            <div className="card-grid">
            {fileList?.map((elem) => {
            return  <Card key={Math.floor(Math.random() * 100999)} symbol={symbol} weekday={getDateFormat(elem.dt_txt)} feelslike={Math.round(elem.main.feels_like)}  icon={`/assets/${elem.weather[0].icon}.png`} temp={Math.round(elem.main.temp)}/>
                    
            })}
            </div>
            <div className="support-block">
            </div>
            <h1>Todays Highlights</h1>
            <div className='todays-grid'>
            {data.list?.slice(0,1).map((elem) => {
              return <>
                        <Windstatus key={Math.floor(Math.random() * 100999)} windspeed={elem.wind.speed} windDirection={elem.weather.deg} />
                        <Humidity key={Math.floor(Math.random() * 100999)} humidity={elem.main.humidity} humidityValue={elem.main.humidity}/>
                      <Airpressure key={Math.floor(Math.random() * 100999)} airpressure={elem.main.pressure}/>
                      <Visibility key={Math.floor(Math.random() * 100999)} visibility={elem.visibility/1000}/>
                    </>
            })}
            </div>
            <div className="support-block" style={{height:'100px'}}>
            </div>
            <p style={{color:'white',fontSize:'14px',textAlign:'center'}}> Created by <a href='https://guladimeskhi.github.io/Portfolio/' style={{color:'blue'}}>Guladi Meskhi</a> - devChallenges.io</p>
          </div>
    </div>
  );
}

export default App;
