import { Box } from '@mui/material'
import Image from 'next/image'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

const ContactForm = () => {
  return (
    <Box width={'100%'}>
      <Box width={'85%'} display={'flex'} mx="auto" px={6} alignItems={'center'} pt={8}>
        <Box width={'50%'} borderRadius={'16px'} height={'100%'} px={4}>
          <Image src="/ContactPicture2.png" alt="Contact Image" layout="responsive" width={851} height={1053} style={{ borderRadius: '16px' }} />
        </Box>
        <Box width={'50%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} px={4}>
          <Box fontSize={'2rem'} fontWeight={700} textAlign={'center'}>
            Aliquam excepturi impedit fugit
          </Box>
          <Box py={2} fontSize={'1rem'} fontWeight={700} textAlign={'center'}>
            Lorem ipsum dolor sit amet, consec tetur cing
          </Box>
          <Box>
            <Box display={'flex'} py={2}>
              <input
                id="contactName"
                placeholder="NAME"
                style={{
                  color: '#302F2F',
                  backgroundColor: '#F4F7FD',
                  padding: '8px',
                  height: '52px',
                  borderRadius: '4px 0px 0px 4px',
                  outline: 'none',
                  border: 'none',
                  width: '100%',
                  fontSize: '1.25rem',
                  fontFamily: 'Cormorant Garamond',
                }}
              />
            </Box>
            <Box display={'flex'} py={2}>
              <input
                id="contactEmail"
                placeholder="EMAIL"
                style={{
                  color: '#302F2F',
                  backgroundColor: '#F4F7FD',
                  padding: '8px',
                  height: '52px',
                  borderRadius: '4px 0px 0px 4px',
                  outline: 'none',
                  border: 'none',
                  width: '100%',
                  fontSize: '1.25rem',
                  fontFamily: 'Cormorant Garamond',
                }}
              />
            </Box>
            <Box display={'flex'} py={2}>
              <textarea
                id="contactMessage"
                placeholder="MESSAGE"
                rows={6}
                style={{
                  color: '#302F2F',
                  backgroundColor: '#F4F7FD',
                  padding: '8px',
                  borderRadius: '4px 0px 0px 4px',
                  outline: 'none',
                  border: 'none',
                  width: '100%',
                  fontSize: '1.25rem',
                  fontFamily: 'Cormorant Garamond',
                }}
              />
            </Box>
          </Box>
          <Box
            fontSize={'1.25rem'}
            py={1}
            px={2}
            bgcolor={'#95A8D3'}
            width={'max-content'}
            borderRadius={'24px'}
            display={'flex'}
            alignItems={'center'}
            fontWeight={700}
            color="#fff"
          >
            SUBMIT
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactForm
