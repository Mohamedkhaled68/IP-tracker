import { useState, useEffect } from "react";
import Header from "./components/Header";
import MyMap from "./components/MyMap";
import arrow from './components/images/icon-arrow.svg'

function App() {
  const [address, setAddresss] = useState('')
  const [ip, setIp] = useState('')
  const checkIpAddress =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/
  useEffect(() => {
      try{
          const getData = async () => {
          const res = await fetch(`http://ip-api.com/json/`)
          const data = await res.json()
          setAddresss(data)
          }
          getData()
      }catch (err){
          console.trace(err);
      }
  },[])

  async function takeIp (){
    const res = await fetch(`http://ip-api.com/json/${
      checkIpAddress.test(ip) ? `${ip}` : checkDomain.test(ip) ? `${ip}` : ''
    }`)
    const data = await res.json()
    setAddresss(data)
}

function handelSubmit (e){
  e.preventDefault();
  takeIp()
}
  return (
    <div className="app">
              <div className="container">
            <div className="topSec">
                <div className="heading">
                    <h1>IP address tracker</h1>
                </div>
                <div className="input-div">
                    <form onSubmit={handelSubmit}>
                      <input type="text" placeholder="search for any IP address or domain" onChange={(e)=> setIp(e.target.value)}/>
                    <button>
                      <img src={arrow} />
                    </button>
                    </form>
                </div>
                <div className="details">
                    <div className="cate">
                        <div className="title">ip address</div>
                        <div className="result">{address.query}</div>
                    </div>
                    <div className="cate">
                        <div className="title">location</div>
                        <div className="result">{address.country}, {address.city}, {address.countryCode}</div>
                    </div>
                    <div className="cate">
                        <div className="title">timezone</div>
                        <div className="result">{address.timezone}</div>
                    </div>
                    <div className="cate">
                        <div className="title">isp</div>
                        <div className="result">{address.isp}</div>
                    </div>
                </div>
            </div>
            <div id="display-map" className="map-container"></div>
        </div>
      <MyMap address ={address}/>
    </div>
  );
}

export default App;
