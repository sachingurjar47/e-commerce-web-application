import { Box, Button, CardMedia, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Category, Product } from "../types/types";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useAppDispatch } from "../store/hooks";
import { GetProductsByCategory } from "../Mutations/GetProductsByCategory";
import ProductLoading from "../components/ProductLoading";
interface Props {
  heading?: string;
  sideImage?: string;
  category: string;
}
const ProductBy: React.FC<Props> = ({
  heading = "New",
  category,
  sideImage,
}) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Product[]>([]);
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    dispatch(
      GetProductsByCategory(category, {
        onLoading: (loading) => {
          setLoading(loading);
        },
        onSuccess: (res: any) => {
          setData((pre) => res.products);
        },
      })
    );
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        gap: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          sx={(theme) => {
            return {
              fontSize: {
                xs: theme.typography.h6.fontSize,
                md: theme.typography.h4.fontSize,
              },
            };
          }}
        >
          {heading}
        </Typography>{" "}
        <Button endIcon={<ArrowForwardOutlinedIcon />}>View All</Button>
      </Box>
      <Box
        width="100%"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },

          alignItems: "center",
        }}
        gap={2}
      >
        {loading ? (
          <>
            <Box
              sx={{
                width: { xs: "100%", md: 300 },
                height: { xs: 100, md: 380 },
              }}
            >
              <Skeleton variant="rectangular" height="100%" />
            </Box>
            <Box
              sx={{
                p: 1,
                display: "flex",
                gap: "20px",
                overflow: "hidden",
                width: { xs: "100%", md: "calc(100% - 300px)" },
              }}
            >
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                width: { xs: "100%", md: 300 },
                height: { xs: 100, md: 380 },
              }}
            >
              <CardMedia
                component="img"
                image={sideImage}
                sx={{
                  height: "100%",
                  width: { xs: "100%", md: 300 },
                  objectFit: { md: "fill" },
                }}
                alt={heading}
              />
            </Box>
            <Box
              sx={(theme) => ({
                width: { xs: "100%", md: "calc(100% - 300px)" },
                ".slick-prev:before, .slick-next:before": {
                  fontSize: "30px",
                  color: `${theme.palette.primary.main} !important`,
                },
                ".slick-arrow": {
                  zIndex: 99,
                },
                ".slick-prev": { left: { md: 15 } },
                ".slick-next": { right: { md: 15 } },
                ".slick-track": {
                  display: "flex",
                },
              })}
            >
              <Slider {...settings}>
                {data?.map((item) => (
                  <Box sx={{ p: "5px" }}>
                    <ProductCard key={item?.id} data={item} />
                  </Box>
                ))}
              </Slider>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProductBy;
