import { Box, Pagination, Stack } from '@mui/material'
import BlogCard from './BlogCard'
import SearchIcon from '@mui/icons-material/Search'
import SortIcon from '@mui/icons-material/Sort'
import React, { useState } from 'react'
import AudioCard from './AudioCard'

const AudioCards = () => {
  const [page, setPage] = useState(1)
  const [paginationCount, setPaginationCount] = useState(1)
  const [ItemsPerPage, setItemsPerPage] = useState(12)

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Box width={'85%'} mx="auto">
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box>
          <Box fontWeight={700} fontSize={'1.8rem'}>
            LISTEN TO AUDIO
          </Box>
          <Box color="#D8D6D6">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Box>
        </Box>
      </Box>

      <Box display={'flex'} flexDirection={'row'} py={4} flexWrap="wrap">
        {[1, 2, 3, 4, 5, 6].map((element, index) => (
          <AudioCard key={element} />
        ))}
      </Box>

      <Box justifyContent={'center'} display={'flex'} py={2}>
        <Pagination count={paginationCount} page={page} onChange={handlePageChange} color="primary" showFirstButton showLastButton />
      </Box>
    </Box>
  )
}

export default AudioCards
