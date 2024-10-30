import { Box } from "@mui/material";
import React from "react";
import Categories from "../Sections/Categories";
import { Category } from "../types/types";
import ProductBy from "../Sections/ProductBy";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const categories: Category[] = [
  {
    value: "beauty",
    name: "Beauty",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800",
  },
  {
    value: "fragrances",
    name: "Fragrances",
    img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800",
  },
  {
    value: "furniture",
    name: "Furniture",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800",
  },
  {
    value: "groceries",
    name: "Groceries",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800",
  },
  {
    value: "home-decoration",
    name: "Home Decoration",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800",
  },
  {
    value: "kitchen-accessories",
    name: "Kitchen Accessories",
    img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800",
  },
  {
    value: "laptops",
    name: "Laptops",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800",
  },
  {
    value: "mens-shirts",
    name: "Mens Shirts",
    img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&w=800",
  },
  {
    value: "mens-shoes",
    name: "Mens Shoes",
    img: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800",
  },
  {
    value: "mens-watches",
    name: "Mens Watches",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800",
  },
  {
    value: "mobile-accessories",
    name: "Mobile Accessories",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800",
  },
  {
    value: "motorcycle",
    name: "Motorcycle",
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800",
  },
  {
    value: "skin-care",
    name: "Skin Care",
    img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800",
  },
  {
    value: "smartphones",
    name: "Smartphones",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800",
  },
  {
    value: "sports-accessories",
    name: "Sports Accessories",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800",
  },
  {
    value: "sunglasses",
    name: "Sunglasses",
    img: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800",
  },
  {
    value: "tablets",
    name: "Tablets",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800",
  },
  {
    value: "tops",
    name: "Tops",
    img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800",
  },
  {
    value: "vehicle",
    name: "Vehicle",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800",
  },
  {
    value: "womens-bags",
    name: "Womens Bags",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800",
  },
  {
    value: "womens-dresses",
    name: "Womens Dresses",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800",
  },
  {
    value: "womens-jewellery",
    name: "Womens Jewellery",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800",
  },
  {
    value: "womens-shoes",
    name: "Womens Shoes",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800",
  },
  {
    value: "womens-watches",
    name: "Womens Watches",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800",
  },
];
const Home = () => {
  const { data } = useAppSelector((state) => state.product.products);
  const dispatch = useAppDispatch();
  return (
    <Box p={4}>
      <Categories data={categories} />
      {categories?.map((item, i) => (
        <ProductBy
          key={item?.value}
          heading={`Top ${item.name}`}
          category={item.value}
          sideImage={item.img!}
        />
      ))}
    </Box>
  );
};

export default Home;
