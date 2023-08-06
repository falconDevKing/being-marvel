import { Box } from '@mui/material'
import Image from 'next/image'

const FeaturedBlog = () => {
  return (
    <Box bgcolor={'#F4F7FD'} py={2} px={4} borderRadius={'16px'} my={2}>
      <Box p={2} color="#1B0F0A" fontSize={'1.5rem'}>
        Featured Post
      </Box>
      {[
        { name: 'Lifestyle', number: 20 },
        { name: 'Fashion', number: 20 },
        { name: 'Lifestyle', number: 20 },
      ].map((element, index) => (
        <Box key={index} display={'flex'} alignItems={'center'} borderTop={1} borderColor={'#B6B9C0'} p={2}>
          <Box width="45%" borderRadius={'24px'}>
            <Image src="/BlogPicture2.png" layout="responsive" width="164" height="164" style={{ borderRadius: '24px' }} />
          </Box>
          <Box p={2}>
            <Box fontWeight={700} fontSize={'1.5rem'}>
              {element.name}
            </Box>
            <Box fontSize={'1.2rem'} color="#848484">
              {element.number} Articles
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default FeaturedBlog
