import { Box, Card, CardContent, Skeleton } from "@mui/material";
import React from "react";

const ProductLoading = () => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <Skeleton variant="rectangular" height={180} />
      <CardContent>
        <Skeleton height={30} />
        <Skeleton height={20} />
        <Skeleton height={20} />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Skeleton variant="text" width="50%" />
          <Skeleton variant="circular" width={40} height={40} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductLoading;
