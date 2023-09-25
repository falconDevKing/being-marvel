import { Box } from '@mui/material'
import BloggerLayout from '../../components/blogger/BloggerLayout'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useRouter } from 'next/router'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar } from '@ckeditor/ckeditor5-image'
import { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import Editor, { QuillFormats, QuillModules } from '../../components/Editor'

const NewBlog = () => {
  const [blogContent, setBlogContent] = useState<string>('')
  const [value, setValue] = useState('')

  // let editorRef = useRef<any>()
  // const { CKEditor, ClassicEditor } = editorRef.current || {} // if it don't find any document then it will be an empty object

  // let [loaded, setLoaded] = useState(false)

  // useEffect(() => {
  //   editorRef.current = {
  //     CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
  //     ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
  //   }

  //   setLoaded(true)
  // }, []) // run on mounting
  // // run on mounting

  return (
    <BloggerLayout>
      <Box>
        <Box display={'flex'} justifyContent={'space-between'} py={2}>
          <Box>
            <Box fontSize={'1.5rem'} fontWeight={700}>
              New Blog Post
            </Box>
            <Box fontSize={'1.2rem'} color="#C0C0C0">
              Lorem ipsum dolor sit amet, consecte turcing elit.{' '}
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent={'space-between'}>
          <Box width="63%">
            <Box bgcolor="#fff" p={4} pb={2} mb={2}>
              <Box fontWeight={700} fontSize="1.5rem" pb={2}>
                Blog Content
              </Box>
              <Box>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={'flex'} pb={1}>
                  <input
                    id="title"
                    placeholder="Title"
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
              </Box>
              <Box>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={'flex'} pb={1}>
                  <input
                    id="description"
                    placeholder="Description"
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
              </Box>
              <Box>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={'flex'} pb={1}>
                  <input
                    id="category"
                    placeholder="Category"
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
              </Box>

              <Box>
                <Editor
                  theme="snow"
                  // defaultValue={value}
                  // readOnly={true}
                  value={value}
                  onChange={setValue}
                  modules={QuillModules}
                  formats={QuillFormats}
                  placeholder={'Create your blog post here...'}
                />
              </Box>
            </Box>
          </Box>

          <Box width="35%" height="100%">
            <Box bgcolor="#fff" p={4}>
              <Box fontSize="1.4rem" fontWeight={700}>
                Blog Caption Image
              </Box>
              <Box fontSize="0.8rem">Lorem ipsum dolor sit</Box>

              <Box pt={1}>
                <Box>Lorem ipsum dolor sit</Box>
                <Box display={'flex'} pb={1}>
                  <input
                    id="captionText"
                    placeholder="Caption Text"
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
              </Box>
              <Box px={4} py={4} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} bgcolor={'#F4F7FD'} my={2}>
                <CloudUploadOutlinedIcon sx={{ fontSize: '120px' }} />
                <Box
                  bgcolor="#6E87DC88"
                  my={1}
                  p={1}
                  display="flex"
                  color="#fff"
                  justifyContent={'center'}
                  alignItems={'center'}
                  fontWeight={700}
                  fontSize="1.2rem"
                >
                  Browse File
                </Box>
                <Box fontSize="0.9rem" textAlign={'center'} py={2}>
                  Photos must be JPEG or PNG format and should be landscape orientation
                </Box>
              </Box>
            </Box>
            <Box display={'flex'} justifyContent={'flex-end'} fontWeight={700}>
              <Box bgcolor="#6E87DC88" color="#fff" p={2} width="max-content" my={2}>
                Submit Post
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </BloggerLayout>
  )
}

export default NewBlog
