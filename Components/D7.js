import React from 'react'
import './Burgrill.css'
import './Myfourth.css'
import './D7.css'

function D7(props) {
    return(
        <div>
              <div className="g9">
                <div className="g10"></div>
                <div className="g11">
                <div className="ggbox"></div>
                    <div className="hhbox">
                        <div className="hhhbox">Green Fresh</div>
                        <div className="hbox">Food Delivery</div>
                    </div>
                </div>
                <div className="g12">
                <div className="iibox"></div>
                    <div className="jjbox">
                        <div className="oobox"><i class="fab fa-facebook-f"></i></div>
                        <div className="ppbox"><i class="fab fa-twitter"></i></div>
                        <div className="qqbox"><i class="fab fa-instagram"></i></div>
                        <div className="vasu" onClick={()=>props.history.push("Login")}>Log in</div>
                        <div className="rrbox" onClick={()=>props.history.push("Signup")}>
                            <div className="ssbox">Sign up</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="box111">
                    <div className="box222">
                        <div className="box333">
                            <div className="box874"></div>
                        </div>
                        <div className="box555">
                            <div className="box666">D7 Fast Food</div>
                            <div className="box777">Quick Bites - Burger, Italian, Fast Food</div>
                            <div className="box888">
                                <div className="box999">Basti Sheikh Adda</div>
                            </div>
                            <div className="box1000">
                                <div className="box1001"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default D7