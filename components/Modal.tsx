import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import React, { PropsWithChildren, ReactNode } from 'react'
import { useRouter } from 'next/router'
import CloseIcon from '@mui/icons-material/Close'
import ShareIcon from '@mui/icons-material/Share'
import IconButton from '@mui/material/IconButton'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import { useMediaQuery } from '@mui/material'

type ModalProps = PropsWithChildren<{
  open: boolean
  bgPrimary?: boolean
  showClose?: boolean
  showShareIcon?: boolean
  handleClose: () => void
  title?: string | ReactNode
  altTitle?: string | ReactNode
  maxWidth?: DialogProps['maxWidth']
}>

type DialogTitleProps = PropsWithChildren<{
  id?: string
  showShareIcon?: boolean
  onClose?: () => void
  altTitle?: string | ReactNode
}>

const StyledDialog = styled(Dialog)(() => ({
  '&': {
    '.MuiDialog-scrollPaper': {
      alignItems: 'baseline',
    },

    '.MuiDialog-paperScrollPaper': {
      top: '10%',
      borderRadius: '8px',
      boxShadow: '0px 3px 4px rgba(153, 155, 168, 0.25)',
      margin: '0px',
      padding: '0px',
    },
  },
}))

const DialogTitleComponent = (props: DialogTitleProps) => {
  const { children, altTitle, showShareIcon, onClose, ...other } = props

  return (
    <DialogTitle
      sx={
        altTitle
          ? null
          : {
              display: 'flex',
              m: 0,
              height: '60px',
              padding: 0,
              fontSize: {
                xs: '18px',
                sm: '1.5rem',
                md: '1.5rem',
              },
              fontFamily: 'Cormorant Garamond',
              fontWeight: 600,
              textAlign: 'left',
              color: {
                xs: '#171721',
                sm: '#171721',
                md: '#171721',
              },
              backgroundColor: '#fff',
              borderBottom: '0px',
              lineHeight: {
                xs: '18px',
                sm: '2rem',
                md: '2rem',
              },
            }
      }
      {...other}
    >
      <Box height="100%" width="50px" borderRadius={'0px 0px 8px 0px'} bgcolor={'#f4f7fd'}></Box>
      <Box width={'max-content'} padding={'16px 32px'}>
        {children}
      </Box>
      <Box height="100%" width="100%" borderRadius={'0px 0px 0px 8px'} bgcolor={'#f4f7fd'} display="flex" justifyContent={'flex-end'} px={4}>
        {onClose && !showShareIcon ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </Box>

      {showShareIcon ? (
        <IconButton
          aria-label="close"
          sx={{
            top: '20px',
            right: '1rem',
            position: 'absolute',
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <ShareIcon />
        </IconButton>
      ) : (
        <></>
      )}
    </DialogTitle>
  )
}

const Modal = ({ open, title, children, altTitle, showShareIcon, showClose, handleClose, maxWidth = 'lg' }: ModalProps) => {
  const matches = useMediaQuery('(min-width:900px)')
  const router = useRouter()

  return (
    <div>
      <StyledDialog
        fullWidth
        open={open}
        maxWidth={maxWidth}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        PaperProps={{
          sx: {
            width: {
              xs: router.pathname == '/recipients' ? '80%' : '90%',
              sm: '60%',
            },
            maxWidth: router.pathname == '/recipients' ? '22rem' : 'maxWidth',
          },
        }}
        sx={{
          maxHeight: '90vh',
        }}
      >
        {(title || altTitle) && (
          <DialogTitleComponent altTitle={altTitle} onClose={handleClose} showShareIcon={!!(showShareIcon && !matches)}>
            {altTitle ?? title}
          </DialogTitleComponent>
        )}
        {showClose && <DialogTitleComponent onClose={handleClose} showShareIcon={showShareIcon && !matches ? true : false} />}
        <DialogContent
          sx={{
            padding: {
              xs: '0px 0px 0px 0px',
            },
          }}
        >
          <Box
            sx={{
              padding: {
                xs: '30px 20px 20px 20px',
                sm: '30px 40px 20px 40px',
                md: '30px 40px 20px 40px',
              },
            }}
          >
            {children}
          </Box>
        </DialogContent>
      </StyledDialog>
    </div>
  )
}

export default Modal
