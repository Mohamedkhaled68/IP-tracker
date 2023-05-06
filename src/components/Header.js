import React from "react";
import './header.css'
import arrow from './images/icon-arrow.svg'

const Header = (props) => {
    return(
        <div className="container">
            <div className="topSec">
                <div className="heading">
                    <h1>IP address tracker</h1>
                </div>
                <div className="input-div">
                    <input type="text" placeholder="Type IP here..."/>
                    <img src={arrow}/>
                </div>
                <div className="details">
                    <div className="cate">
                        <div className="title">ip address</div>
                        <div className="result">{props.address.query}</div>
                    </div>
                    <div className="cate">
                        <div className="title">location</div>
                        <div className="result">{props.address.country}</div>
                    </div>
                    <div className="cate">
                        <div className="title">timezone</div>
                        <div className="result">{props.address.timezone}</div>
                    </div>
                    <div className="cate">
                        <div className="title">isp</div>
                        <div className="result">{props.address.isp}</div>
                    </div>
                </div>
            </div>
            <div id="display-map" className="map-container"></div>
        </div>
    )
}

export default Header;