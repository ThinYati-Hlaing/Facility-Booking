import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "../assets/icons/menu.png";

export default function SettingBox() {

  return (
    <div className=" setting-box" >
      <div style={{ position: "relative" }}>
        {/* <div className={`setting-popup ${showBox && "active-box"}`}>
          <div onClick={() => changeRoute(`/bookingRecord/${adminId}`)}>
            My Bookings
          </div>
          {!isPathname("/change-password") && (
            <div onClick={() => changeRoute("/change-password")}>
              Change Password
            </div>
          )}
          {isPathname("/change-password") && (
            <div onClick={() => changeRoute(-1)}>Go Back</div>
          )}
          <div onClick={handleLogout}>Logout</div>
        </div> */}
        <img
          src={MenuIcon}
          alt=""
          style={{ zIndex: 100, background: "white" }}
        // onClick={() => {
        //   setShowBox(!showBox);
        //   setTimeout(() => setShowBox(false), 10000);
        // }}
        />
      </div>
    </div>
  );
}
