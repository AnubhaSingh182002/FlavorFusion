import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// Import the background image
import contact3 from "../images/contact3.png"; // Update the path to your image

const Contact = () => {
  return (
    <Layout>
      {/* Apply background image */}
      <div
        style={{
          backgroundImage: `url(${contact3})`,
          backgroundSize: "115%", // Zoom in the background image
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2, fontFamily: "Serif" } }}>
          <Typography variant="h4">Contact FlavorFusion</Typography>
          <br></br>
          <p style={{ fontFamily: "Times New Roman" }}>
            Contact FlavorFusion for any inquiries, feedback, or assistance.
            Our dedicated support team is here to ensure your experience with our food order app is nothing short of exceptional. 
            Whether you have questions about menu items, need help with your order, or simply want to share your thoughts, we're just a message away.
            Reach out to us via email, phone, or social media, and let us serve you better.
            Your satisfaction is our top priority, and we look forward to hearing from you soon!
          </p>
        </Box>
        <Box
          sx={{
            m: 3,
            width: "500px",
            ml: 10,
            "@media (max-width:600px)": {
              width: "300px",
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "Orange", color: "black" }}
                    align="center"
                  >
                    <b>CONTACT DETAILS</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontFamily: "Arial, sans-serif" }}>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                    (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontFamily: "Arial, sans-serif" }}>
                    <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontFamily: "Arial, sans-serif" }}>
                    <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567897
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </Layout>
  );
};

export default Contact;
