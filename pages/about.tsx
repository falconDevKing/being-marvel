import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Stack } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import Caption from '../components/Home/Caption'
import Image from 'next/image'
import HomeBlogSamples from '../components/Home/HomeBlogSamples'
import { SiInstagram, SiTwitter } from 'react-icons/si'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const Tomatoes = localFont({ src: '../fonts/Tomatoes.ttf' })

const About: NextPage = () => {
  return (
    <Box color="#2c2c2c">
      <Head>
        <title>Being Marvel</title>
        <meta name="description" content="A lifestyle Blog" />
        <link rel="icon" href="/BeingMarvelLogo.png" />
      </Head>

      <Header width={'85%'} />

      <Box height={'240px'} bgcolor={'#F4F7FD'} maxWidth={'100%'} />
      <Box width={'300px'} height={'300px'} mx={'auto'} mt={'-150px'}>
        <Image src={'/AboutPicture.png'} alt="about picture" width={402} height={402} layout="responsive" style={{ borderRadius: '50%' }} />
      </Box>
      <Box style={Tomatoes.style} textAlign={'center'} fontSize={'3rem'} py={6}>
        Being Marvel
      </Box>

      <Box px={8} textAlign={'center'} py={4} width={'60%'} mx={'auto'} fontSize={'1.25rem'}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam sit cum facere aperiam laboriosam nulla s milique quaerat hic magnam aliquid, accusamus
        nesciunt consectetur aspernatur repellendus? Commodi, illum beatae omnis impedit facilis deserunt minus. At aliquid dicta nihil, suscipit reiciendis
        porro blanditiis iste dolore accusamus tempora? Commodi, ea nulla repudiandae earum asperiores corrupti perferendis maiores! Nihil consectetur nesciunt
        quisquam delectus corporis, esse est beatae deleniti, doloremque labore aspernatur repellendus dignissimos id quae! Veniam doloremque provident nemo
        tempore a sed soluta sapiente repellendus quisquam itaque eaque incidunt corrupti alias suscipit, earum ducimus sint, dicta adipisci quis voluptatibus,
        impedit ratione officiis. Quod, ad. Impedit dicta, fugit non nihil unde sapiente hic eos nesciunt? Non reiciendis cumque explicabo soluta similique sed
        perspiciatis deserunt maxime cupiditate
      </Box>

      <Box width={'100%'} display={'flex'} justifyContent={'center'} py={8}>
        <Stack direction={'row'} spacing={1} borderTop={'1px solid #B6B9C088'} width={'max-content'} py={4} px={12}>
          <a href="mailto:adedayomoyo04@gmail.com">
            <Box borderRadius={'50%'} border={'1px solid #B6B9C088'} width={'40px'} display={'flex'} p={1} justifyContent={'center'} alignItems={'center'}>
              <AiOutlineMail fontSize={'24px'} color={'#B6B9C088'} />
            </Box>
          </a>
          <a href="https://www.linkedin.com/in/moyo-marv-adedayo/" target="_blank" rel="noopener noreferrer ">
            <Box borderRadius={'50%'} border={'1px solid #B6B9C088'} width={'40px'} display={'flex'} p={1} justifyContent={'center'} alignItems={'center'}>
              <RiLinkedinFill fontSize={'24px'} color={'#B6B9C088'} />
            </Box>
          </a>
          <a href="https://www.linkedin.com/in/moyo-marv-adedayo/" target="_blank" rel="noopener noreferrer ">
            <Box borderRadius={'50%'} border={'1px solid #B6B9C088'} width={'40px'} display={'flex'} p={1} justifyContent={'center'} alignItems={'center'}>
              <SiTwitter fontSize={'24px'} color={'#B6B9C088'} />
            </Box>
          </a>
          <a href="https://www.instagram.com/being.marvel_/" target="_blank" rel="noopener noreferrer ">
            <Box borderRadius={'50%'} border={'1px solid #B6B9C088'} width={'40px'} display={'flex'} p={1} justifyContent={'center'} alignItems={'center'}>
              <SiInstagram fontSize={'24px'} color={'#B6B9C088'} />
            </Box>
          </a>
        </Stack>
      </Box>

      <Footer width={'85%'} />
    </Box>
  )
}

export default About
