import firebase from 'firebase'

//Esto se debe de cambiar al crear la base de datos.
const firebaseConfig = {
    apiKey: "AIzaSyBg_EhFy-9Su1g_ZbaJdwjZGxGNsGY1FnE",
    authDomain: "labsito.firebaseapp.com",
    projectId: "labsito",
    storageBucket: "labsito.appspot.com",
    messagingSenderId: "1095290512111",
    appId: "1:1095290512111:web:7202541d447272a06b311a"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;