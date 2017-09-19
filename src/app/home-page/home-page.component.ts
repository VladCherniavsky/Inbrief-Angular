import { Component, OnInit, HostBinding } from '@angular/core';
import {AuthService} from '../services/auth.service/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService
      .IsLogged
      .subscribe((data) => {
        console.log('data link page', data);
      });
  }

}
