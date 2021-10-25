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


export default function LiveStream() {
const Twitchlink = "https://player.twitch.tv/?video=1153475702&parent=localhost";
const TwitchAccountName = "CriticalRole";
const fbLink = "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fliveblueland%2Fvideos%2F269825235053267%2F&show_text=false&width=380&t=0";
const webLink = "localhost";


  return (
    <div className ="center">
        {/* Youtube /> */}
        <iframe width="900" height="550" src="https://www.youtube.com/embed/RnvhuvYufuE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} ></iframe>

        {/* <Twitch /> */}
        <iframe src={"https://player.twitch.tv/?video=1153475702&parent="+webLink} frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>

        {/* <Twitch Chatbox /> */}
        {/* <iframe src={"https://www.twitch.tv/embed/"+{TwitchAccountName}+"/chat?parent=localhost"}
        height="500"
        width="600">
        </iframe>        */}

        <iframe src={fbLink} width="500" height="1027"  scrolling="yes" frameBorder="0" allowFullscreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>


        <h2 className="paddingTop">About Extralife</h2>
        <iframe width="900" height="550" src="https://www.youtube.com/embed/CMl8CRJzap4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} ></iframe>

        

    </div>
  );
}





