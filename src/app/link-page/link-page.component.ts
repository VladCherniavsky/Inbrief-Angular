import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../services/auth.service/auth.service';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.scss']
})
export class LinkPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    console.log('this', this.route.snapshot.data);
    this.authService
      .IsLogged
      .subscribe((data) => {
        console.log('data link page', data);
      });


  }

}
