import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{fontFamily:"fanatasy"}} variant = "h2">
          This is a Full MERN Stack Web Developement Project
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          You can View, Update, Delete and Create new Food items at the User Interface.
          Included all the functionalities of CRUD.
          Hope you have fun with it !! If you want to contribute to make it more creative feel free to share! 
        </Typography>
      </Box>
    </div>
  );
};

export default About;
