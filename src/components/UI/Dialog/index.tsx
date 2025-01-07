import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

type Props = {
  dialogText: string
  title: string
  open: boolean
  setOpen: (value: boolean) => void
  handleConfirm: () => void
}
export default function ConfirmationDialog({
  dialogText,
  open,
  title,
  setOpen,
  handleConfirm,
}: Props) {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        color="#19372d"
        PaperProps={{
          style: {
            backgroundColor: '#423F3E',
            color: '#fff',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: '#fff' }}
          >
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleConfirm}
            variant="outlined"
            style={{
              color: 'white',
              borderColor: 'white',
            }}
          >
            Confirm
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            style={{
              color: 'white',
              borderColor: 'white',
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
