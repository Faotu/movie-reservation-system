import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBYEu-oitamd9FEgoYVF9CUmHKsdzwxmUQ',
  authDomain: 'movie-app-54a01.firebaseapp.com',
  projectId: 'movie-app-54a01',
  storageBucket: 'movie-app-54a01.appspot.com',
  messagingSenderId: '665006375040',
  appId: '1:665006375040:web:3a3f545ade7613479ee665',
}

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_APIKEY,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_appId,
// }

Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)



