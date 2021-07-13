import React from 'react'
import './Myfirst.css'
import './Mysecond.css'
import Header from './Header'
import { Link } from "react-router-dom";

function Firstpage(props) {
  
  return (
    <div>
      <div>
        {/* <Header></Header> */}
      </div>
      <div>
        <div className="abox">
          <div className="lol"></div>
          <div className="bbox">
            <div className="ebox">Fresh Cooked Food,</div>
            <div className="fbox">at Your Door</div>
          </div>
          <div className="cbox" onClick={()=>props.history.push("Order")}>Order Online</div>
          <div className="dbox"></div>
        </div>
      </div>
      <div className="gbox">
        <div className="ibox">Natural, delicious food that tastes like home</div>
        <div className="jbox"></div>
      </div>
      <div className="kbox">
        <div className="lbox"></div>
        <div className="mbox">Your Search for Good Food Ends Here</div>
      </div>
      <div className="nbox">
        <div className="rbox">
          <div className="obox">
            <div className="tbox">
              <div className="ybox"></div>
            </div>
            <div className="ubox">No Minimum Order  . . . . </div>
            <div className="vbox">Order in for yourself or for the group, with no restrictions on order value</div>
          </div>
          <div className="pbox">
            <div className="wbox">
              <div className="zbox"></div>
            </div>
            <div className="ubox">Live Order Tracking . . .</div>
            <div className="vbox">Know where your order is at all times, from the restaurant to your doorstep</div>
          </div>
          <div className="qbox">
            <div className="xbox">
              {/* <div className="x1box"></div> */}
            </div>
            <div className="ubox">Lightning-Fast Delivery . .</div>
            <div className="vbox">Experience Our superfast delivery for food delivered fresh &amp; on time</div>
          </div>
        </div>
        {/* <div className="sbox"></div> */}
      </div>
      <div className="a1">
        <div className="a2">
          <div className="a3">Collections</div>
          <div className="a4">
            <div className="a5">Explore curated lists of top restaurants, cafes, pubs, and bars in Jalandhar, based on trends</div>
            <div className="a6"></div>
          </div>
          <div className="a7">
            <div className="a8" onClick={()=>props.history.push("/MyMenu")}>
              <div className="a12">Trending This Week </div>
              <div className="a13">
              16 Places
              </div>
            </div>
            <div className="a9" onClick={()=>props.history.push("Pocket")}>
              <div className="a12">Pocket Friendly </div>
              <div className="a13">
              4 Places
              </div>
            </div>
            <div className="a10" onClick={()=>props.history.push("Great")}>
              <div className="a12">Great Food, No Bull </div>
              <div className="a13">
              24 Places
              </div>
            </div>
            <div className="a11"  onClick={()=>props.history.push("Chicken")}>
              <div className="a12">Butter Chicken </div>
              <div className="a13">
              4 Places
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="b1">
        <div className="b2">
          <div className="b3">Popular localities in and around Jalandhar</div>
          <div className="b4">
            <div className="b9"  onClick={()=>props.history.push("ModelTown")}>Model Town (38 places)</div>
            <div className="b10"  onClick={()=>props.history.push("ShastriNagar")}>Shastri Nagar (28 places)</div>
            <div className="b11"  onClick={()=>props.history.push("AdarshNagar")}>Adarsh Nagar (24 places)</div>
          </div>
          <div className="b5">
          <div className="b9"  onClick={()=>props.history.push("JalandharCantt")}>Jalandhar Cantt (16 places)</div>
            <div className="b10"  onClick={()=>props.history.push("UrbanEstate")}>Urban Estate(19 places)</div>
            <div className="b11"  onClick={()=>props.history.push("GtRoad")}>GT Road(13 places)</div>
          </div>
          <div className="b6">
          <div className="b9"  onClick={()=>props.history.push("RamaMandi")}>Rama Mandi(12 places)</div>
            <div className="b10"  onClick={()=>props.history.push("TransportNagar")}>Transport Nagar(10 places)</div>
            <div className="b11"  onClick={()=>props.history.push("Maqsuda")}>Maqsuda(8 places)</div>
          </div>
          <div className="b7">
          <div className="b9"  onClick={()=>props.history.push("ModelHouse")}>Model House(10 places)</div>
            <div className="b10"  onClick={()=>props.history.push("NokodarRoad")}>Nokodar Road(9 places)</div>
            <div className="b11"  onClick={()=>props.history.push("PPR")}>PPR Market(8 places)</div>
          </div>
          <div className="b8">
          <div className="b9"  onClick={()=>props.history.push("Kartarpur")}>Kartarpur Locality(7 places)</div>
           
          </div>
        </div>
      </div>
    </div>
  )
}
export default Firstpage