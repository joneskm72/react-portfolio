import React from "react";
import "./style.css";
import '@fortawesome/fontawesome-svg-core';

function Footer() {
  return (
    <div class="footer bg-dark">
      <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-6 col-lg-3">
                    <i class="fas fa-phone"></i>
                    &nbsp;828-406-5140
                </div>
                <div class="col-6 col-lg-2">
                    <i class="far fa-envelope"></i>
                    <a href= "mailto:jones.m.kasey@gmail.com">&nbsp;Email</a>
                </div>
                <div class="col-6 col-lg-2">
                    <i class="fab fa-linkedin"></i>
                    <a href= "https://www.linkedin.com/in/kasey-m-jones">&nbsp;LinkedIn</a>
                </div>
                <div class="col-6 col-lg-2">
                    <i class="fab fa-github"></i>
                    <a href="https://github.com/joneskm72">&nbsp;GitHub</a>
                </div>
                <div class="col-6 col-lg-2">
                    <i class="fa fa-file-text"></i>
                    <a href="https://docs.google.com/document/d/1tyUOv-2P8FZdMmhxAmREY9vBbaZ82G2wYEOEoP-jOjI/edit?usp=sharing">&nbsp;Resume</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;