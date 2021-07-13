import React from 'react'
import './Myfourth.css'
import './Mysecond.css'

function Great(props) {
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
          <div className="k1">
            <div className="h4">
           <div className="k2">
             <div className="h5"></div>
             <div className="h6"></div>
           </div>
           <div className="k3">
               <div className="h7"></div>
               <div className="h8">
                   <div className="h12"  onClick={()=>props.history.push("Billa")}>
                       <div className="k16"></div>
                       <div className="17">
                           {/* <div className="h33"></div> */}
                           <div className="h34">Billa Kulfi Corner</div>
                           <div className="van"><i class="fas fa-star"> 4.7(416)</i></div>
                           <div className="h35">Shastri Nagar</div>
                           <div className="h36">Dessert Parlor-Desserts,Ice Cream</div>
                       </div>
                   </div>
                   <div className="h13"  onClick={()=>props.history.push("Kumar")}>
                       <div className="k18"></div>
                       <div className="h17">
                       <div className="h33"></div>
                           <div className="h34">Kumar Cake House</div>
                           <div className="van"><i class="fas fa-star"> 4.5(1320)</i></div>
                           <div className="h35">Adarsh Nagar</div>
                           <div className="h36">Bakery - Bakery</div>
                       </div>
                   </div>
                   <div className="h14"  onClick={()=>props.history.push("Dashmesh")}>
                   <div className="k19"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Dashmesh Bakery</div>
                           <div className="van"><i class="fas fa-star"> 4.5(130)</i></div>
                           <div className="h35">Adarsh Nagar</div>
                           <div className="h36">Bakery - Bakery</div>
                   </div>
                   </div>
                   <div className="h15" onClick={()=>props.history.push("Nic")}>
                   <div className="k20"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">NIC - Natural Ice Creams</div>
                           <div className="van"><i class="fas fa-star"> 4.5(203)</i></div>
                           <div className="h35">Jalandhar Cantt</div>
                           <div className="h36">Ice Creams, Desserts</div>
                   </div>
                   </div>
               </div>
               <div className="h9">
               <div className="h12" onClick={()=>props.history.push("Lovelybake")}>
               <div className="k32"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Lovely Bake Studio</div>
                           <div className="van"><i class="fas fa-star"> 4.7(537)</i></div>
                           <div className="h35">Nakodar Road</div>
                           <div className="h36">Bakery - Bakery,Sandwich,Pizza</div>
                   </div>
               </div>
                   <div className="h13"  onClick={()=>props.history.push("Food")}>
                   <div className="k21"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Food Bazar</div>
                           <div className="van"><i class="fas fa-star"> 4.5(1,040)</i></div>
                           <div className="h35">Shastri Nagar</div>
                           <div className="h36">Quick Bites-North Indian,Fast Food,..</div></div>  
                   </div>
                   <div className="h14" onClick={()=>props.history.push("Havmor")}>
                   <div className="k22"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Havmor Icecream</div>
                           <div className="van"><i class="fas fa-star"> 4.6(366)</i></div>
                           <div className="h35">Jalandhar Cantt</div>
                           <div className="h36">Dessert Parlor - Desserts,Ice cream</div>
                   </div>
                   </div>
                   <div className="h15"  onClick={()=>props.history.push("Nikk")}>
                   <div className="k23"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Nik Baker's</div>
                           <div className="van"><i class="fas fa-star"> 4.5(520)</i></div>
                           <div className="h35">Model Town</div>
                           <div className="h36">Bakery,Quick Bites-Italian,Continental</div>
                   </div>
                   </div>
               </div>
               <div className="h10">
               <div className="h12"  onClick={()=>props.history.push("Pirates")}>
               <div className="k30"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Pirates of Grill</div>
                           <div className="van"><i class="fas fa-star"> 4.9(1,686)</i></div>
                           <div className="h35">Shastri Nagar</div>
                           <div className="h36">Casual Dining -North Indian</div>
                   </div>
               </div>
                   <div className="h13"  onClick={()=>props.history.push("Tummy")}>
                   <div className="k24"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Tummys Drive</div>
                           <div className="van"><i class="fas fa-star"> 4.5(636)</i></div>
                           <div className="h35">Model Town</div>
                           <div className="h36">Quick Bites -Burger,Sandwich,Salad</div>
                   </div>
                   </div>
                   <div className="h14"  onClick={()=>props.history.push("Bunty")}>
                   <div className="k25"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Bunty Lajawab Burger Corner</div>
                           <div className="van"><i class="fas fa-star">4.5(179)</i></div>
                           <div className="h35">Adarsh Nagar</div>
                           <div className="h36">Food Court -Burger,Mughlai,Afghan,..</div>
                   </div>
                   </div>
                   <div className="h15"  onClick={()=>props.history.push("Rana")}>
                   <div className="k26"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Rana Bakery</div>
                           <div className="van"><i class="fas fa-star"> 4.6(148)</i></div>
                           <div className="h35">Shastri Nagar</div>
                           <div className="h36">Bakery- Bakery,Fast Food</div>
                   </div>
                   </div>
               </div>
               <div className="h11">
               <div className="h12"  onClick={()=>props.history.push("Dhan")}>
               <div className="k31"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Dhan Guru Ramdass Sweet</div>
                           <div className="van"><i class="fas fa-star"> 4.6(5,893)</i></div>
                           <div className="h35">Shastri Nagar</div>
                           <div className="h36">Sweet Shop - Mithai,Desserts,Bakery..</div>
                   </div>
               </div>
                   <div className="h13"  onClick={()=>props.history.push("Sohan")}>
                   <div className="k27"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">SOHAN S</div>
                           <div className="van"><i class="fas fa-star"> 4.5(360)</i></div>
                           <div className="h35">Shastri Nagar</div>
                           <div className="h36">Quick Bites-Burger,Sandwich,Chinese.</div>
                   </div>
                   </div>
                   <div className="h14" onClick={()=>props.history.push("Haveli")}>
                   <div className="k28"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Haveli</div>
                           <div className="van"><i class="fas fa-star"> 4.8(467)</i></div>
                           <div className="h35">Rama Mandi</div>
                           <div className="h36">Casul Dining -North Indian</div>
                   </div>
                   </div>
                   <div className="h15"  onClick={()=>props.history.push("Fancy")}>
                   <div className="k29"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Fancy Bakers Classic</div>
                           <div className="van"><i class="fas fa-star"> 4.6(1,132)</i></div>
                           <div className="h35">Shastri Nagar</div>
                           <div className="h36">Bakery -Bakery,Desserts</div>
                   </div>
                   </div>
                   
               </div>
               <div className="h9">
               <div className="h12" onClick={()=>props.history.push("Aarkay")}>
               <div className="k35"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Aar Kay Vaishno Dhaba</div>
                           <div className="van"><i class="fas fa-star"> 4.5(1,246)</i></div>
                           <div className="h35">Nakodar Road</div>
                           <div className="h36">Quick Bites-North Indian,Desserts</div>
                   </div>
               </div>
                   <div className="h13"  onClick={()=>props.history.push("Oberoi")}>
                   <div className="k36"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Oberoi Special Chana Bhatura</div>
                           <div className="van"><i class="fas fa-star"> 4.5(569)</i></div>
                           <div className="h35">Model Town</div>
                           <div className="h36">Quick Bites-North Indian, Beverages,.</div></div>  
                   </div>
                   <div className="h14"  onClick={()=>props.history.push("Sodhi")}>
                   <div className="k37"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Sodhi Jalebi</div>
                           <div className="van"><i class="fas fa-star"> 4.5(1,899)</i></div>
                           <div className="h35">Shastri Nagar</div>
                           <div className="h36">Sweet Shop,Dessert Parlor-Desserts</div>
                   </div>
                   </div>
                   <div className="h15"  onClick={()=>props.history.push("Lakshmi")}>
                   <div className="k38"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Lakshmi Refreshment</div>
                           <div className="van"><i class="fas fa-star"> 4.5(496)</i></div>
                           <div className="h35">Shastri Nagar</div>
                           <div className="h36">Dessert Parlor - Ice cream, Desserts</div>
                   </div>
                   </div>
                   
               </div>
               <div className="h11">
               <div className="h12" onClick={()=>props.history.push("Goli")}>
               <div className="k39"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Goli Vada Pav No.1</div>
                           <div className="van"><i class="fas fa-star"> 4.5(1,381)</i></div>
                           <div className="h35">Jalandhar Cantt</div>
                           <div className="h36">Food Court- Maharashtrain,Sandwich..</div>
                   </div>
               </div>
                   <div className="h13"  onClick={()=>props.history.push("Maddi")}>
                   <div className="k40"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Maddi Refreshment</div>
                           <div className="van"><i class="fas fa-star"> 4.6(16.7k)</i></div>
                           <div className="h35">Shastri Nagar</div>
                           <div className="h36">Quick Bites-Street Food</div>
                   </div>
                   </div>
                   <div className="h14" onClick={()=>props.history.push("Sharma")}>
                   <div className="k41"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">Sharma Snaks</div>
                           <div className="van"><i class="fas fa-star"> 4.5(1,842)</i></div>
                           <div className="h35">GT Road</div>
                           <div className="h36">Food Court - Street Food,Fast Food,..</div>
                   </div>
                   </div>
                   <div className="h15"  onClick={()=>props.history.push("Ksmomos")}>
                   <div className="k42"></div>
                   <div className="h17">
                   <div className="h33"></div>
                           <div className="h34">K.S Momos</div>
                           <div className="van"><i class="fas fa-star"> 4.5(170)</i></div>
                           <div className="h35">Model Town</div>
                           <div className="h36">Quick Bites-Momos,Chinese,Rolls,..</div>
                   </div>
                   </div>
                   
               </div>
               </div>
             </div>
           <div className="i4">
                        <div className="i9" onClick={()=>props.history.push("Pocket")}>
                            <div className="i13"></div>
                            <div className="i14">Pocket Friendly</div>
                        </div>
                        <div className="i10" onClick={()=>props.history.push("Great")}>
                        <div className="i13"></div>
                        <div className="i14">Great Food No Bull</div>
                        </div>
                        <div className="i11" onClick={()=>props.history.push("Chicken")}>
                        <div className="i13"></div>
                        <div className="i14">Butter Chicken</div>
                        </div>
                        <div className="i12" onClick={()=>props.history.push("MyMenu")}>
                        <div className="i13"></div>
                        <div className="i14">Trending This Week</div>
                        </div>
                    </div>
          </div>
          
        </div>
    )
}
export default Great

