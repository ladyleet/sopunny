import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCTd790tpX9LD2m2ijOkSQxqeJofxdZHS0',
  authDomain: 'sopunny-cfb21.firebaseapp.com',
  databaseURL: 'https://sopunny-cfb21.firebaseio.com/',
  // storageBucket: 'gs://sopunny-cfb21.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
