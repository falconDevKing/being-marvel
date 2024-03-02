import { Box, Pagination, Stack } from "@mui/material";
import BlogCard from "./BlogCard";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import React, { useState } from "react";
import AudioCard from "./AudioCard";

const AudioCards = () => {
  const [page, setPage] = useState(1);
  const [paginationCount, setPaginationCount] = useState(1);
  const [ItemsPerPage, setItemsPerPage] = useState(12);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box width={"85%"} mx="auto">
      <Box py={8}>
        <Box>
          <Box fontWeight={700} fontSize={"1.8rem"}>
            LISTEN TO AUDIO
            <Box component={"span"} fontStyle={"italic"} fontSize={"1rem"} pl={1} color="red">
              ...Coming soon
            </Box>
          </Box>
          {/* <Box color="#D8D6D6">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Box> */}
        </Box>
      </Box>

      <Box display={"none"} flexDirection={"row"} py={4} flexWrap="wrap">
        {["Being Here", "Being Away", "Being In A Season", "Being In A Lot", "Being Disabled", "Being Home & Away"].map((element, index) => (
          <AudioCard key={element} name={element} />
        ))}
      </Box>

      <Box justifyContent={"center"} display={"none"} py={2}>
        <Pagination count={paginationCount} page={page} onChange={handlePageChange} color="primary" showFirstButton showLastButton />
      </Box>
    </Box>
  );
};

export default AudioCards;
