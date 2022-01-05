import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
	apiKey: "AIzaSyBBFIu0Ufss7bkXrnkSVJCqGWfgX_84SWQ",
	authDomain: "react-auth-cf783.firebaseapp.com",
	projectId: "react-auth-cf783",
	storageBucket: "react-auth-cf783.appspot.com",
	messagingSenderId: "268885801831",
	appId: "1:268885801831:web:eb471d0836061e35284dc2",
});

export const auth = firebaseConfig.auth();
export default firebaseConfig;
