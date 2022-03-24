import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

import { getDatabase, ref, onValue, set, Database } from 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crofee-fe';
  database: Database;

  constructor() {
    this.initFirebase();
    this.database = getDatabase();
  }

  initFirebase(): any {
    initializeApp(environment.firebaseConfig);
  }

  writeUserData(userId, name, email, imageUrl): any {
    set(ref(this.database, 'notify/' + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });

    console.log('write success');
  }

  readUserData(): any {
    const starCountRef = ref(this.database, 'notify/');
    console.log('starCountRef', starCountRef);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log('🚀 data', data);
    });
  }
}
