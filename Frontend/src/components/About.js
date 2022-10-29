import { Box, Typography } from "@mui/material";
import React from "react";


const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{fontFamily:"cursive"}} variant = "h4" align ="center">
          This is a Full MERN Stack Web Developement Project

        </Typography>
        <Typography sx={{ fontFamily: "cursive" }} variant="h6" align ="center">
          You can View, Update, Delete and Create new Food items at the User Interface.
          Included all the functionalities of CRUD.
          Hope you have fun with it !! 
          If you want to contribute to make it more creative feel free to share! 
        </Typography>
      </Box>
    </div>
  );
};

export default About;
