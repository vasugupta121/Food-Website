import React from 'react'
import './Modeltown.css'
import './Gtroad.css'

function GtRoad(props) {
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
            <div className="q1">
                <div className="q2">
                    <div className="l4">
                        <div className="l5">
                            <div className="l6">
                                <div className="q3" onClick={()=>props.history.push("Sharmaa")}></div>
                            </div>
                            <div className="l7" onClick={()=>props.history.push("Sharmaa")}>
                                <div className="l48">
                                    <div className="l49">Sharma Snaks</div>
                                    <div className="l50">Street Food, Fast Food, Rolls</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                        <div className="q4"  onClick={()=>props.history.push("Superfast")}></div>
                        </div>
                            <div className="l7"  onClick={()=>props.history.push("Superfast")}>
                                <div className="l48">
                                    <div className="l49">Superfast Vegetarian</div>
                                    <div className="l50">North Indian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6">
                            <div className="q5"  onClick={()=>props.history.push("Nikskitchen")}></div>
                            </div>
                            <div className="l7"  onClick={()=>props.history.push("Nikskitchen")}>
                                <div className="l48">
                                    <div className="l49">Niks Kitchen</div>
                                    <div className="l50">North Indian, Chinese, BBQ</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6">
                            <div className="q6"  onClick={()=>props.history.push("Wimpy")}></div>
                            </div>
                            <div className="l7"  onClick={()=>props.history.push("Wimpy")}>
                                <div className="l48">
                                    <div className="l49">Wimpy Restaurant</div>
                                    <div className="l50">Italian, Salad, Pizza, Fast Food</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l4">
                        <div className="l5">
                            <div className="l6">
                            <div className="q7"  onClick={()=>props.history.push("Humm")}></div>
                            </div>
                            <div className="l7"  onClick={()=>props.history.push("Humm")}>
                                <div className="l48">
                                    <div className="l49">Humm Bakerz&Restaurant</div>
                                    <div className="l50">Bakery, North Indian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                        <div className="q8"  onClick={()=>props.history.push("Spaghetti")}></div>
                        </div>
                            <div className="l7"  onClick={()=>props.history.push("Spaghetti")}>
                                <div className="l48">
                                    <div className="l49">Spaghetti Club</div>
                                    <div className="l50">Italian, Wraps, Rolls, Healthy Food</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6">
                            <div className="q9" onClick={()=>props.history.push("Transformers")}></div>
                            </div>
                            <div className="l7" onClick={()=>props.history.push("Transformers")}>
                                <div className="l48">
                                    <div className="l49">Transformers Meal</div>
                                    <div className="l50">Healthy Food, Burger</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6">
                            <div className="q10" onClick={()=>props.history.push("Asff")}></div>
                            </div>
                            <div className="l7" onClick={()=>props.history.push("Asff")}>
                                <div className="l48">
                                    <div className="l49">ASF-American Style Fried</div>
                                    <div className="l50">Fast Food</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l4">
                        <div className="l5">
                            <div className="l6">
                            <div className="q11" onClick={()=>props.history.push("Js")}></div>
                            </div>
                            <div className="l7" onClick={()=>props.history.push("Js")}>
                                <div className="l48">
                                    <div className="l49">J.S Royel Chicken Corner</div>
                                    <div className="l50">North Indian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6">
                        <div className="q12" onClick={()=>props.history.push("Bawarchi")}></div>
                        </div>
                            <div className="l7" onClick={()=>props.history.push("Bawarchi")}>
                                <div className="l48">
                                    <div className="l49">Bawarchi</div>
                                    <div className="l50">North Indian, Biryani</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6">
                            <div className="q13" onClick={()=>props.history.push("Biryanidilse")}></div>
                            </div>
                            <div className="l7" onClick={()=>props.history.push("Biryanidilse")}>
                                <div className="l48">
                                    <div className="l49">Biryani Dil Se!</div>
                                    <div className="l50">Biryani, North Indian, Awadhi</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6">
                            <div className="q14" onClick={()=>props.history.push("Hello")}></div>
                            </div>
                            <div className="l7" onClick={()=>props.history.push("Hello")}>
                                <div className="l48">
                                    <div className="l49">Hello Food</div>
                                    <div className="l50"> Sandwich, Desserts, Beverages</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l4">
                        <div className="l5">
                            <div className="l6">
                            <div className="q15" onClick={()=>props.history.push("Delivered")}></div>
                            </div>
                            <div className="l7" onClick={()=>props.history.push("Delivered")}>
                                <div className="l48">
                                    <div className="l49">Delivered My Meal</div>
                                    <div className="l50">North Indian</div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                        <div className="l6"></div>
                            <div className="l7">
                                <div className="l48">
                                    <div className="l49"></div>
                                    <div className="l50"></div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6"></div>
                            <div className="l7">
                                <div className="l48">
                                    <div className="l49"></div>
                                    <div className="l50"></div>
                                </div>
                            </div>
                        </div>
                        <div className="l5">
                            <div className="l6"></div>
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
    )
}
export default GtRoad