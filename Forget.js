import React, { useState } from 'react'
import './Mythird.css'
import './Myfirst.css'


function Forget() {
    let [number,setNumber]=useState("")
    let [otp,setOtp]=useState("")

    const getData =()=>{
        if (number.trim() == '') {
            document.getElementById('userNumber').innerHTML="Enter Number"
        }else if (number.length <10 || number.length >10 ) {
            document.getElementById('userNumber').innerHTML="Invalid Number"
        }
        else{
            document.getElementById('userNumber').innerHTML="Otp Send On Your Phone Number"
        }
        if (otp.trim() == '') {
            document.getElementById('userOtp').innerHTML="Enter Otp"
        }else if (otp.length <4 || otp.length >4 ) {
            document.getElementById('userOtp').innerHTML="Invalid Otp"
        }
        else{
            document.getElementById('userOtp').innerHTML="ok"
        }
    }
    return(
        <div>
           <div className="f1">
               <div className="f3"></div>
               <div className="f2">
                   <div className="f4">
                   <input 
                           type="number"
                           placeholder="User Number"
                           className="w1"
                           onChange={(e)=>setNumber(e.target.value)}
                           /><span id="userNumber"></span>
                   </div>
                   <div className="f5">
                       <input 
                       type="text"
                       placeholder="One Time Password (OTP)"
                       className="w1"
                       onChange={(e)=>setOtp(e.target.value)}
                       /><span id="userOtp"></span>
                   </div>
                   <div className="f6"onClick={getData}>Login</div>
                   <div className="f7" >Resend Otp</div>
               </div>
           </div>
        </div>
    )
}
export default Forget