import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import useStyles from './ContactsStyles';
import carlos from '../../static/images/avatar/fotoCarlos-min.png'
import maluma from '../../static/images/avatar/maluma-min.png'
import satoshi from '../../static/images/avatar/satoshi-min.jpg'

const Contacts = () => {

    function createData(img,nombre, dir, email, phone) {
        return { img, nombre, dir, email, phone };
      }
      
    const rows = [
        createData(carlos, 'Carlos Estrada', 'una dirección', 'carlos@estrada.com', 6142168878),
        createData(maluma, 'Maluma beibi', 'otra dirección', 'papi@juancho.com', 6142673352),
        createData(satoshi, 'Satoshi Nakamoto', 'desconocido', 'satoshi@nakamoto.com', 6489257738),
    ];

    const classes = useStyles();

    return (
        <>
        <Grid className = {classes.root} container item xs = {12} justify='left' alignItems= 'flex-start' direction = 'column'>
            <Grid container item xs = {12} alignItems = 'flex-start' justify = 'flex-start' className = {classes.sideInfo}>
                <h1 className = {classes.header}>Contactos</h1>
            </Grid>
            <Grid container item xs = {12} justify = 'flex-start'>
                <Button
                    className = {classes.buttonWhite}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                Agregar
                </Button>
            </Grid>
            <Grid container item xs = {12} alignItems = 'flex-start' justify = 'flex-start'>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="caption table">
                        <caption>Lista de contactos</caption>
                        <TableHead>
                        <TableRow>
                            <TableCell className = {classes.bold}> Imagen </TableCell>
                            <TableCell className = {classes.bold} >Nombre</TableCell>
                            <TableCell className = {classes.bold} >Dirección</TableCell>
                            <TableCell className = {classes.bold} >Email</TableCell>
                            <TableCell className = {classes.bold} >Telefono</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                            <Avatar className = {classes.image} alt="Carlos Estrada" src= {row.img} />
                            <TableCell component="th" scope="row">
                                {row.nombre}
                            </TableCell>
                            <TableCell >{row.dir}</TableCell>
                            <TableCell >{row.email}</TableCell>
                            <TableCell >{row.phone}</TableCell>
                            <Button
                                className = {classes.buttonEdit}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >Editar
                            </Button>
                            <Button
                                className = {classes.buttonDel}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >Eliminar
                            </Button>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            
            
        </Grid>
        </>
    )
}

export default Contacts
