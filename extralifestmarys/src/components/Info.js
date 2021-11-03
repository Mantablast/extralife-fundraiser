import React from "react";
import { Link } from "react-router-dom";
import YoutubeLive from "../assets/img/YoutubeLive.png";
import twitchIcon from "../assets/img/twitchicon.png";
import fblive from "../assets/img/fblive.png";
import childrenLogo from "../assets/img/childrenlogo.png";
import krissy from "../assets/img/krissy-01.png";
import bj from "../assets/img/bj-01.png";
import andrea from "../assets/img/andrea-01.png";
import hodge from "../assets/img/hodge-01.png";
import kev from "../assets/img/kev-01.png";
import erin from "../assets/img/erin-01.png";
import mark from "../assets/img/mark-01.png";
import nikki from "../assets/img/nikki-01.png";
import em from "../assets/img/em-01.png";
import chet from "../assets/img/chet-01.png";
import aimee from "../assets/img/aimee-01.png";
import amy from "../assets/img/amy-01.png"
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


export default function Info() {

    return (
        <div className="flex-center">
            <h3>Watch our events:</h3>
            <div className="streamButtons">
                <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=468206"><img className="border15 iconsize" alt="Company Logo" src={twitchIcon} /></a>
                <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=468206"><img className="border15 iconsize" alt="Company Logo" src={YoutubeLive} /></a>
                <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=468206"><img className="border15 iconsize" alt="Company Logo" src={fblive} /></a>
            </div>
            <div className="flex-center">
                <h3>Raising funds for:</h3>
                <img className="childLogo flex-center" alt="Children's Hospital Logo" src={childrenLogo} />
                <html>
                <iframe width="400px" height="200px" src="http://extralife-helper.breadweb.net/?r=1&pid=59390&tid=&w=400&b=1&t=0&v=0&g=1&a=1&y=2&l=en-us&vo=86&st=1636189200000&td=0
                " title="Helper" frameBorder="0"  ></iframe>
                </html>
            </div>
            <div className="playerBox">
            <img src={krissy} alt="kid healer" />
            <img src={bj} alt="kid healer" />
            <img src={andrea} alt="kid healer" />
            <img src={hodge} alt="kid healer" />
            <img src={kev} alt="kid healer" />
            <img src={em} alt="kid healer" />
            <img src={erin} alt="kid healer" />
            <img src={mark} alt="kid healer" />
            <img src={nikki} alt="kid healer" />
            <img src={chet} alt="kid healer" />
            <img src={aimee} alt="kid healer" />
            <img src={amy} alt="kid healer" />
            </div>
            <ul className="infoList">
                <li>In London, over 56,000 kids from across Southwestern and Northern Ontario visit Children's Hospital - London Health Sciences Centre each year for treatment. </li>
                <li>Sick kids from Windsor to Waterloo, from St.Thomas to Owen Sound, Thunder Bay and beyond rely on Children’s Hospital.</li>
                <li>Donations support special value-added programs like Child Life and Music Therapy.As well as state-of-the-art equipment.</li>
                <li>This year, 100% of the equipment at Children's Hospital is funded by donations.</li>
                <li>Children’s Hospital continues to care for many kids diagnosed with life-threatening and life-limiting diagnoses throughout the pandemic.</li>
                <li>COVID-19 has complicated the care the hospital provides.</li>
                <li>Donations to your Extra Life page will allow the hospital to meet patients’ urgent needs and proactively address concerns that are emerging as life with the pandemic continues.</li>
            </ul>
        </div>
    );
}













