import { ShoppingCart } from "@mui/icons-material";
import {
  Badge,
  IconButton,
  Tooltip,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import React from "react";
import { CommonNavItemProps } from "../types/types";
interface Props extends CommonNavItemProps {}
const Cart: React.FC<Props> = ({ isMenu, onClick }) => {
  const handleClick = () => {
    onClick?.();
  };
  return (
    <>
      {isMenu ? (
        <MenuItem onClick={handleClick}>
          <ListItemIcon>
            <Badge badgeContent={17} color="error">
              <ShoppingCart />
            </Badge>
          </ListItemIcon>
          <ListItemText>Cart</ListItemText>
        </MenuItem>
      ) : (
        <Tooltip title="Cart">
          <IconButton onClick={handleClick} aria-label="cart">
            <Badge badgeContent={4} color="success">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default Cart;
