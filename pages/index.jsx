import App from "../components/App";
import Link from "next/link";
import Router from 'next/router';
import {auth,firebase} from '../lib/firebase';

const index = () => {
  console.log(auth);
  console.log(firebase);
  //To authenticate user when they log in.
  const loginHandler = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result)=>{
      const token = result.credential.accessToken;
      const user = result.user;
      console.log('The current user is ',user.toJSON());
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    Router.push('/game');
  }
  return (
    <App>
      <div>
        <h1>Index here bruh</h1>
        <button onClick={loginHandler}>Google Log in</button>
      </div>
    </App>
  );
};

export default index;
