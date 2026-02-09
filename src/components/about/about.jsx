import React from 'react';
import './about.css';
import youngman from '../../assets/youngman.jpg';
import about from '../../assets/about.jpg';
const About=()=>{
    return(
        <div className='about' id='about'>
            <div className='aboutTitle'>
                <h1>About me</h1>
                {/* <img src={about} alt='' height={160} width={200}></img> */}
            </div>
            <div className='about-section'>
                <div className='about-left'>
                    <img src={about} alt='' height={400} width={300}></img>
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>I'm Salman Hashmi, a passionate Full Stack Web Developer skilled in building
                           responsive and user-friendly web applications.
                            <br/><br/>
                           I work with JavaScript, React.js, Node.js, MongoDB, and modern UI frameworks
                           like Tailwind CSS and Bootstrap. I enjoy turning ideas into real-world
                           applications and continuously learning new technologies.
                             <br/><br/>
                           As a fresher, I am eager to gain hands-on experience, improve my skills,
                           and contribute to meaningful projects while growing as a developer.</p>
                        <p>
                            Mujhe naye technologies seekhna aur real-world projects par kaam
                            karna achha lagta hai.
                        </p>
                    </div>
                    <div className='about-skills'>
                         <div className='about-skill'>
                            <p>HTML & CSS</p>
                            <hr style={{width:"50%"}}></hr>
                         </div>
                         <div className='about-skill'>
                            <p>React Js</p>
                            <hr style={{width:"50%"}}></hr>
                         </div>
                         <div className='about-skill'>
                            <p>JavaScript</p>
                            <hr style={{width:"50%"}}></hr>
                         </div>
                         <div className='about-skill'>
                            <p>Next Js</p>
                            <hr style={{width:"50%"}}></hr>
                         </div>
                    </div>
                </div>
                

            </div>
            <div className='about-achievements'>
                    <div className="about-achievement">
                        <h1>2+</h1>
                        <p>Year of non-tech work experience</p>
                    </div>
                    <hr />
                     <div className="about-achievement">
                        <h1>5+</h1>
                        <p>Project completed</p>
                    </div> 
                    <hr />
                    <div className="about-achievement">
                        <h1>Quick</h1>
                        <p>& fast learner</p>
                    </div>
                </div>
        </div>
    )
}
export default About