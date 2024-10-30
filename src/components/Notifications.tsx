import {
  Badge,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import React from "react";
import { CommonNavItemProps } from "../types/types";
interface Props extends CommonNavItemProps {}
const Notifications: React.FC<Props> = ({ isMenu }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "notifications-popover" : undefined;
  return (
    <Box>
      {isMenu ? (
        <MenuItem onClick={handleClick as any}>
          <ListItemIcon>
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText>Notifications</ListItemText>
        </MenuItem>
      ) : (
        <Tooltip title="Notifications">
          <IconButton
            size="large"
            aria-label="show notifications"
            color="inherit"
            onClick={handleClick}
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </Box>
  );
};

export default Notifications;
