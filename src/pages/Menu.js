import React, { useState } from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  TextField,
} from "@mui/material";

const Menu = () => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (name, quantity) => {
    setQuantities({ ...quantities, [name]: quantity });
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {MenuList.map((menu) => (
          <Card
            key={menu.name}
            sx={{ maxWidth: "390px", display: "flex", m: 2 }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  <strong>{menu.name}</strong>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {menu.description}
                </Typography>
                <Typography variant="body2">Price: ${menu.price}</Typography>
                <TextField
                  id={menu.name}
                  label="Quantity"
                  type="number"
                  value={quantities[menu.name] || ""}
                  onChange={(e) =>
                    handleQuantityChange(menu.name, e.target.value)
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Typography variant="body2">
                  Total Price: ${menu.price * (quantities[menu.name] || 0)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
