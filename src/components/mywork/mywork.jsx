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
                         <div className="work-card" style={{
                            }}>

                             {/* Project Image */}
                             <img src={work.w_img} alt="project" height={195} style={{width:"100%",
                                  borderRadius: "10px",objectFit: "cover"}} 
                               />

                             {/* Project Title / Description */}
                             <p style={{ fontSize: "18px", color: "#fff", margin: "12px 0"}}> 
                                {work.w_desc}
                             </p>
                                 

                             {/* Buttons */}
                             <div style={{ display: "flex",justifyContent: "space-between",gap: "10px"}}>
                                  <a href={work.w_live_url} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                  <a href={work.w_github_url} target="_blank"rel="noopener noreferrer" style={{background:"white"}}>GitHub Code</a>
                             </div>
                         </div>



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