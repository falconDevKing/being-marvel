import { Box } from '@mui/material'
import Image from 'next/image'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

const Caption = () => {
  return (
    <Box width={'100%'} bgcolor={'#F4F7FD'}>
      <Box width={'85%'} display={'flex'} justifyContent={'space-between'} mx="auto" p={6}>
        <Box width={'50%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} pr={12} py={18}>
          <Box fontSize={'4rem'} fontWeight={500}>
            LOREM IP
          </Box>
          <Box py={2} fontSize={'1rem'}>
            LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. OBCAECATI ADIPISCI IPSA TENETUR, ALIQUAM EXCEPTURI IMPEDIT FUGIT RATIONE QUIDEM NUMQUAM
            ISTE QUAERAT ET ATQUE NAM APERIAM DOLORUM REM QUAE UNDE. RECUSANDAE CONSEQUATUR DUCIMUS NEQUE REM? NATUS SIMILIQUE CUMQUE REPREHENDERIT? IMPEDIT,
            PORRO.
          </Box>
          <Box fontSize={'1rem'} py={1} px={2} bgcolor={'#95A8D3'} width={'max-content'} borderRadius={'8px'} display={'flex'} alignItems={'center'}>
            <Box component={'span'} fontWeight={700}>
              READ MORE
            </Box>
            <TrendingFlatIcon fontSize="small" />
          </Box>
        </Box>
        <Box width={'50%'} borderRadius={'16px'}>
          <Image src="/HomePicture2.png" alt="Welcome Image" layout="responsive" width={851} height={1053} style={{ borderRadius: '16px' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default Caption
