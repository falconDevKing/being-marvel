import { Box, Stack } from '@mui/material'
import HomeBlogCard from './HomeBlogCard'
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const Tomatoes = localFont({ src: '../../fonts/Tomatoes.ttf' })

const HomeBlogSamples = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} p={8}>
      <Box style={Tomatoes.style} fontSize={'6rem'} color="#2C2C2C" mb={-4}>
        Lorem ip
      </Box>

      <Box fontSize={'1.5rem'} color="#2C2C2C">
        LOREM IPSUM DOLOR SIT, AMET CONSECTETUR
      </Box>

      <Stack spacing={8} direction={'row'} py={4}>
        <HomeBlogCard />
        <HomeBlogCard />
        <HomeBlogCard />
      </Stack>

      <Box fontSize={'1.5rem'} py={1} px={3} bgcolor={'#95A8D3'} width={'max-content'} borderRadius={'24px'} color="#fff">
        SEE MORE
      </Box>
    </Box>
  )
}

export default HomeBlogSamples
