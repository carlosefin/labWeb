import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {  
      marginTop: theme.spacing(25),
      padding: theme.spacing(2, 4, 2, 2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    paper2: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(2, 4, 2, 2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(1, 0, 0),
    },
    margin: {
        margin: theme.spacing(1),
    }
  }));

export default useStyles;