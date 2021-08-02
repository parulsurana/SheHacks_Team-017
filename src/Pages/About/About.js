import React from "react";
import "./About.css";
import sakshi from "../../Assets/sakshi.png";
import github from "../../Assets/github.png";
import gmail from "../../Assets/gmail.png";
import linkedin from "../../Assets/linkedin.png";
import sejal from "../../Assets/sejal.png";
import parul from "../../Assets/parul.png";
import CHeader from "../../Components/CHeader/CHeader";
function About() {
  return (
    <div className="about">
      <CHeader heading="About Us" /> 
      <div className="about_header">
        <span className="about_head">CuriouS! Who Are We?</span>
      </div>
      <div className="about_desc">
      We at Generation Gap try to connect Older people with the Technology <br></br>As the older generation is not easily adapted 
to technology as the younger generation,<br></br> which leads to
communication gaps between the two generations,<br></br> as well 
as presenting itself as a social barrier.
      </div>
      <div className="about_dev">
        <div className="about_title"> Developers👩🏻‍💻 behind the idea!</div>
        <div className="about_cards">
          <div className="about_profile">
            <img className="profile" src={sejal} alt="sejal" />
            <h2 classname="about_info">Sejal Goyal <br></br> 2nd Year Student</h2>
            <div className="aboutCard_foot">
              <a href="https://www.linkedin.com/in/sejal-goyal-437015194/">
                {" "}
                <img className="social_icon" src={linkedin} alt="linkedin" />
              </a>
              <a href="https://mail.google.com/mail/u/?authuser=sejalgoyal16@gmail.com">
                {" "}
                <img className="social_icon" src={gmail} alt="gmail" />
              </a>
              <a href="https://github.com/sejal8745">
                {" "}
                <img className="social_icon" src={github} alt="github" />
              </a>
            </div>
          </div>
          <div className="about_profile">
          <img className="profile" src={parul} alt="parul" />
          <h2 classname="about_info">Parul Surana <br></br> 2nd Year Student</h2>
          <div className="aboutCard_foot">
            <a href="https://www.linkedin.com/in/parul-surana-ab0044194/">
              {" "}
              <img className="social_icon" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://mail.google.com/mail/u/?authuser=parulsurana28@gmail.com">
              {" "}
              <img className="social_icon" src={gmail} alt="gmail" />
            </a>
            <a href="https://github.com/parulsurana">
              {" "}
              <img className="social_icon" src={github} alt="github" />
            </a>
          </div>
        </div>
          <div className="about_profile">
            <img className="profile" src={sakshi} alt="sakshi" />
            <h2 classname="about_info">Sakshi Dhamija <br></br> 2nd Year Student</h2>
            <div className="aboutCard_foot">
              <a href="https://www.linkedin.com/in/s15/">
                {" "}
                <img className="social_icon" src={linkedin} alt="linkedin" />
              </a>
              <a href="https://mail.google.com/mail/u/?authuser=sakshidhamija15@gmail.com">
                {" "}
                <img className="social_icon" src={gmail} alt="gmail" />
              </a>
              <a href="https://github.com/secrashi">
                {" "}
                <img className="social_icon" src={github} alt="github" />
              </a>
            </div>
          </div>
        
      </div>
    </div>
   </div>
  );
}

export default About;
