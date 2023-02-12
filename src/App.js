import React from "react";
import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";
import Videos from "./components/Videos";
import VideoDetails from "./components/VideoPage";
import ScrollToTop from "./utils/ScrollToTop";


export const config = {
  endpoint: `https://11c5a109-fb92-43a7-8091-76768c9c1b7f.mock.pstmn.io/v1/videos`,
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Box sx={{ backgroundColor: "#181818" }}>
        <Routes>
          <Route path="/" exact element={<Videos />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
