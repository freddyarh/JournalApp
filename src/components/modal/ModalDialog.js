import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import axios from "axios";
import moment from 'moment';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ mb: 3, p: 0 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const baseURL = "http://localhost:3000/entries";

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState(null);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    date: new Date(),
    image: "",
    user: useSelector( state => state.auth.uid)
  });
  
  const handleSaveEntries = () => {
    axios
      .post(baseURL, inputs)
      .then((response) => {
        setPost(response.data);
        console.log(response)
      });
    handleClose();
  }

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div variant="outlined" onClick={handleClickOpen}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-1">
            New entry
        </p>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} 
      >
        <DialogContent>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <TextField
              margin="none"
              id="title"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              onChange={ handleInputChange }
            />
        </BootstrapDialogTitle>
          <TextField
            id="outlined-multiline-static"
            name="description"
            fullWidth
            label="How was your day?"
            multiline
            rows={4}
            placeholder="Add some text"
            onChange={ handleInputChange }
          />
        </DialogContent>
        <DialogContent dividers>
          <input 
            type="file"
            name="image"
            onChange={ handleInputChange }
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSaveEntries}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}