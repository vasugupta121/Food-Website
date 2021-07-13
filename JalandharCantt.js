import React from 'react'
import './Modeltown.css'
import './Jalandharcantt.css'

function JalndharCantt(props) {
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
                <div className="l1">
                <div className="g2">
                    <div className="g3">Green Fresh Food Delivery</div>
                    <div className="g4">Discover the best food & drinks in Jalandhar</div>
                    <div className="g5">
                        <div className="g6"></div>
                        <div className="g7"></div>
                    </div>
                </div>
                <div className="g8"></div>
                </div>
                <div className="o1">
                    <div className="o2">
                        <div className="l4">
                        <div className="l5">
                            <div className="l6">
                                <div className="o3" onClick={()=>props.history.push("Thegreat")}></div>
                            </div>
                            <div className="l7" onClick={()=>props.history.push("Thegreat")}>
                                <div className="l48">
                                    <div className="l49">The Great Indian Kabab F..</div>
                                    <div className="l50">Kebab,North Indian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o4" onClick={()=>props.history.push("Nic")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Nic")}>
                                <div className="l48">
                                    <div className="l49">NIC-Natural Ice Cream</div>
                                    <div className="l50">Ice Cream, Desserts</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o5" onClick={()=>props.history.push("Havmor")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Havmor")}>
                                <div className="l48">
                                    <div className="l49">Havmor Ice Cream</div>
                                    <div className="l50">Ice Cream, Desserts</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o6" onClick={()=>props.history.push("Golli")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Golli")}>
                                <div className="l48">
                                    <div className="l49">Goli Vada Pav No.1</div>
                                    <div className="l50">Maharashtrain,Sandwich,Snacks</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="l4">
                        <div className="l5">
                        <div className="l6">
                            <div className="o7" onClick={()=>props.history.push("Mata")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Mata")}>
                                <div className="l48">
                                    <div className="l49">Mata Da Dhaba</div>
                                    <div className="l50"> North Indian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o8" onClick={()=>props.history.push("Patwari")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Patwari")}>
                                <div className="l48">
                                    <div className="l49">Patwari Vaishno Dhaba</div>
                                    <div className="l50">Desserts, Beverages, Pizza</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o9" onClick={()=>props.history.push("Tasty")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Tasty")}>
                                <div className="l48">
                                    <div className="l49">Tasty Bites</div>
                                    <div className="l50">Chinese, Italian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o10" onClick={()=>props.history.push("Eatt")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Eatt")}>
                                <div className="l48">
                                    <div className="l49">Eat Well</div>
                                    <div className="l50"> Mughlai</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="l4">
                        <div className="l5">
                        <div className="l6">
                            <div className="o11" onClick={()=>props.history.push("Scf")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Scf")}>
                                <div className="l48">
                                    <div className="l49">SCF Chaap and Kababas</div>
                                    <div className="l50">Indian, North Indian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o12" onClick={()=>props.history.push("Ccd")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Ccd")}>
                                <div className="l48">
                                    <div className="l49">Cafe Coffee Day</div>
                                    <div className="l50">Cafe, Fast Food</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o13" onClick={()=>props.history.push("Sharma")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Sharma")}>
                                <div className="l48">
                                    <div className="l49">Sharma Vaishno Dhaba</div>
                                    <div className="l50"> North Indian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o14" onClick={()=>props.history.push("Coffila")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Coffila")}>
                                <div className="l48">
                                    <div className="l49">Coffila Food Court</div>
                                    <div className="l50">Chinese, Indian, North Indian</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="l4">
                        <div className="l5">
                        <div className="l6">
                            <div className="o15" onClick={()=>props.history.push("Moti")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Moti")}>
                                <div className="l48">
                                    <div className="l49">Moti Sweets</div>
                                    <div className="l50">North Indian, Desserts, Mithai</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o16" onClick={()=>props.history.push("Pahwa")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Pahwa")}>
                                <div className="l48">
                                    <div className="l49">Pahwa Refreshment</div>
                                    <div className="l50">Beverages</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o17" onClick={()=>props.history.push("Hardyz")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Hardyz")}>
                                <div className="l48">
                                    <div className="l49">Hardyz Burger</div>
                                    <div className="l50">American, Burger, Fast Food</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                            <div className="o18" onClick={()=>props.history.push("Vimpi")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Vimpi")}>
                                <div className="l48">
                                    <div className="l49">Vimpi's</div>
                                    <div className="l50">Chinese, Continental, Italian</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default JalndharCantt