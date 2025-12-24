import React from "react";
import './mywork.css';
import mywork_data from "../../assets/mywork_data";
const Mywork=()=>{
    return(
        <div className="mywork" id="mywork">
             <div className="mywork-title">
                <h1>My Letest Work</h1>
                <img src="" alt=""></img>
             </div>
             <div className="mywork-container">
                 {mywork_data.map((work,index)=>{
                    return <img src={work.w_img} key={index} alt="" width={300} height={250}></img>
                 })}
             </div>
             <div className="mywork-showmore">
                <p>Show More</p>
                <span>---></span>
             </div>
        </div>
    )
}
export default Mywork