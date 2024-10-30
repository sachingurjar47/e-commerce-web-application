import React from "react";
import { Category } from "../types/types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
interface Props {
  data: Category;
}
const CategoryCard: React.FC<Props> = ({ data }) => {
  return (
    <Card sx={{ width: 150, height: 150 }}>
      <CardMedia sx={{ height: 100 }} image={data.img} title={data.name} />
      <CardContent>
        <Typography textAlign="center" variant="caption" component="div">
          {data.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
