import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIRE_API,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
