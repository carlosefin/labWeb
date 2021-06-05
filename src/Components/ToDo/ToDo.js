import { Button, Grid, Table, TableBody, TableContainer, TableHead, TableRow, Paper, withStyles, Modal, TextField} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React, {useState} from 'react';
import useStyles from './ToDoStyles';
import {db} from '../../Utilities/Firebase'
import { useAuth } from '../../Contexts/AuthContext'
import MuiTableCell from "@material-ui/core/TableCell";
import { useHistory } from 'react-router-dom'
import Notification from '../../Helpers/Notification';
import { useEffect } from 'react';

const TableCell = withStyles({
    root: {
        borderBottom: 'none'
    }
})(MuiTableCell)

const ToDo = () => {
    const history = useHistory();

    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''});
    
    const classes = useStyles();

    /* const  createData = (category, activity, id) => {
        return { category, activity, id};
      } */

    let id_counter = 0
      
    /* let rows = [
        createData('none', 'una actividad', id_counter),
        createData('none', 'una actividad', id_counter),
    ]; */

    const [task, setTask] = useState({
        category: '',
        activity: '',
    });

    const { currentUser, logout } = useAuth();

    let displayTasks = null;

    const [tasks, setTasks] = useState([]);

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        getTasks();
    }, [])

    const getTasks = () => {
        db.collection(currentUser.uid).onSnapshot(function(querySnapshot) {
            setTasks(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    category: doc.data().category,
                    activity: doc.data().activity
                }))
            )
        })
    }

    const logoutHandler = async () => {
        try {
            await logout();
            history.push('/login');
        } catch {
            alert('Hubo un error al momento de hacer logout');
        }
    }

    const saveTask = () => {
        setOpen(false)
        db.collection(currentUser.uid).add({
        
            category: task.category,
            activity: task.activity
               
        })
          .then(() => {
              console.log('info saved in cloud')
              setNotify({
              isOpen: true,
              message: 'task saved in the cloud',
              type: 'success'
            }) 
          })
    }

    const handleChange = (e) => {
        e.preventDefault();
        setTask({ ...task, [e.target.name]: e.target.value })
    };

    const removeTask = (id) => {
        db.collection(currentUser.uid).doc(id).delete();
    }
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
    <Grid className = {classes.modal} component = {Paper} container item justify = 'center' alignItems = 'center' direction = 'column'> 
        <h2 id="simple-modal-title">Add a new task</h2>
        <Grid className = {classes.fieldContainer} container item justify = 'center' alignItems = 'center' direction = 'row'>
          <Grid item className = {classes.modalField}>
              <p>Category:</p>
              <TextField 
                className = {classes.field}
                name = 'category'
                onChange = {handleChange}
                variant = 'outlined' 
                size="small"
              />
          </Grid>
          <Grid item className = {classes.modalField}>
              <p>Activity:</p>
              <TextField 
                className = {classes.field}
                name = 'activity'
                onChange = {handleChange}
                variant = 'outlined' 
                size="small"
              />
          </Grid>
        </Grid>
        <Button
        onClick = {saveTask}
        variant="contained"
        color="primary"
        type="submit"
        >
            Add Task
        </Button>
      </Grid>
    );

    if(tasks.length < 1){
        displayTasks = (
            <Grid component={Paper} className = {classes.root} container item xs = {12} justify='left' alignItems= 'flex-start' direction = 'column'>
                <h1 className = {classes.header}>All done, have some rest uwu</h1>
            </Grid>
        )
    }
    else{
        displayTasks = (
            <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="caption table">
                        <caption>Lista de tareas</caption>
                        <TableHead>
                        <TableRow>
                            <TableCell className = {classes.bold}> Category </TableCell>
                            <TableCell className = {classes.bold} >Activity</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {tasks.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell style = {{borderBottom: '2px solid black'}} component="th" scope="row">
                                {row.category}
                                </TableCell>
                                <TableCell style = {{borderBottom: '2px solid black'}} >{row.activity}</TableCell>
                                <TableCell style = {{borderBottom: '2px solid black'}} align = 'right'>
                                <Button
                                    className = {classes.buttonDel}
                                    onClick = {() => removeTask(row.id)}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >Eliminar
                                </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        )

    }

    return (
        <>
        <Grid className = {classes.root} container item xs = {12} justify='left' alignItems= 'flex-start' direction = 'column'>
            <Grid container item xs = {12} alignItems = 'flex-end' justify = 'flex-end'>
                <Button
                    onClick = {logoutHandler}
                    className = {classes.buttonLogout}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                Logout
                </Button>
            </Grid>
            <Grid container item xs = {12} alignItems = 'flex-start' justify = 'flex-start'>
                <h1 className = {classes.header}>To Do List</h1>
            </Grid>
            <Grid container item xs = {12} justify = 'flex-start'>
                <Button
                    onClick = {handleOpen}
                    className = {classes.buttonWhite}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                Agregar
                </Button>
            </Grid>
            <Grid container item xs = {12} alignItems = 'flex-start' justify = 'flex-start'>
                {displayTasks}
            </Grid>
        </Grid>
        <Notification 
            notify = {notify}
            setNotify = {setNotify}
        />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
        </>
    )
}

export default ToDo
