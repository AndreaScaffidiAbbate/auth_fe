import { Component } from '@angular/core';
import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;

const firebaseConfig = {
  apiKey: "AIzaSyDeg5zBW-6o0DYwQyxxMF112-vIswGtAY0",
  authDomain: "auth-fe-1a672.firebaseapp.com",
  projectId: "auth-fe-1a672",
  storageBucket: "auth-fe-1a672.appspot.com",
  messagingSenderId: "338342189870",
  appId: "1:338342189870:web:b96e7070f31574d01538bf",
  measurementId: "G-PNLQXY9HD8"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Auth_2022_3';

  constructor() {
    // Initialize Firebase
    initializeApp(firebaseConfig);
  }
}
