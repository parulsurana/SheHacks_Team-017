import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import OP1 from "../../Assets/OP1.png";
import Card from "../../Components/features-card/Card";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import NoteIcon from "@material-ui/icons/Note";
import TvIcon from "@material-ui/icons/Tv";
import Button from "../../Components/Button/Button";
import { auth, provider } from "../../firebase";
import logo from "../../Assets/logo2.png";

const Home = () => {
    const login = () => {
        auth.signInWithPopup(provider).catch((e) => { alert(e.message) });
    };
 
  return (
    <div className="Home">
      <div className="HomeCard">
        <div className="CardHeader">
          <div className="HomeHeader">
            <div className="Navbar">
              <div className="Navbarleft">
                <Link to="/home" activeStyle>
                  <img className="Logo" src={logo} alt="logo"/>
                </Link>
              </div>
              <div className="Navbarright">
                <Link to="/about">
                  <span className="right_header">About Us</span>
                </Link>
                <Link to="/blog" activeStyle>
                  <span className="right_header">Blogs</span>
                </Link>
                <Link to="/language" activeStyle>
                  <span className="right_header">Language</span>
                </Link>
                <Link onClick={login} activeStyle>
                  <span className="right_header">Signin</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="HomeBody">
            <div className="Contentleft">
              <p>Every Generation needs Regeneration!</p>
              <div className="btn">
                <Button buttonName="tour" label="Take a Tour" />
              </div>
            </div>
            <div className="Image">
              <img className="Img" src={OP1} alt="OP" />
            </div>
            <div className="Contentright">
              {/* <p>
                Technical ability is also important.<br></br> How technology
                affects the generation gap<br></br> is impacted by how well
                older people <br></br>can learn and use new technology. This
                tends to be written by Millennials <br></br>for the younger
                generation,<br></br> so many older people can become <br></br>
                left behind when things move too fast.
              </p> */}
            </div>
          </div>
        </div>
        <div className="CardFooter">
          <div className="HomeFooter">
          <Link to="/chat" >
            <Card icon={<PhoneInTalkIcon />} title="Talk To Your Friend" />
            </Link>
            <Link to="/notes">
            <Card icon={<NoteIcon />} title="Note Down" />
            </Link>
            <Link to="/dictionary">
            <Card icon={<GTranslateIcon />} title="Find Word" />
            </Link>
            <Link to="/games">
            <Card icon={<SportsEsportsIcon />} title="Games" />
            </Link>
            <Link to="/news">
            <Card icon={<TvIcon />} title="News" />
            </Link>
           
        
         
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
