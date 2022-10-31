import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link} to="/showRecipe" sx={{ marginTop: 15, background: "#660066" }} variant="contained">
          <Typography variant="h4">View All Recipes</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
