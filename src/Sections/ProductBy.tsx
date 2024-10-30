import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Product } from "../types/types";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
interface Props {
  heading?: string;
  sideImage?: string;
  data?: Product[];
}
const ProductBy: React.FC<Props> = ({ heading = "New", sideImage, data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
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
        <Typography variant="h4">{heading}</Typography>
      </Box>
      <Box height={450} width="100%" display="flex" gap={2}>
        <Box border="1px solid" width={300}>
          <CardMedia
            component="img"
            image={sideImage}
            sx={{ height: "100%", width: 300, objectFit: "fill" }}
            alt={heading}
          />
        </Box>
        <Box
          sx={(theme) => ({
            width: "calc(100% - 300px)",
            ".slick-prev:before, .slick-next:before": {
              fontSize: "30px",
              color: `${theme.palette.primary.main} !important`,
            },
            ".slick-arrow": {
              zIndex: 99,
            },
            ".slick-prev": { left: 15 },
            ".slick-next": { right: 15 },
            ".slick-track": {
              display: "flex",
              gap: "20px",
              paddingTop: "5px",
              paddingBottom: "5px",
            },
          })}
        >
          <Slider {...settings}>
            {data?.map((item) => (
              <ProductCard data={item} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductBy;
