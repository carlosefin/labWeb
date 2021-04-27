import React from 'react'
import {Snackbar} from '@material-ui/core'
import {Alert} from '@material-ui/lab'

const Notification = (props) =>{

    const {notify, setNotify} = props;

    const handleClose = (event, reason) => {

        if (reason === 'clickaway'){
            return;
        }
        setNotify({
            ...notify,
            isOpen: false,
        })
    }

    return (
        <Snackbar
            open = {notify.isOpen}
            autoHideDuration = {3000}
            anchorOrigin = {{vertical: 'top', horizontal: 'right'}}
            onClose = {handleClose}
        >
            <Alert
                severity = {notify.type}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notification