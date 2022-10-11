import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, UserCredential, AuthError } from "firebase/auth";
import { FirebaseError, initializeApp } from "firebase/app";
import { catchError, concatMap, debounceTime, from, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionFirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyAR4d-4ylKLjY_GlW3kuOJ8l-7l399f89M",
    authDomain: "tienda-55641.firebaseapp.com",
    projectId: "tienda-55641",
    storageBucket: "tienda-55641.appspot.com",
    messagingSenderId: "504148919647",
    appId: "1:504148919647:web:3873933ad4bf597972e2ea",
    measurementId: "G-YXZ2MB6JLR"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  auth = getAuth(this.app);

  constructor() { }

  crearUsuario(infoEmail: string, infocontraseña: string): Observable<UserCredential> {

    return from(createUserWithEmailAndPassword(this.auth, infoEmail, infocontraseña))
      .pipe(
        catchError((error: FirebaseError) => {
          let message = '';
          if (error.code === "auth/email-already-in-use") {
            message = 'El correo ya existe';
          }
          throw message;
        })
      );
    // .then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    //   console.log(user)
    // })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  }


}
