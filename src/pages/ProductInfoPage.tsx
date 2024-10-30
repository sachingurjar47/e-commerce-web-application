import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Skeleton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router-dom";
import { GetProductsById } from "../Mutations/GetProductsById";

interface ProductInfoPageProps {}

const ProductInfoPage: React.FC<ProductInfoPageProps> = () => {
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.product.product);
  React.useEffect(() => {
    dispatch(
      GetProductsById(id!, {
        onLoading: (loading) => {
          setLoading(loading);
        },
        onSuccess: (res: any) => {},
      })
    );
  }, []);
  return (
    <Box p={3}>
      {loading ? (
        <Skeleton variant="rectangular" height={400} />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={data?.thumbnail}
                alt={data?.title}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {data?.title}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${data?.price?.toFixed(2)}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {data?.description}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Product Details</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Category" secondary={data?.category} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Stock" secondary={data?.stock} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Warranty"
                  secondary={data?.warrantyInformation}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Shipping"
                  secondary={data?.shippingInformation}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Availability"
                  secondary={data?.availabilityStatus}
                />
              </ListItem>
            </List>

            <Typography variant="h6" mt={3}>
              Reviews
            </Typography>
            {loading ? (
              <>
                <Skeleton height={40} />
                <Skeleton height={40} />
                <Skeleton height={40} />
              </>
            ) : (
              data?.reviews?.map((review, index) => (
                <Box key={index} border={1} borderRadius={1} p={1} mb={2}>
                  <Typography variant="body2">
                    <strong>{review.reviewerName}</strong> ({review.rating}{" "}
                    stars)
                  </Typography>
                  <Typography variant="body2">{review.comment}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(review.date!).toLocaleDateString()}
                  </Typography>
                </Box>
              ))
            )}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductInfoPage;
