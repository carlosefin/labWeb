import React, { useContext, useEffect, useState } from 'react'
import { Fragment } from 'react';
import { auth, db } from '../Utilities/Firebase';
import Notification from '../Helpers/Notification'

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    //Sets the state for the notification component.
    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''});

    //function for user creation.
    const signUp = data => {
        return auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(cred => {
                db.collection('UserData').doc(cred.user.uid).set({
                    Email: data.email,
                    LADA: data.LADA,
                    PhoneNumber: data.phoneNumber,
                    Bday: data.bday,
                    City: data.city,
                    Country: data.country,
                    Gender: data.gender,
                    Name: data.name,
                    LastName: data.lastName
                })
                    .then(() => 
                    setNotify({
                        isOpen: true,
                        message: 'Se creo el usuario correctamente',
                        type: 'success'
                    }))
                    .catch(error => {
                        console.log(error);
                    setNotify({
                        isOpen: true,
                        message: (error.message),
                        type: 'error'
                    })
                    })
            })
            .catch(error => {
                console.log(error);
                setNotify({
                    isOpen: true,
                    message: (error.message),
                    type: 'error'
                })
            })
    }

    //function for user login
    const login = data => {
        return auth.signInWithEmailAndPassword(data.email, data.password)
            .then(cred => console.log("Login succesfully"))
            .catch(error => {
                console.log(error);
                setNotify({
                    isOpen: true,
                    message: (error.message),
                    type: 'error'
                })
            })
    }

    //Function for user logout
    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signUp,
        login,
        logout
    }

    return (
        <Fragment>
            <AuthContext.Provider value={value} >
            {!loading && children}
            </AuthContext.Provider>
            <Notification 
            notify = {notify}
            setNotify = {setNotify}
            />
        </Fragment>
        
    )
}
