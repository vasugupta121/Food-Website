import React from 'react'
import './Kartarpur.css'

function Kartarpur(props) {
    return(
        <div>
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
            <div className="x1">
                <div className="x2">
                    <div className="l4">
                        <div className="l5">
                            <div className="l6">
                                <div className="x3" onClick={() => props.history.push("Hotelb1")}></div>
                            </div>
                            <div className="l7" onClick={() => props.history.push("Hotelb1")}>
                                <div className="l48">
                                    <div className="l49">Hotel B 1</div>
                                    <div className="l50">North Indian, Continental, Chinese</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                        <div className="x4" onClick={() => props.history.push("Thewhite")}></div>
                        </div>
                            <div className="l7" onClick={() => props.history.push("Thewhite")}>
                                <div className="l48">
                                    <div className="l49">The White Spott Resort</div>
                                    <div className="l50">Chinese, North Indian, Mughlai</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6">
                            <div className="x5" onClick={() => props.history.push("Sohal")}></div>
                            </div>
                            <div className="l7" onClick={() => props.history.push("Sohal")}>
                                <div className="l48">
                                    <div className="l49">Sohal Food Corner</div>
                                    <div className="l50">Chinese, Burger</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6">
                            <div className="x6" onClick={() => props.history.push("Sameer")}></div>
                            </div>
                            <div className="l7" onClick={() => props.history.push("Sameer")}>
                                <div className="l48">
                                    <div className="l49">Sameer Fast Food</div>
                                    <div className="l50">Chinese, Burger, Mughlai</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="l4">
                        <div className="l5">
                            <div className="l6">
                            <div className="x7" onClick={() => props.history.push("Bubbles")}></div>
                            </div>
                            <div className="l7" onClick={() => props.history.push("Bubbles")}>
                                <div className="l48">
                                    <div className="l49">Bubbles</div>
                                    <div className="l50">Chinese, North Indian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                        <div className="x8" onClick={() => props.history.push("Bhalla")}></div>
                        </div>
                            <div className="l7" onClick={() => props.history.push("Bhalla")}>
                                <div className="l48">
                                    <div className="l49">Bhalla Mid point</div>
                                    <div className="l50">North Indian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6">
                            <div className="x9" onClick={() => props.history.push("Yummykitchen")}></div>
                            </div>
                            <div className="l7" onClick={() => props.history.push("Yummykitchen")}>
                                <div className="l48">
                                    <div className="l49">Yummy Kitchen</div>
                                    <div className="l50">Pizza, Fast Food</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6">
                            <div className="x10"></div>
                            </div>
                            <div className="l7">
                                <div className="l48">
                                    <div className="l49"></div>
                                    <div className="l50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> 
        </div>
        </div>
    )
}
export default Kartarpur