import { Box, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const BlogPost = () => {
  return (
    <Box bgcolor={'#F4F7FD'} p={4} borderRadius={'16px'} fontSize={'24px'}>
      <Box py={1}>
        Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis cras sed felis eget velit
        aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed
        sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Id interdum veli laoreet id
        donec ultrices tincidunt.
      </Box>

      <Box py={1}>
        Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis cras sed felis eget velit
        aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed
        sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Id interdum veli laoreet id
        donec ultrices tincidunt.
      </Box>

      <Box py={1}>
        Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis cras sed felis eget velit
        aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed
        sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Id interdum veli laoreet id
        donec ultrices tincidunt.
      </Box>

      <Box py={1}>
        Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis cras sed felis eget velit
        aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed
        sed risus pretium quam.
      </Box>

      <Box borderTop={1} borderColor={'#B6B9C0'} display={'flex'} alignItems={'center'} mt={2} p={1} justifyContent={'flex-end'}>
        <Box px={2} color="#C0C0C0">
          Like this Post
        </Box>
        <FavoriteBorderIcon sx={{ color: '#fff', backgroundColor: '#6289E0', borderRadius: '50%', p: '2px' }} />
      </Box>
    </Box>
  )
}

export default BlogPost
