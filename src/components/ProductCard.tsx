import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Product } from "../types/types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";
interface Props {
  data?: Product;
}

const ProductCard: React.FC<{
  data: Product;
  onAddToCart?: (id: number) => void;
  onAddToWishlist?: (id: number) => void;
  isWishlisted?: boolean;
}> = ({ data, onAddToCart, onAddToWishlist, isWishlisted }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 300,
        maxHeight: 500,
        height: "100%",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={data.thumbnail}
        sx={{ objectFit: "scale-down" }}
        alt={data.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          height="100px"
          overflow="hidden"
          color="text.secondary"
        >
          {data.description}
        </Typography>
        <Typography variant="h6">${data?.price?.toFixed(2)}</Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<ShoppingCartIcon />}
            onClick={() => onAddToCart?.(data?.id!)}
          >
            Add to Cart
          </Button>
          <IconButton onClick={() => onAddToWishlist?.(data?.id!)}>
            {isWishlisted ? <FavoriteIcon color="error" /> : <FavoriteBorder />}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
