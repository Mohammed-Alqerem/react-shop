import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function Category({ category }) {
  return (
    <Card sx={{ textAlign: "center", py: 2 }}>
      <CardContent >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "600" }} color="primary">
          {category.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
