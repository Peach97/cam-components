import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Menu } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MyButton from "../btn";
import "./navbar.css";

const pages = ["Home", "Features", "Pricing", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [hover, setHover] = React.useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "75%",
        borderRadius: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        top: "2.5rem",
        backdropFilter: "blur(10px)",
        border: "1px solid #ffffff80",
      }}
      color="transparent"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    fontWeight={800}
                    color="text.primary"
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onPointerEnter={() => setHover(true)}
                onClick={handleCloseNavMenu}
                sx={`margin: 2 1rem 2 1rem;
                  font-weight: 800;
                  color: #ffffff;
                  display: block;
                  &:hover {
                    color: #8A00FF;
                  }
                  `}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <GitHubIcon
                sx={{ color: "primary.text.primary", fontSize: "2rem" }}
              />
            </IconButton>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <LinkedInIcon
                sx={{
                  color: "primary.text.primary",
                  ml: "1rem",
                  fontSize: "2rem",
                }}
              />
            </IconButton>
            <MyButton
              fontSize="1.25rem"
              padding="0 1.5rem 0 1.5rem"
              margin="0 0 0 1rem"
            >
              Say Hi
            </MyButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
