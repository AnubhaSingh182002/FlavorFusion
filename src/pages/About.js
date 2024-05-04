import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

// Import the background image
import about1 from "../images/about1.jpg"; // Update the path to your image

const About = () => {
  return (
    <Layout>
      {/* Apply background image */}
      <div
        style={{
          backgroundImage: `url(${about1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff", // Text color against the background
          padding: "20px", // Add padding to the content
          textAlign: "justify", // Justify align text
        }}
      >
        <Box
          sx={{
            maxWidth: "800px",
            padding: "20px",
            background: "rgba(0, 0, 0, 0.6)", // Add a semi-transparent background to improve text readability
            borderRadius: "10px", // Add some border radius for a cleaner look
          }}
        >
          <Typography variant="h4" style={{ fontWeight: "bold", fontFamily: "'Pacifico', cursive" }}>
            Welcome To My FlavorFusion
          </Typography>
          <br></br>

          <Typography style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Welcome to FlavorFusion, your ultimate destination for culinary bliss! 
            Embark on a gastronomic journey like no other as we tantalize your taste buds with a symphony of flavors from around the globe. 
            Whether you're craving the comforting embrace of home-cooked classics or eager to explore bold new culinary horizons, 
            our app offers a treasure trove of delectable delights curated just for you. With a seamless ordering experience at your fingertips, 
            indulge in the convenience of having gourmet meals delivered straight to your doorstep. From artisanal pizzas to exotic sushi rolls, 
            wholesome salads to indulgent desserts, we've got something to satisfy every craving and elevate every mealtime moment. 
            Join us in celebrating the art of food, where every bite is a celebration and every dish tells a story. 
            Welcome to FlavorFusion – where flavor knows no bounds and culinary dreams come true.
          </Typography>
          <br />
          <Typography style={{ fontFamily: "'Montserrat', sans-serif" }}>
            At FlavorFusion, we're not just about satisfying hunger; 
            we're dedicated to creating memorable dining experiences that ignite your senses and leave you craving more. 
            Our app is not just a platform for ordering food; 
            it's a community of passionate foodies united by their love for exceptional cuisine. 
            Dive into our interactive menus, where each dish is thoughtfully crafted to deliver unparalleled taste and quality. 
            Explore our chef's specials for culinary adventures that push the boundaries of flavor. 
            Whether you're hosting a dinner party, enjoying a cozy night in, or simply treating yourself to a well-deserved feast, 
            let FlavorFusion be your trusted companion on your culinary odyssey. With convenient features like personalized recommendations, easy reordering, and real-time tracking, 
            we're here to redefine the way you experience food delivery. 
            Join us and discover a world of flavor, convenience, and culinary delight at FlavorFusion – where every meal is a masterpiece waiting to be savored.
          </Typography>
        </Box>
      </div>
    </Layout>
  );
};

export default About;
