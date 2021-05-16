import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBG7jdlytatWcflrS7ulSoJhUIRICpUdsY",
    authDomain: "firevuechat-6073e.firebaseapp.com",
    projectId: "firevuechat-6073e",
    storageBucket: "firevuechat-6073e.appspot.com",
    messagingSenderId: "842783224061",
    appId: "1:842783224061:web:9900d32229b5856d394e94"
}

const db = firebase.initializeApp(config)
export default db