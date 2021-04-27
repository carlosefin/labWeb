import React, { Fragment } from 'react'
import { TextField, Grid } from '@material-ui/core';
import { Cake, AccountCircle, Phone } from '@material-ui/icons';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Register = (props) => {
    return (
        <Fragment>
            <Grid item xs={1}>
                <AccountCircle />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Name"
                    margin='normal'
                    required
                    id='nombre'
                    name='name'
                    value={props.data.name}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={5}>
                <TextField
                    label="Last Name"
                    fullWidth
                    margin='normal'
                    required
                    id='apellido'
                    name='lastName'
                    autoFocus
                    value={props.data.lastName}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs='1'>
                <Phone />
            </Grid>
            <Grid item xs='4'>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="LADA"
                    label="LADA"
                    name="LADA"
                    value={props.data.LADA}
                    onChange={props.handleChange}
                    autoFocus
                />
            </Grid>
            <Grid item xs='7'>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phoneNumber"
                    label="Phone Number"
                    name="phoneNumber"
                    value={props.data.phoneNumber}
                    onChange={props.handleChange}
                    autoFocus
                />
            </Grid>
            <Grid item xs={12} onChange={props.handleChange}>
                <input type="radio" value="Male" name="gender" checked={props.data.gender === 'Male'} /> Male
                <input type="radio" value="Female" name="gender" checked={props.data.gender === 'Female'} /> Female
                <input type="radio" value="Other" name="gender" checked={props.data.gender === 'Other'} /> Other
            </Grid>
            <Grid item xs={1}>
                <Cake />
            </Grid>
            <Grid item xs={11}>
                <TextField
                    fullWidth
                    id="date"
                    label="Birthday"
                    type="date"
                    name='bday'
                    onChange={props.handleChange}
                    value={props.data.bday}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={1}>
                <LocationOnIcon />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    margin='normal'
                    required
                    label="Country"
                    id='pais'
                    name='country'
                    value={props.data.country}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={5}>
                <TextField
                    fullWidth
                    label="City"
                    margin='normal'
                    required
                    id='ciudad'
                    name='city'
                    value={props.data.city}
                    onChange={props.handleChange}
                />
            </Grid>
        </Fragment>
    )
}

export default Register