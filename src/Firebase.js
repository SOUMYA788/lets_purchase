import { getApp, initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { ENV_CONFIG } from "./envConfig";
import { getAuth } from "firebase/auth";


// web app's Firebase configuration
const firebaseConfig = {
  apiKey: ENV_CONFIG.APP_API_KEY,
  authDomain: ENV_CONFIG.AUTH_DOMAIN,
  databaseURL: ENV_CONFIG.DATABASE_URL,
  projectId: ENV_CONFIG.PROJECT_ID,
  storageBucket: ENV_CONFIG.STORAGE_BUCKET,
  messagingSenderId: ENV_CONFIG.MESSAGING_SENDER_ID,
  appId: ENV_CONFIG.APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service require to use firebase functions
export const auth = getAuth(app);


getStorage(app, `gs://files/`);