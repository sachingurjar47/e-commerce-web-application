import { Box } from "@mui/material";
import React from "react";
import { Category } from "../types/types";
import CategoryCard from "../components/CategoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Props {
  data: Category[];
}
const Categories: React.FC<Props> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Box
      sx={(theme) => ({
        "*": {
          color: theme.palette.primary.main,
        },
        ".slick-arrow, .slick-prev:before, .slick-next:before": {
          color: `${theme.palette.primary.main} !important`,
        },
        ".slick-track": {
          display: "flex",
          gap: "20px",
          padding: 2,
        },
      })}
    >
      <Slider {...settings}>
        {data.map((item) => (
          <CategoryCard data={item} />
        ))}
      </Slider>
    </Box>
  );
};

export default Categories;
