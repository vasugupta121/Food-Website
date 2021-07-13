import React from 'react'
import './Myfirst.css'
import './Mysecond.css'

function Header(props) {
    return(
        <div>
            <div className="aabox">
                <div className="bbbox">
                    <div className="eebox">
                        <div className="kkbox">What's Cooking</div>
                        <div className="llbox">Menu</div>
                        <div className="mmbox">About</div>
                        <div className="nnbox">Contact</div>
                    </div>
                    <div className="ffbox"></div>
                </div>
                <div className="ccbox">=
                    <div className="ggbox"></div>
                    <div className="hhbox">
                        <div className="hhhbox">Green Fresh</div>
                        <div className="hbox">Food Delivery</div>
                    </div>
                </div>
                <div className="ddbox">
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
        </div>
    )
}
export default Header
