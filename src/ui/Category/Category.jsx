import { Button } from "@mui/material";
import React from "react";

export default function Category({ category }) {
     



  return (
    <Button variant="outlined" sx={{ fontWeight: "600",width:"100%",textAlign:'start' }} color="primary">
      {category.name}
    </Button>
  );
}
