import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  puns: FirebaseObjectObservable;

  constructor(af: AngularFire) {
    this.puns = af.database.object('https://sopunny-cfb21.firebaseio.com/puns')
      .map(x => x.p0.text)
  }
}
