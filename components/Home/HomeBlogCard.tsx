import { Box } from '@mui/material'
import Image from 'next/image'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

const HomeBlogCard = () => {
  return (
    <Box border={'1px solid #F4F7FD'} pb={4} borderRadius={'16px'} boxShadow={'0 1px 1px 1px  #f4f7fd'} mx={2}>
      <Box width={'100%'} borderRadius={'16px'}>
        <Image src="/HomePicture3.png" alt="Blog Sample Image" layout="responsive" width={541} height={527} style={{ borderRadius: '16px 16px 0px 0px ' }} />
      </Box>
      <Box p={2}>
        <Box fontSize={'1.25rem'}>LIFESTYLE</Box>
        <Box fontSize={'2rem'} fontWeight={500}>
          LOREM IP
        </Box>
        <Box py={1}>
          LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI ADIPISCI IPSA TENETUR, ALIQUAM EXCEPTURI IMPEDIT FUGIT RATIONE QUIDEM NUMQUAM ISTE
          QUAERAT ET ATQUE NAM APERIAM DOLORUM REM QUAE UNDE. RECUSANDAE CONSEQUATUR DUCIMUS NEQUE REM? NATUS SIMILIQUE CUMQUE REPREHENDERIT? IMPEDIT, PORRO.
        </Box>
        <Box
          fontSize={'1rem'}
          py={1}
          width={'max-content'}
          display={'flex'}
          alignItems={'center'}
          borderBottom={1}
          borderColor={'#6e6f72b9'}
          sx={{ cursor: ' pointer' }}
        >
          <Box component={'span'} fontWeight={700} color="#282828">
            READ MORE
          </Box>
          <TrendingFlatIcon fontSize="small" />
        </Box>
      </Box>
    </Box>
  )
}

export default HomeBlogCard
