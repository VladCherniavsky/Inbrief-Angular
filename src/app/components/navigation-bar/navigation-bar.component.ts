import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service/auth.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  providers: [AuthService]
})

export class NavigationBarComponent implements OnInit {
  public isOn: boolean = false;

  constructor(private authService: AuthService) { }

  clickEventHandler($event) {
    $event.stopPropagation();
    this.authService.changeAuth(!this.authService.getIsLogged());
  }

  ngOnInit() {
  }

}
