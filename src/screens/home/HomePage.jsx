import React from "react";
import "../../style/screens/HomePage.css";
import SettingBox from "../../Popup/SettingBox";
import { useGetCategoriesQuery } from "../../services/endpoints/categories.api";
const HomePage = () => {
    const [data, isLoading] = useGetCategoriesQuery();
    console.log("data", data);
    const categories = data?.data?.categories || [];
    return (
        <div className="layout">
            <div className="container">
                <div className="home-page">
                    <div className="meeting-head-box">
                        <div className="record-title">
                            <h2>Types of Facility</h2>
                            {/* <button
                  className="save"
                  onClick={() => navigate(`/bookingRecord/${adminId}`)}
                >
                  My Bookings
                </button> */}
                            <SettingBox />
                        </div>
                    </div>

                    <div className="type-layout">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
