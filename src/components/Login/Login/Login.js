import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Context } from '../../Login/Context/Context'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../Login/FirebaseConfig/firebase.config';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const { user, setUser } = useContext(Context);
    console.log(user);
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const handleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    role: 'user'
                };
                axios.post('https://techsoldiers.herokuapp.com/addUser', signedInUser).then((res) => {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    console.log(res.data);
                    setUser(res.data);
                    history.replace(from);
                })
                console.log(result);
                setUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error);
                console.log(error.message);
            });
    };

    return (
        <div>
            <div className="d-flex flex-column align-items-center mt-5">

                <button onClick={handleSignIn} className="btn googleBtn">
                    <h4><FcGoogle /> Press google icon to Login</h4>
                </button>
            </div>
        </div>
    );
};

export default Login;