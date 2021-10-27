import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Info from "components/Info";

export default function LiveStream() {
const Twitchlink = "https://player.twitch.tv/?video=1153475702&parent=localhost";
const TwitchAccountName = "CriticalRole";
const fbLink = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ftheverge%2Fvideos%2F170866897132438%2F&show_text=false&width=560&t=0";
const myLandingPage = "localhost";
const youtubeId = "RnvhuvYufuE";


  return (
    <div className ="center">
        <Info />
        {/* Youtube /> */}
        <iframe width="900" height="550" src={"https://www.youtube.com/embed/"+youtubeId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} ></iframe>

        {/* <Twitch /> */}
        <iframe src={"https://player.twitch.tv/?video=1153475702&parent="+myLandingPage} frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>

        <iframe src={fbLink} width="500" height="1027"  scrolling="no" frameBorder="0" allowFullscreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

        <h2>About Extralife</h2>
        <iframe width="900" height="550" src="https://www.youtube.com/embed/CMl8CRJzap4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} ></iframe>
        </div>
  );
}


 {/* <Twitch Chatbox /> */}
        {/* <iframe src={"https://www.twitch.tv/embed/"+TwitchAccountName+"/chat?parent=localhost"+myLandingPage}
        height="500"
        width="600">
        </iframe>        */}

