import React from "react";
import "./footer.css";
import logo from "../images/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_out_container">
          <div className="footer_inner_container">
            <div className="footer_data">
              <div>
              <a href="/">
                <div className="footer_icon">
                  <img src={logo} />
                </div>
                </a>
                <div className="footer_icons">
                  <a href="https://www.facebook.com">
                    <div>
                      <FacebookOutlinedIcon />
                    </div>
                  </a>

                  <a href="https://www.instagram.com/evangaditech/">
                  <div>
                    <InstagramIcon />
                  </div>
                  </a>

                  <a href="https://www.youtube.com/@EvangadiTech">
                  <div>
                    <YouTubeIcon />
                  </div>
                  </a>
                </div>
              </div>
              <div className="footer_links">
                <h3>Useful Link</h3>
                <ul>
                  <li>How it works</li>
                  <li>Terms of Service</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
              <div className="footer_links">
                <h3>Contact Info</h3>
                <ul>
                  <li>Contact Info</li>
                  <li>support@evangadi.com</li>
                  <li>+1-202-386-2702</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
