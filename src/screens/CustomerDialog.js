import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
} from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { PatternFormat } from 'react-number-format'
import { allErrorMessages } from '../authentication/messageError/errorMessages';

const CustomerDialog = (props) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth='lg'
      open={props.open}
      onClose={props.close}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle>
        {props.formmode ? 'Add New' : 'Update'}
        {' '}
        User
      </DialogTitle>
      <ValidatorForm onSubmit={props.addCustomer}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="First Name"
                onChange={props.changeFirstname}
                name="firstname"
                value={props.firstname}
                validators={['required']}
                errorMessages={allErrorMessages}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={6}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Last Name"
                onChange={props.changeLastname}
                name="lastname"
                value={props.lastname}
                validators={['required']}
                errorMessages={allErrorMessages}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={6}>
              <PatternFormat
                customInput={TextValidator}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Phone Number"
                format="+380 (##) ###-##-##"
                allowEmptyFormatting
                mask="X"
                onChange={props.changePhoneNumber}
                name="phonenumber"
                value={props.phonenumber}
                validators={['required']}
                errorMessages={allErrorMessages}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={6}>
              <TextValidator
                InputLabelProps={{ shrink: true }}
                name="birthdate"
                label="Birthdate"
                variant="outlined"
                margin="normal"
                fullWidth
                type="date"
                onChange={props.changeDate}
                value={props.date}
                validators={['required']}
                errorMessages={allErrorMessages}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={6}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email Address"
                type="email"
                onChange={props.changeEmail}
                name="email"
                value={props.email}
                validators={['required']}
                errorMessages={allErrorMessages}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={6}>
              <TextValidator
                InputLabelProps={{ shrink: true }}
                label="Choose Photo"
                variant="outlined"
                margin="normal"
                fullWidth
                type="file"
                id="file"
                name="file"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            {props.formmode ? 'Add' : 'Update'}
          </Button>
          <Button onClick={props.close} color="secondary">
            Close
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}

export default CustomerDialog;
