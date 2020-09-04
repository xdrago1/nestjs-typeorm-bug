import {Component, OnInit} from '@angular/core';
import {User} from '../../server/user/User';
import {Identity} from '../../server/models/Identity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';

  user = new User();

  ngOnInit(): void {
    this.user.identity = new Identity();
    this.user.identity.academicTitle = 'Herr';
    this.user.identity.firstName = 'Marvin';
    console.log(this.user);
  }

}
