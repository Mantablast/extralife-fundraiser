
import React from "react";
import companyLogo from '../assets/img/extralogo.png';
import donateButton from '../assets/img/donate.png';
// reactstrap components
import { Container } from "reactstrap";
import LiveStream from "components/LiveStream";
import Info from "components/Info";

export default function PageHeader() {
  return (
    <div>
      <Container>
        <div className="page-header header-filter">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          <div className="content-center brand">
            <div className="logobox border15">
              <img className="padding20" alt="Company Logo" src={companyLogo} />
            </div>
            <h1 className="">November 6, 2021</h1>
            <h1 className="">24 hour St. Marys</h1>
            <h1 className="">Game-a-thon</h1>
            <a href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=59390"><img className="border15 mainLogo" alt="Company Logo" src={donateButton} /></a>
            
          </div>
        </div>
        <LiveStream />
      </Container>
    </div>
  );
}
