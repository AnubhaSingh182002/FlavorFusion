import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import home from "../images/home.webp";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ 
        backgroundImage: `url(${home})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Ensure the background covers the entire viewport height
      }}>
        <div className="headerContainer">
          <h1 style={{ fontFamily: "Pacifico, cursive" }}>FlavorFusion</h1>
          <p>
            <span className="smallText"><h5 style={{ fontFamily: "Poppins, sans-serif" }}>"Foodie Dreams delivered to your doorstep"</h5></span>
          </p>
          <Link to="/menu">
            <button style={{ fontFamily: "Montserrat, sans-serif" }}>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
