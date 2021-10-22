/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import companyLogo from '../assets/img/extralogo.png'
// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
        <div className="project-container">
            <a href="https://w4tch-tow3r.herokuapp.com/" className="projects proj1 gradient-box">
                </a>
                <div className="projects proj2 gradient-box">
                
                </div>
                <div className="projects proj3 gradient-box">
                
                </div>
                <div className="projects proj4 gradient-box">
                
                </div>
                <div className="projects proj5 gradient-box">
                
                </div>
                <div className="projects proj6 gradient-box">
                
                </div>
            </div>
          <h1 className="h1-seo">BLK• React</h1>
          <img alt="bitcoin" src={companyLogo} />
          <h3 className="d-none d-sm-block">
          </h3>
        </div>
      </Container>
    </div>
  );
}
