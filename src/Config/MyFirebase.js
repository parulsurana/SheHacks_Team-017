import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBB0A4ffrRhNnK8Gj5BSG9MUTMLSIFrmt8",
    authDomain: "generation-gap-c7e96.firebaseapp.com",
    projectId: "generation-gap-c7e96",
    storageBucket: "generation-gap-c7e96.appspot.com",
    messagingSenderId: "817508008623",
    appId: "1:817508008623:web:27445245a33b68f7708a5a",
    measurementId: "G-7BXG8X32EF"
};
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
