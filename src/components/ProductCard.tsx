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
import { Add, FavoriteBorder, Remove } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getData } from "../Slices/cartSlice";
import { useNavigate } from "react-router-dom";
interface Props {
  data: Product;
}

const ProductCard: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { carts } = useAppSelector((state) => state.cart);

  const item = carts.find((item) => data?.id === item?.id);
  const isWishlisted = true;
  const onAddToCart = (item: Product) => {
    const data = [...(carts ?? []), { ...item, count: 1 }];
    dispatch(getData(data));
  };
  const onAddToWishlist = (item: Product) => {};
  const onClick = () => {
    navigate(`/products/${data?.id}`);
  };
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
      <Card
        sx={{
          maxWidth: "100%",
          height: "100%",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <CardMedia
          onClick={onClick}
          component="img"
          height="180"
          image={data.thumbnail}
          sx={{ objectFit: "scale-down" }}
          alt={data.title}
        />
        <CardContent>
          <Typography
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            variant="h6"
            component="div"
            onClick={onClick}
          >
            {data.title}
          </Typography>
          <Typography
            variant="body2"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            color="text.secondary"
          >
            {data.description}
          </Typography>
          <Typography variant="h6">${data?.price?.toFixed(2)}</Typography>
          <Typography
            color={
              data?.availabilityStatus === "Out of Stock"
                ? "error"
                : data?.availabilityStatus === "In Stock"
                ? "success"
                : "warning"
            }
            variant="subtitle2"
          >
            {data?.availabilityStatus}
          </Typography>
          <Box display="flex" justifyContent="space-between" mt={2}>
            {item ? (
              <Box
                display="flex"
                alignItems="center"
                gap="2px"
                sx={(theme) => ({
                  border: `1px solid ${theme.palette.primary.main}`,
                  borderRadius: "50px",
                })}
              >
                <IconButton>
                  <Remove />
                </IconButton>
                <Box>
                  <Typography variant="h5" color="primary">
                    {item?.count ?? 0}
                  </Typography>
                </Box>
                <IconButton>
                  <Add />
                </IconButton>
              </Box>
            ) : (
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<ShoppingCartIcon />}
                disabled={data?.availabilityStatus === "Out of Stock"}
                onClick={() => onAddToCart?.(data!)}
              >
                Add to Cart
              </Button>
            )}

            <IconButton onClick={() => onAddToWishlist?.(data!)}>
              {isWishlisted ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorder />
              )}
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
