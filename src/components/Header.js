import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UploadVideo from "./UploadVideo";






const Header = ({ handleSearch, videoDetails, children }) => {
  return (
    <Box
      sx={{
        position: "sticky",
        backgroundColor: "#202020",
        top: 0,
        overflowX: "hidden"
      }}
    >
      <Stack
        p={2}
        alignItems="center"
        sx={{
          position: "sticky",
          backgroundColor: "#202020",
          top: 0,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Link to="/">
          <img src="https://user-images.githubusercontent.com/63467479/213300037-dfaa8f25-838b-4a12-bc13-e2283eae2691.svg" alt="logo" height={45} />
        </Link>
        {!videoDetails && (
          <Box className="search-bar-desktop">
            <input
              className="search-input"
              placeholder="Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button type="submit" className="search-button">
              <SearchIcon />
            </button>
          </Box>
        )}

        <Box>
          <UploadVideo />
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
