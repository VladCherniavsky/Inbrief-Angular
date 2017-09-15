import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service/auth.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.IsLogged.subscribe((data) => {
      this.isLoading = data;
    });
  }
}
