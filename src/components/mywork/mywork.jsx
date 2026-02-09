import React from "react";
import './mywork.css';
import mywork_data from "../../assets/mywork_data";
const Mywork=()=>{
    return(
        <div className="mywork" id="mywork">
             <div className="mywork-title">
                <h1>My Letest Work</h1>
                {/* <img src="" alt=""></img> */}
             </div>
             <div className="mywork-container">
                 {mywork_data.map((work,index)=>{
                    return <>
                         <a href="https://counter-reactvite-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img src={work.w_img} key={index} alt="" width={250} height={200}></img>
                            <p key={index} style={{textDecoration:"none", fontSize:"22px",color:"white", marginTop:"10px"}}>{work.w_desc}</p>
                        </a>
                       
                         
                    </>
                          
                 })}
             </div>
             <div className="mywork-showmore">
                <p>Show More</p>
                <span>---&gt;</span>
             </div>
        </div>
    )
}
export default Mywork