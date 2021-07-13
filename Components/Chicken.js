import React from 'react'
import './Mysecond.css'
import './Myfirst.css'

function Chicken(props) {
    return (
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
                        <div className="vasu" onClick={() => props.history.push("Login")}>Log in</div>
                        <div className="rrbox" onClick={() => props.history.push("Signup")}>
                            <div className="ssbox">Sign up</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="j1">
                <div className="j2"></div>
                <div className="j3">
                    <div className="h12"  onClick={()=>props.history.push("Babaa")}>
                        <div className="j5"></div>
                        <div className="h17">
                            <div className="h34">Baba Chicken</div>
                            <div className="van"><i class="fas fa-star"> 4.4(806)</i></div>
                            <div className="h35">Model Town</div>
                            <div className="h36">Casual Dining-North Indian,Biryani,..</div>
                        </div>
                    </div>
                    <div className="h13" onClick={()=>props.history.push("TheGreat")}>
                        <div className="j6"></div>
                        <div className="h17">
                            <div className="h34">The Great Indian Kabab Factory</div>
                            <div className="van"><i class="fas fa-star"> 3.8(136)</i></div>
                            <div className="h35">Jalandhar Cantt</div>
                            <div className="h36">Fine Dining-Kebab,North Indian</div>
                        </div>
                    </div>
                    <div className="h14"  onClick={()=>props.history.push("Chick")}>
                        <div className="j7"></div>
                        <div className="h17">
                            <div className="h34">Chick Chick</div>
                            <div className="van"><i class="fas fa-star"> 4.0(2,311)</i></div>
                            <div className="h35">Adarsh Nagar</div>
                            <div className="h36">Quick Bites-North Indian,Mughlai,...</div>
                        </div>
                    </div>
                    <div className="h15"  onClick={()=>props.history.push("Blue")}>
                        <div className="j8"></div>
                        <div className="h17">
                            <div className="h34">Blue Fox</div>
                            <div className="van"><i class="fas fa-star"> 4.2(494)</i></div>
                            <div className="h35">Model Town</div>
                            <div className="h36">Quick Bites - North Indian</div>
                        </div>
                    </div>
                </div>
                <div className="i4">
                    <div className="j9" onClick={() => props.history.push("Pocket")}>
                        <div className="j13"></div>
                        <div className="j14">Pocket Friendly</div>
                    </div>
                    <div className="j10" onClick={() => props.history.push("Great")}>
                        <div className="j13"></div>
                        <div className="j14">Great Food No Bull</div>
                    </div>
                    <div className="j11" onClick={() => props.history.push("Chicken")}>
                        <div className="j13"></div>
                        <div className="j14">Butter Chicken</div>
                    </div>
                    <div className="j12" onClick={() => props.history.push("MyMenu")}>
                        <div className="j13"></div>
                        <div className="j14">Trending This Week</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chicken