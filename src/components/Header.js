import React from "react";
import Image from "../index.png";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import UsbIcon from "@material-ui/icons/Usb";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <p>Quickteller Paypoint</p>
      </div>
      <div className="header__bottom">
        <div className="header__logo">
          <img src={Image} alt="quick teller" />
        </div>
        <div className="header__search">
          <form action="">
            <span>
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Find a beneficiary or biller e.g. DSTV"
            />
          </form>
        </div>
        <div className="header__userProfile">
          <span>
            <UsbIcon />
            <p>referrals</p>
          </span>
          <span>
            <PermIdentityIcon />
            <p>Hi, Promise</p>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
