import React from "react";
import "./footer.css";
import { FaApple, FaLinkedin } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_main">
        <div className="footer_sub">
          <div className="footer_name">
            <h2>contact us </h2>
          </div>
          <ul className="footer_ul">
            <li className="footer_li">
              Toll Free Customer Care
              <div className="lki">
                <h2>+(1) 123 456 7890</h2>
              </div>
            </li>
            <li className="footer_li">
              Need live support?
              <div className="lki">
                <h2>hi@gotrip.com</h2>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer_sub">
          <div className="footer_name">
            <h2>companay</h2>
          </div>
          <ul className="footer_ul">
            <li className="footer_li">about us</li>
            <li className="footer_li">careers</li>
            <li className="footer_li">blog</li>
            <li className="footer_li">press</li>
            <li className="footer_li">gift cards</li>
          </ul>
        </div>
        <div className="footer_sub">
          <div className="footer_name">
            <h2>support </h2>
          </div>
          <ul className="footer_ul">
            <li className="footer_li">contact</li>
            <li className="footer_li">legal notice</li>
            <li className="footer_li">privacy policy</li>
            <li className="footer_li">t&c</li>
            <li className="footer_li">sitemap</li>
          </ul>
        </div>
        <div className="footer_sub">
          <div className="footer_name">
            <h2>other services </h2>
          </div>
          <ul className="footer_ul">
            <li className="footer_li">Car hire</li>
            <li className="footer_li">Activity finder</li>
            <li className="footer_li">tour list </li>
            <li className="footer_li">Flight finder</li>
            <li className="footer_li">Cruise Ticket</li>
            <li className="footer_li">Holiday Rental</li>
            <li className="footer_li">Travel Agents</li>
          </ul>
        </div>
        <div className="footer_sub">
          <div className="footer_name">
            <h2>mobile</h2>
          </div>
          <ul className="footer_ul">
            <li className="footer_li">
              <div className="li_card">
                <FaApple className="apple" />
                <h2 className="li_detail">
                  download on the <br />{" "}
                  <span style={{ fontWeight: "bold" }}>apple store</span>
                </h2>
              </div>
            </li>
            <li className="footer_li">
              <div className="li_card">
                <FaGooglePlay className="apple" />
                <h2 className="li_detail">
                  download on the <br />{" "}
                  <span style={{ fontWeight: "bold" }}>apple store</span>
                </h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="another">
        <div className="sub_another h">
          <div className="oner">
            <h2 className="copyright">
              © 2023 by dileesha All rights reserved
            </h2>
            <div className="l">
            <h2 className="copyright">Privacy</h2>
            <h2 className="copyright">Terms</h2>
            <h2 className="copyright">Sitemap</h2>
            </div>
          </div>
        </div>
        <div className="sub_another">
          <div className="twoer">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
