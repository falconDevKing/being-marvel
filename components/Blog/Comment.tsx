import { Box, Button } from '@mui/material'

const Comment = () => {
  return (
    <Box bgcolor="#F4F7FD" width={'100%'} py={4} my={4}>
      <Box width={'85%'} mx="auto" my={2} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        <textarea
          id="contactMessage"
          placeholder="Write a comment"
          rows={6}
          style={{
            color: '#302F2F',
            backgroundColor: '#fff',
            padding: '16px',
            borderRadius: '4px 0px 0px 4px',
            outline: 'none',
            border: 'none',
            width: '100%',
            fontSize: '1.25rem',
            fontFamily: 'Cormorant Garamond',
          }}
        />
        <Button
          sx={{
            color: '#fff',
            bgcolor: '#3367DC',
            p: '8px 16px',
            mx: 'auto',
            my: 2,
            width: 'max-content',
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default Comment
