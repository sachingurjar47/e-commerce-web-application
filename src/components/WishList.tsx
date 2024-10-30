import React from "react";
import {
  Badge,
  IconButton,
  Tooltip,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { CommonNavItemProps } from "../types/types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
interface Props extends CommonNavItemProps {}
const WishList: React.FC<Props> = ({ isMenu, onClick }) => {
  const handleClick = () => {
    onClick?.();
  };
  return (
    <>
      {isMenu ? (
        <MenuItem onClick={handleClick}>
          <ListItemIcon>
            <Badge badgeContent={17} color="error">
              <FavoriteBorderIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText>Wishlist</ListItemText>
        </MenuItem>
      ) : (
        <Tooltip title="Wishlist">
          <IconButton aria-label="wishlist">
            <Badge badgeContent={4} color="error">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default WishList;
