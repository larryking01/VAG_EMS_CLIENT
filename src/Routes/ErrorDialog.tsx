// import { useState } from 'react'

// importing the dialog components and icons
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContent'
// import DialogActions from '@mui/material/DialogActions'
// import Button from 'react-bootstrap/Button'
import IconButton from '@mui/material/IconButton'
// import { LuCheckCircle } from "react-icons/lu"
import { GrClose } from "react-icons/gr"
import { MdErrorOutline } from "react-icons/md";


// interface to define required props for the Success Dialog
interface Dialog_Content_Text {
    dialogContentText: string,
    open: boolean,
    handleClose: () => void
}


// the success dialog component.
const ErrorDialog: React.FC<Dialog_Content_Text> = ( props ) => {

    return (
        <div>
            <Dialog open={ props.open } onClose={ props.handleClose }>
                <DialogTitle id='dialog-title' className='bg-red-600 text-white'>
                    <div className='flex'>
                        <h5 className='mr-4 text-xl '>An error occurred</h5>
                        <MdErrorOutline size={ 30 } className='mt-0' />
                    </div>
                </DialogTitle>
                <IconButton aria-label='close modal' onClick={ props.handleClose }
                            sx={{ position: 'absolute', right: 8, top: 8}}>
                    <GrClose color='white' />
                </IconButton>

                <DialogContent id='dialog-content'>
                    <DialogContentText id='dialog-content-text'>
                        <span className='text-md font-lora'>{ props.dialogContentText }</span>
                    </DialogContentText>
                </DialogContent>

                {/* <DialogActions>
                    <Button variant='success'>Done</Button>
                </DialogActions> */}

            </Dialog>
        </div>
    )
}


export default ErrorDialog
