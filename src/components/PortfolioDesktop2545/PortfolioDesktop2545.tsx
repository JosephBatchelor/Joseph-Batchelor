import { memo } from 'react';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import 'animate.css';
import 'animate.css/animate.min.css';
import MainArea from "../MainArea/mainArea.js";
import SkillSlider from "../SkillSection/SkillSection.js";


import resets from '../_resets.module.css';
import classes from './PortfolioDesktop2545.module.css';

interface Props {
  className?: string;
}


export const PortfolioDesktop2545: FC<Props> = memo(function PortfolioDesktop2545(props = {}) {
  
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>

            <MainArea/>

      {/* <div className={classes.rectangle30}></div>     */}

      <div className={classes.rectangle26}></div>    

      <div className={classes.rectangle27}></div>    

<div className={classes.aboutSection} >
        
        
  <div className={classes.aboutSectionContainer}>
    
    <div className={classes.card}></div>
      <div className={classes.HS}></div>
      <div className={classes.spotify}></div>

       
      <div className={classes.aBOUT}>ABOUT</div>
        <div className={classes.jOSEPHBATCHELOR}>JOSEPH BATCHELOR</div>
            <div className={classes.hiThereIMJosephAFullStackDevel}>
              <div className={classes.textBlock}>
                Hi there! I&#39;m Joseph, a Full Stack Developer who brings ideas to life with my design, build, and secure
                approach. My diverse skill set and expertise across various platforms and languages make me a valuable asset
                to any team.
              </div>
              <div className={classes.textBlock2}>
                I&#39;m always on the lookout for new opportunities where I can unleash my full potential and continue
                learning and growing.
              </div>
              <div className={classes.textBlock3}>
                So, if you&#39;ve got a challenging project that needs a multi-talented developer like myself, let&#39;s
                connect! Follow me on LinkedIn for a glimpse of my coding wizardry and some useful programming content.
                Let&#39;s make things happen!
              </div>
            </div>
           
        </div>
</div>




<div className={classes.rectangle28}>
  
      <div className={classes.informationContainer}> 
      
       <div  className={classes.card2}>
            <p className={classes.one}><span>Education</span>
              <div className={classes.display1}>
              <div className={classes.imageOutLine1}>
              <svg className={classes.edicon} width="78" height="78" fill="#131233" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 17.366 5.077 13.08v4.614L12 21.86l6.923-4.166V13.08L12 17.366Z"></path>
  <path d="M23.088 8.999 12 2.135.912 8.999 12 15.863l9-5.572V18h2.077V9.005l.01-.006Z"></path>
</svg>
              </div>

                <div className={classes.Degree}>Computer science, University of Brighton </div>
                <br/>
                <div className={classes.Date}>SEPTEMBER 2019 – JULY 2022</div>
                <div className={classes.Graduated}>Graduated with:</div>
                <div className={classes.Result}>First-Class BSc Honours degree</div>
                <ul className={classes.subjects}>
                  <li>Object-Oriented design and architecture</li>
                  <li>Cloud computing</li>
                  <li>Web development</li>
                  <li>Data structures, and algorithms</li>
                  <li>Secure networks and systems</li>
                  <li>Information security and management</li>
                  <li>Concurrency, and client-server computing</li>
                </ul>
              
              </div>
            </p>
       
            <p className={classes.two}><span>Experiance</span>
              <div className={classes.display2}>

                  <div className={classes.imageOutLine2}>
                  <svg className={classes.edicon2} width="78" height="78" fill="#131233" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 18.234a.98.98 0 0 1-.648-.244l-6-5.25a.985.985 0 0 1 0-1.48l6-5.25a.984.984 0 1 1 1.296 1.48L2.994 12l5.154 4.509a.984.984 0 0 1-.649 1.725Z"></path>
  <path d="M16.5 18.234a.984.984 0 0 1-.648-1.725l5.154-4.51-5.153-4.508a.984.984 0 1 1 1.296-1.482l6 5.25a.985.985 0 0 1 0 1.482l-6 5.25a.979.979 0 0 1-.648.243Z"></path>
  <path d="M9.75 20.481a.985.985 0 0 1-.943-1.266l4.5-15a.984.984 0 1 1 1.885.563l-4.5 15a.984.984 0 0 1-.942.703Z"></path>
</svg>
                  </div>
              <div className={classes.Degree}>Freelance Developer, Essex Chelmsford </div>
              <div className={classes.Date}>NOVEMBER 2023 – CURRENT</div>
              <ul className={classes.subjects2}>
                  <li>Developed personalized, responsive websites for clients using React, HTML/CSS, and JavaScript ES6, resulting in high levels of client satisfaction and positive feedback.</li>
                  <li>Implemented agile methodologies, including sprint planning and daily stand-ups, to increase project efficiency and ensure the timely delivery of high-quality results.</li>
                  <li>Managed multiple projects simultaneously, prioritizing tasks and delegating responsibilities to ensure the timely and successful completion of all deliverables.</li>
      
                </ul>
                
              </div>
            </p>
 
            <p className={classes.three}><span>Achievements</span>
              <div className={classes.display3}>
              <div className={classes.imageOutLine3}>
              <svg className={classes.edicon3} width="78" height="78" fill="#131233" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.745 3.75V1.5H5.25v2.25H1.5v1.781c0 1.5.445 2.944 1.254 4.06.625.863 1.602 1.458 2.48 1.744.256 1.373.947 2.678 2.353 3.742 1.031.781 2.271 1.354 3.382 1.588v3.773H7.5V22.5h9v-2.063h-3.469v-3.773c1.11-.234 2.35-.806 3.382-1.587 1.406-1.064 2.098-2.369 2.352-3.742.879-.286 1.856-.881 2.48-1.744.81-1.116 1.255-2.56 1.255-4.06V3.75h-3.755ZM4.425 8.381c-.5-.688-.805-1.612-.855-2.569h1.68V8.97c-.185-.053-.606-.286-.825-.589Zm15.15 0c-.216.31-.544.59-.825.59 0-1.05 0-2.17-.002-3.159h1.682c-.05.957-.367 1.87-.855 2.57Z"></path>
</svg>
              </div>
              <div className={classes.Degree}>Winner of the Second Annual Codefest </div>
              <div className={classes.subjects3}>
              I won the second annual codefest in the second-year category. A competitive university event that allowed me to apply my coding skills, and critical thinking skills, and complete tasks in a highly competitive environment. Tasks included navigating data structures, creating a simple weather app for pilots, and an array of abstract problem-solving.
              </div>
              <div className={classes.Degree2}>Full Stack Bootcamp</div>
              <div className={classes.subjects4}>
                During my Second summer of University I took a 17 week Full stack bootcamp at Full Stack Academy. The bootcamp covers a wide range of topics, including front-end development with HTML, CSS, and JavaScript, back-end development with Node.js and Express, databases with PostgreSQL, and advanced topics such as authentication, security, and testing.
              </div>
              </div>
            </p>
        </div> 


      </div>  
</div>  





<div  className={classes.servicesSection}>
    <div className={classes.mYSKILLSET}>MY SKILL SET</div>
    <div className={classes.transformYourDigitalPresenceWi}>
          Transform your digital presence with my expertise in cutting-edge application development. I craft dynamic and
          user-friendly client-side experiences and robust server-side systems using modern stacks, delivering seamless
          performance. Let&#39;s work together to elevate your digital presence to the next level.
    </div>

    <div className={classes.otherskills}>
      <div className={classes.box1}>
        <div className={classes.skillimg}><svg className={classes.skillimg2} width="78" height="78" fill="none" stroke="#43419c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75 0-5.385-4.366-9.75-9.75-9.75Z"></path>
  <path d="M12 2.25c-2.722 0-5.28 4.365-5.28 9.75 0 5.384 2.56 9.75 5.281 9.75 2.722 0 5.282-4.366 5.282-9.75 0-5.385-2.56-9.75-5.282-9.75Z"></path>
  <path d="M5.5 5.5C7.293 6.773 9.55 7.532 12 7.532c2.451 0 4.708-.76 6.5-2.032"></path>
  <path d="M18.5 18.5c-1.792-1.272-4.049-2.031-6.5-2.031-2.45 0-4.707.759-6.5 2.031"></path>
  <path d="M12 2.25v19.5"></path>
  <path d="M21.75 12H2.25"></path>
</svg></div>
        <div className={classes.skilltitle}>WEB DEVELOPMENT</div>
        <p className={classes.skillinfo}>I specialize in designing visually stunning websites using modern stacks like <b>React, HTML/CSS, and JavaScript.</b> <br/>As well as building robust backend systems for data retrieval and processing with tools such as <b>Node, Express, and Axios.</b></p>

      </div>

      <div className={classes.box2}>
      <div className={classes.skillimg}><svg className={classes.skillimg2} width="78" height="78" fill="none" stroke="#43419c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.708 5.267C17.516 4.515 15.783 3.96 12 2.25 8.217 3.959 6.484 4.515 2.292 5.267 1.532 17.303 11.277 21.46 12 21.75c.723-.291 10.467-4.447 9.708-16.483Z"></path>
</svg></div>
      <div className={classes.skilltitle}>CYBERSECURITY</div>
      <div className={classes.skillinfo}>I specialize in cybersecurity, including network and system security, secure protocols, access control, vulnerability management, malware, cybercrime investigation, attack response, international frameworks, information security management, policies, incident response, ISO27001, and security audits.</div>

</div>

<div className={classes.box3}>
<div className={classes.skillimg}><svg className={classes.skillimg2} width="78" height="78" fill="none" stroke="#43419c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.003 11.576a1.154 1.154 0 0 0-.191-.257l-.86-.848a.98.98 0 0 0-1.399-.014c-.298.294-.843.829-1.828 1.802-1.882 1.862-5.378 4.983-6.958 6.314a.75.75 0 0 0-.051 1.104l1.828 1.848a.756.756 0 0 0 1.11-.041c1.37-1.612 4.513-5.11 6.374-6.949.956-.94 1.492-1.48 1.795-1.778a1.02 1.02 0 0 0 .18-1.181v0Z"></path>
  <path d="m22.427 9.426-1.609-1.594a.254.254 0 0 0-.187-.075.262.262 0 0 0-.188.075.534.534 0 0 1-.447.153c-.21-.023-.434-.088-.578-.228-.328-.321.05-.954-.238-1.359a11.38 11.38 0 0 0-1.082-1.253c-.33-.328-1.632-1.568-3.823-2.462a5.803 5.803 0 0 0-2.203-.433c-1.235 0-2.185.551-2.531.868-.276.249-.562.645-.562.645.165-.06.334-.11.506-.15.359-.077.726-.1 1.091-.07.73.06 1.609.403 2.08.773.76.61 1.087 1.425 1.138 2.477.037.782-.714 1.77-1.427 2.575a.368.368 0 0 0 .019.508l.996.995a.375.375 0 0 0 .522.005c.653-.634 1.457-1.335 1.913-1.616.456-.28.824-.36 1-.38.348-.033.697.043 1 .217a.64.64 0 0 1 .144.112.79.79 0 0 1-.024 1.113l-.094.089a.258.258 0 0 0 0 .367l1.609 1.594a.258.258 0 0 0 .187.074.265.265 0 0 0 .188-.074l2.6-2.571a.273.273 0 0 0 0-.375v0Z"></path>
</svg></div>
<div className={classes.skilltitle}>TOOLS</div>
<p className={classes.skillinfo}>I have expertise in various development tools, including <b>AWS, Git, Jest, JUnit, Figma, and Agile Methodology.</b> With my proficiency in cloud computing, version control, testing frameworks, and design collaboration, I can optimize development processes and deliver high-quality results.</p>

</div>



    </div>
</div>
<div className={classes.SliderContainer}>
  <SkillSlider/>
</div>




{/* <div  className={classes.rectangle29}></div> */}

<div className={classes.processSection}>

    <div className={classes.projectscontainer}>

      <div className={classes.gitstats}>
      <div id="projects" className={classes.pROJECTSIVEBUILT}>PROJECT’S I’VE BUILT</div>

        <div className={classes.gittext}> I've gained extensive experience through working on numerous projects, where I've acquired various new skills and tools. My focus has been on producing high-quality applications that meet the needs of clients. I invite you to check out my Github to see some of my work.</div>
        <a className={classes.btnGitHub} href="https://github.com/JosephBatchelor" target="_blank">Github</a>
     
     </div>

      <div  className={classes.project1}>
      <div className={classes.pbg1}></div>
      <div className={classes.layer}></div>

      <div className={classes.title}> FinFlex</div>
     
      <div className={classes.ghbtn}>
      <a className='Ghbtn' href="https://github.com/JosephBatchelor/FinFlex" target="_blank"><svg className='svgGit' width="45" height="45" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5C6.202 1.5 1.5 6.323 1.5 12.267c0 4.758 3.01 8.79 7.181 10.214a.82.82 0 0 0 .178.019c.39 0 .54-.286.54-.534 0-.258-.01-.933-.015-1.833a4.802 4.802 0 0 1-1.059.126c-2.02 0-2.48-1.57-2.48-1.57-.478-1.242-1.167-1.575-1.167-1.575-.914-.642-.005-.66.066-.66h.004c1.055.093 1.608 1.115 1.608 1.115.525.919 1.228 1.176 1.857 1.176a2.953 2.953 0 0 0 1.2-.28c.093-.695.365-1.168.665-1.44-2.33-.272-4.781-1.195-4.781-5.32 0-1.177.408-2.138 1.078-2.888-.108-.272-.469-1.369.103-2.85a.874.874 0 0 1 .235-.023c.38 0 1.237.145 2.653 1.13a9.76 9.76 0 0 1 5.259 0c1.416-.985 2.273-1.13 2.653-1.13a.873.873 0 0 1 .235.023c.571 1.481.21 2.578.103 2.85.67.755 1.078 1.716 1.078 2.888 0 4.134-2.456 5.043-4.796 5.31.375.333.713.99.713 1.993 0 1.439-.014 2.601-.014 2.953 0 .253.145.539.534.539a.9.9 0 0 0 .188-.019c4.176-1.425 7.181-5.46 7.181-10.214C22.5 6.323 17.798 1.5 12 1.5Z"></path>
      </svg></a>
      </div>

      <div className={classes.type}> Frontend + Backend</div>
        <div className={classes.Description}>Created an open banking web application, which allows users to access and manage financial data from multiple banks.</div>
        <div className={classes.Stacks}> 
        <p className={classes.tools}>HTML</p>
        <p className={classes.tools}>CSS</p>
        <p className={classes.tools}>Javascript ES6</p>
        <p className={classes.tools}>Node</p>
        <p className={classes.tools}>Express</p>
        <p className={classes.tools}>PHP</p>
        </div>
      </div>
      <div  className={classes.project2}>
        <div className={classes.pbg2}></div>
        <div className={classes.layer}></div>
        <div className={classes.title}> Sports Market Rest-API</div>
        <div className={classes.ghbtn}>
      <a className='Ghbtn' href="https://github.com/JosephBatchelor/Sports_Market_Rest_API" target="_blank"><svg className='svgGit' width="45" height="45" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5C6.202 1.5 1.5 6.323 1.5 12.267c0 4.758 3.01 8.79 7.181 10.214a.82.82 0 0 0 .178.019c.39 0 .54-.286.54-.534 0-.258-.01-.933-.015-1.833a4.802 4.802 0 0 1-1.059.126c-2.02 0-2.48-1.57-2.48-1.57-.478-1.242-1.167-1.575-1.167-1.575-.914-.642-.005-.66.066-.66h.004c1.055.093 1.608 1.115 1.608 1.115.525.919 1.228 1.176 1.857 1.176a2.953 2.953 0 0 0 1.2-.28c.093-.695.365-1.168.665-1.44-2.33-.272-4.781-1.195-4.781-5.32 0-1.177.408-2.138 1.078-2.888-.108-.272-.469-1.369.103-2.85a.874.874 0 0 1 .235-.023c.38 0 1.237.145 2.653 1.13a9.76 9.76 0 0 1 5.259 0c1.416-.985 2.273-1.13 2.653-1.13a.873.873 0 0 1 .235.023c.571 1.481.21 2.578.103 2.85.67.755 1.078 1.716 1.078 2.888 0 4.134-2.456 5.043-4.796 5.31.375.333.713.99.713 1.993 0 1.439-.014 2.601-.014 2.953 0 .253.145.539.534.539a.9.9 0 0 0 .188-.019c4.176-1.425 7.181-5.46 7.181-10.214C22.5 6.323 17.798 1.5 12 1.5Z"></path>
      </svg></a>
      </div>
        <div className={classes.type}> Backend</div>
        <div className={classes.Description}> Created a dynamic and responsive user interface and a robust backend solution for real-time sports betting market data collection and display. </div>
        <div className={classes.Stacks}> 
        <p className={classes.tools}>Javascript ES6</p>
        <p className={classes.tools}>Node</p>
        <p className={classes.tools}>Express</p>
        <p className={classes.tools}>PostgreSQL</p>
              </div>

      </div>
      <div  className={classes.project3}>
      <div className={classes.pbg3}></div>
      <div className={classes.layer}></div>

        <div className={classes.title}> SnapSync</div>
        <div className={classes.ghbtn}>
      <a className='Ghbtn' href="https://github.com/JosephBatchelor/SnapSync" target="_blank"><svg className='svgGit' width="45" height="45" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5C6.202 1.5 1.5 6.323 1.5 12.267c0 4.758 3.01 8.79 7.181 10.214a.82.82 0 0 0 .178.019c.39 0 .54-.286.54-.534 0-.258-.01-.933-.015-1.833a4.802 4.802 0 0 1-1.059.126c-2.02 0-2.48-1.57-2.48-1.57-.478-1.242-1.167-1.575-1.167-1.575-.914-.642-.005-.66.066-.66h.004c1.055.093 1.608 1.115 1.608 1.115.525.919 1.228 1.176 1.857 1.176a2.953 2.953 0 0 0 1.2-.28c.093-.695.365-1.168.665-1.44-2.33-.272-4.781-1.195-4.781-5.32 0-1.177.408-2.138 1.078-2.888-.108-.272-.469-1.369.103-2.85a.874.874 0 0 1 .235-.023c.38 0 1.237.145 2.653 1.13a9.76 9.76 0 0 1 5.259 0c1.416-.985 2.273-1.13 2.653-1.13a.873.873 0 0 1 .235.023c.571 1.481.21 2.578.103 2.85.67.755 1.078 1.716 1.078 2.888 0 4.134-2.456 5.043-4.796 5.31.375.333.713.99.713 1.993 0 1.439-.014 2.601-.014 2.953 0 .253.145.539.534.539a.9.9 0 0 0 .188-.019c4.176-1.425 7.181-5.46 7.181-10.214C22.5 6.323 17.798 1.5 12 1.5Z"></path>
      </svg></a>
      </div>
        <div className={classes.type}> Frontend + Backend</div>
        <div className={classes.Description}> Developed a cloud-based photo management system with a scalable and reliable architecture, with a responsive Frontend.</div>
        <div className={classes.Stacks}>   
        <p className={classes.tools}>Java</p>
        <p className={classes.tools}>Spring-boot</p>
        <p className={classes.tools}>AWS:S3</p>
        <p className={classes.tools}>PostgreSQL</p>
        </div>
      </div>
    </div>
</div>



<div className={classes.contactContainer}>

  <div className={classes.textcon}>
  <h1>CONTACT ME</h1>
  </div>
  <div className={classes.textcon2}>Let's Team up</div>

<form className={classes.form} action="https://formsubmit.co/joseph_batchelor@outlook.com" method="POST" target="_blank">

<div className={classes.form__group}>
    <input required placeholder="Name" className={classes.form__field} type="text" name="name" />
    <label className={classes.form__label} htmlFor="name">Name</label>
</div>

<div className={classes.form__group2}>
    <input  required placeholder="Email" className={classes.form__field} type="email" name="email" />
    <label className={classes.form__label} htmlFor="email">Email</label>
</div>

<div className={classes.form__group3}>
    <input  required placeholder="Subject" className={classes.form__field} type="text" name="subject" />
    <label className={classes.form__label} htmlFor="subject">Subject</label>
</div>

<div className={classes.form__group4}>
    <textarea id="myTextarea" required placeholder="" className={classes.form__field} name="infomration" />
    <label className={classes.form__label} htmlFor="infomration">Infomration</label>
</div>

       <button className={classes.formbtn}type="submit" ><div>Send</div></button>
</form>
</div>





<div className={classes.footer}> <div className={classes._2023PORTFOLIOBYJOSEPHACBATCHEL}>
        2023 © PORTFOLIO - BY JOSEPH. A. C. BATCHELOR - ALL RIGHTS RESERVED{' '} 
      </div></div>

      
    </div>
  );
});



      