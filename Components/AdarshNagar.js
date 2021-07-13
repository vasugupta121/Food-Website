import React from 'react'
import './Modeltown.css'
import './Adarshnagar.css'

function AdarshNagar(props) {
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
                <div className="n1">
                    <div className="n2">
                        <div className="l4">
                            <div className="l5">
                                <div className="l6">
                                    <div className="n3" onClick={()=>props.history.push("Instapizza")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Instapizza")}>
                                <div className="l48">
                                        <div className="l49">Instapizza</div>
                                        <div className="l50">Pizza, Fast Food, Italian, Desserts</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n4" onClick={()=>props.history.push("Burgeradda")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Burgeradda")}>
                                <div className="l48">
                                        <div className="l49">Burger Adda</div>
                                        <div className="l50">Burger, Pizza, Chinese</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n5" onClick={()=>props.history.push("B4")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("B4")}>
                                <div className="l48">
                                        <div className="l49">B4 Restaurant</div>
                                        <div className="l50"> North Indian, Fast Food, Continental</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n6" onClick={()=>props.history.push("Frozen")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Frozen")}>
                                <div className="l48">
                                        <div className="l49">Frozen N Fry</div>
                                        <div className="l50">Italian, Fast Food</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l4">
                        <div className="l5">
                                <div className="l6" >
                                <div className="n7" onClick={()=>props.history.push("Chick")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Chick")}>
                                <div className="l48">
                                        <div className="l49">Chick Chick</div>
                                        <div className="l50">North Indian, Butter Chicken</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n8" onClick={()=>props.history.push("Kumar")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Kumar")}>
                                <div className="l48">
                                        <div className="l49">Kumar Cake House</div>
                                        <div className="l50">Bakery</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n9" onClick={()=>props.history.push("Dashmesh")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Dashmesh")}>
                                <div className="l48">
                                        <div className="l49">Dashmesh Bakery</div>
                                        <div className="l50">Bakery, Desserts</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n10" onClick={()=>props.history.push("Bunty")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Bunty")}>
                                <div className="l48">
                                        <div className="l49">Bunty Lajawab Burger C..</div>
                                        <div className="l50">Mughlai, Afghan, Fast Food</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l4">
                        <div className="l5">
                                <div className="l6">
                                <div className="n11"  onClick={()=>props.history.push("Nanakveg")}></div>
                                </div>
                                <div className="l7"  onClick={()=>props.history.push("Nanakveg")}>
                                <div className="l48">
                                        <div className="l49">Nanak Vegetarian Dhaba</div>
                                        <div className="l50"> North Indian, Fast Food, South..</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n12" onClick={()=>props.history.push("Guru")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Guru")}>
                                <div className="l48">
                                        <div className="l49">Guru Kirpa Veg Champ C..</div>
                                        <div className="l50">Chinese, North Indian</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n13" onClick={()=>props.history.push("Platoonnpizza")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Platoonnpizza")}>
                                <div className="l48">
                                        <div className="l49">Platoon Pizza</div>
                                        <div className="l50">Italian, Pizza</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n14" onClick={()=>props.history.push("Kanta")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Kanta")}>
                                <div className="l48">
                                        <div className="l49">Kanta Chhuri</div>
                                        <div className="l50">South Indian, Italian,Chinese</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l4">
                        <div className="l5">
                                <div className="l6">
                                <div className="n15" onClick={()=>props.history.push("King")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("King")}>
                                <div className="l48">
                                        <div className="l49">King Omelette</div>
                                        <div className="l50">North India</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n16" onClick={()=>props.history.push("Gfc")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Gfc")}>
                                <div className="l48">
                                        <div className="l49">Gfc- The Chaap Hub</div>
                                        <div className="l50">North Indian</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n17" onClick={()=>props.history.push("Basant")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Basant")}>
                                <div className="l48">
                                        <div className="l49">Basant Continental</div>
                                        <div className="l50">North Indian, Chinese, Cont..</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n18" onClick={()=>props.history.push("Dilbagh")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Dilbagh")}>
                                <div className="l48">
                                        <div className="l49">Dilbagh Sweets</div>
                                        <div className="l50">Chinese, Desserts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l4">
                        <div className="l5">
                                <div className="l6">
                                <div className="n19" onClick={()=>props.history.push("Uttam")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Uttam")}>
                                <div className="l48">
                                        <div className="l49">Uttam Food Court</div>
                                        <div className="l50">North Indian, Chinese, Fast Food</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n20" onClick={()=>props.history.push("G1")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("G1")}>
                                <div className="l48">
                                        <div className="l49">G1 Fast Food</div>
                                        <div className="l50">North Indian</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n21" onClick={()=>props.history.push("Lovelychamp")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Lovelychamp")}>
                                <div className="l48">
                                        <div className="l49">Lovely Veg Champ</div>
                                        <div className="l50">North Indian, Snacks</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n22" onClick={()=>props.history.push("Momos")}></div>
                                </div>
                                <div className="l7" onClick={()=>props.history.push("Momos")}>
                                <div className="l48">
                                        <div className="l49">The Momos Hut</div>
                                        <div className="l50">Momos,Fast Food, Chinese</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l4">
                        <div className="l5">
                                <div className="l6">
                                <div className="n23"  onClick={()=>props.history.push("Eat")}></div>
                                </div>
                                <div className="l7"  onClick={()=>props.history.push("Eat")}>
                                <div className="l48">
                                        <div className="l49">Eat And Brup</div>
                                        <div className="l50">North Indian, Chinese</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                <div className="n24"  onClick={()=>props.history.push("Royal")}></div>
                                </div>
                                <div className="l7"  onClick={()=>props.history.push("Royal")}>
                                <div className="l48">
                                        <div className="l49">The Royal'z Diet</div>
                                        <div className="l50"> Chinese, Sandwich, Salad</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                    <div className="n25"  onClick={()=>props.history.push("Ravi")}></div>
                                </div>
                                <div className="l7"  onClick={()=>props.history.push("Ravi")}>
                                <div className="l48">
                                        <div className="l49">Ravi Egg Corner</div>
                                        <div className="l50"> Burger, Sandwich, Rolls, Street Food</div>
                                    </div>
                                </div>
                            </div>
                            <div className="l5">
                                <div className="l6">
                                    <div className="n26"  onClick={()=>props.history.push("Newhungry")}></div>
                                </div>
                                <div className="l7"  onClick={()=>props.history.push("Newhungry")}>
                                <div className="l48">
                                        <div className="l49">New Hungry Tummy</div>
                                        <div className="l50">Fast Food, Chinese, Continental</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default AdarshNagar