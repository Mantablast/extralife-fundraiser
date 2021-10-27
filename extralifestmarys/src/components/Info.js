import React from "react";
import { Link } from "react-router-dom";
import YoutubeLive from "../assets/img/YoutubeLive.png";
import twitchIcon from "../assets/img/twitchicon.png";
import fblive from "../assets/img/fblive.png";
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
        <div className="center">
            <h3>Watch our events:</h3>
            <div className="streamButtons">
            <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=468206"><img className="border15 iconsize" alt="Company Logo" src={twitchIcon} /></a>
            <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=468206"><img className="border15 iconsize" alt="Company Logo" src={YoutubeLive} /></a>
            <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=468206"><img className="border15 iconsize" alt="Company Logo" src={fblive} /></a>
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













