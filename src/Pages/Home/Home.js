import React, { Component } from "react";
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
import logo from "../../Assets/logo2.png";
import { withRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { myFirebase, myFirestore } from "../../Config/MyFirebase";
import firebase from "firebase";
import { AppString } from "../../const";

class Home extends Component {
  constructor(props) {
    super(props);
    this.provider = new firebase.auth.GoogleAuthProvider();
  }
  checkLogin = () => {
    if (localStorage.getItem(AppString.ID)) {
      this.setState(() => {
        this.props.history.push("/main");
      });
    } else {
    }
  };

  onLoginPress = () => {
    myFirebase
      .auth()
      .signInWithPopup(this.provider)
      .then(async (result) => {
        let user = result.user;
        if (user) {
          const result = await myFirestore
            .collection(AppString.NODE_USERS)
            .where(AppString.ID, "==", user.uid)
            .get();

          if (result.docs.length === 0) {
            // Set new data since this is a new user
            myFirestore
              .collection("users")
              .doc(user.uid)
              .set({
                id: user.uid,
                nickname: user.displayName,
                aboutMe: "",
                photoUrl: user.photoURL,
              })
              .then((data) => {
                // Write user info to local
                localStorage.setItem(AppString.ID, user.uid);
                localStorage.setItem(AppString.NICKNAME, user.displayName);
                localStorage.setItem(AppString.PHOTO_URL, user.photoURL);
                this.setState(() => {
                  this.props.history.push("/main");
                });
              });
          } else {
            // Write user info to local
            localStorage.setItem(AppString.ID, result.docs[0].data().id);
            localStorage.setItem(
              AppString.NICKNAME,
              result.docs[0].data().nickname
            );
            localStorage.setItem(
              AppString.PHOTO_URL,
              result.docs[0].data().photoUrl
            );
            localStorage.setItem(
              AppString.ABOUT_ME,
              result.docs[0].data().aboutMe
            );
            this.setState(() => {
              this.props.history.push("/main");
            });
          }
        } else {
        }
      })
      .catch((err) => {
        
      });
  };
  render() {
    
 
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
                <Link  activeStyle>
                  <span className="right_header">Signin</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="HomeBody">
            <div className="Contentleft">
              <p classname="tagLine">Every Generation needs Regeneration!</p>
              <div className="btn">
                <Button buttonName="tour" label="Take a Tour" />
              </div>
            </div>
            <div className="Image">
              <img className="Img" src={OP1} alt="OP" />
            </div>
          </div>
        </div>
        <div className="CardFooter">
          <div className="HomeFooter">
          <Link onClick={this.onLoginPress} >
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
  )
}
}

export default withRouter(Home);
