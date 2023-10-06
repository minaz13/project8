import React from "react" 
import {Button} from "@mui/material";

export const NavItem=({item})=>{
    return(
      <Button  variant="contained" color="secondary" fullWidth>
        {item}
      </Button>
    )
}