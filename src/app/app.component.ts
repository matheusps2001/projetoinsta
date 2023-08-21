import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void{
    const firebaseConfig = {
      apiKey: "AIzaSyDsF4OkOTvLB1Fj26tSyY0Xo1bjW7BbQgA",
      authDomain: "theusma-6879a.firebaseapp.com",
      projectId: "theusma-6879a",
      storageBucket: "theusma-6879a.appspot.com",
      messagingSenderId: "148480960582",
      appId: "1:148480960582:web:5644256e5accd707bfc247"
    };

    firebase.initializeApp(firebaseConfig);

  }
}
