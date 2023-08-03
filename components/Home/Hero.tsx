import { Box } from '@mui/material'
import Image from 'next/image'

const Hero = () => {
  return (
    <Box width={'85%'} display={'flex'} justifyContent={'space-between'} mx="auto" bgcolor="aqua">
      <Box width={'60%'} p={6} borderRadius={'16px'}>
        <Image src="/HomePicture.png" alt="Welcome Image" layout="responsive" width={1024} height={775} style={{ borderRadius: '16px' }} />
      </Box>
      <Box width={'35%'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        <Box fontSize={'1rem'}>LOREM IPSUM DOLOR SIT,</Box>
        <Box fontSize={'4rem'} fontWeight={500}>
          LOREM IP
        </Box>
        <Box py={2} fontSize={'1rem'}>
          LOREM IPSUM DOLOR SIT, AMET CONSE TETUR ADIPISICING ELIT.
        </Box>
        <Box fontSize={'1rem'} py={1} px={2} bgcolor={'#95A8D3'} width={'max-content'} borderRadius={'24px'} color="#fff">
          READ MORE
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
