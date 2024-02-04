import React from 'react'
import window from '../../img/window.svg'
const PricingCardWindow = (props) => {
  return (
      <>
          <div class="plan_win">
        <div class="plan-inner-win" style={{ backgroundColor: props.bcolor }}>
        <img src={window} alt="" />
         <div className="plan_head-win">
            <h4 style={{color:props.tcolor}}>{props.head}</h4>
            <p style={{color:props.tcolor}}>{props.text}</p>
            <h4 style={{color:props.tcolor}}>{props.price}</h4>
                </div>
                <hr />
            <div className="plan_ser_specs">
            <div className="plan-ser-c">
                <div className="plan_process plan-ser-data">
                    <p>Processeur</p>
                    <h4  style={{color:props.tcolor}}>{props.process1}</h4>
                    <h6  style={{color:props.tcolor}}>{props.process2}</h6>
                </div>
                <div className="plan_stockage  plan-ser-data">
                <p>Stockage</p>
                    <h4  style={{color:props.tcolor}}>{props.stock1}</h4>
                    <h6  style={{color:props.tcolor}}>{props.stock2}</h6>
                </div>
         
               </div>
               <div className="plan-ser-c">
               <div className="plan_memory  plan-ser-data">
                <p>Memoire</p>
                    <h4  style={{color:props.tcolor}}>{props.mem1}</h4>
                    <h6   style={{color:props.tcolor}}>{props.mem2}</h6>
                </div>
                 <div className="plan-band  plan-ser-data">
                 <p>Bande Passante</p>
                    <h4  style={{color:props.tcolor}}>{props.band}</h4>
                   
                 </div>
                 
                 </div>
    </div>
    <hr />
    <div className="plan-ser-det">
            <p>{props.det}</p>
            <ul>
              <li>{props.l1}</li>
              <li>{props.l2}</li>
              <li>{props.l3}</li>
              <li>{props.l4}</li>
              <li>{props.l5}</li>
           
            </ul>
           </div>
          <button className="button win-btn">Acheter</button>
   
    </div>
    </div>
    </>
  )
}

export default PricingCardWindow
