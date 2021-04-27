import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(9),
      paddingLeft: '9rem',
      paddingRight: '9rem',
      minWidth: 1000
    },

    fieldContainer: {
        paddingBottom: '3rem'
    },

    modalField: {
        padding: '1rem'
    },

    field: {
        maxHeight: 10,
        width: 200
    },

    modal: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        marginTop: '14rem',
        marginLeft: '28rem',
        width: 600,
        height: 300
    },

    bold: {
        fontWeight: 'bold',
        fontSize: 18
    },

    table: {
        minWidth: 1000
    },

    image: {
        marginLeft: '2rem',
        marginTop: '.6rem'
    },

    header: {
        fontSize: 52,
    },

    buttonWhite: {
        height: 60,
        width: 120,
        fontSize: 18,
        color: 'white',
        backgroundColor: '#39393b',
        marginBottom: '3rem'
    },

    buttonLogout: {
        height: 40,
        width: 100,
        fontSize: 16,
        color: 'white',
        backgroundColor: 'red',
    },

    buttonEdit:{
        marginBottom: '1rem',
        color: 'white',
        backgroundColor: '#ff5250',
        marginRight: '1rem',
        '&:hover':{
            backgroundColor: '#facf53',
            color: 'black'
        }
    },

    buttonDel: {
        marginBottom: '1rem',
        color: 'black',
        backgroundColor: '#cbf6e8',
        '&:hover':{
            backgroundColor: '#3e0195',
            color: 'white'
        }
    }

  }));

  export default useStyles;