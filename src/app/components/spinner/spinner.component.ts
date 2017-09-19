import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service/auth.service';
import {RequestCounterService} from '../../services/request-counter.service/request-counter.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  isLoading: boolean = true;

  constructor(private authService: AuthService, private requestCounterService: RequestCounterService) { }

  ngOnInit() {
    this.authService.IsLogged.subscribe((data) => {
      this.isLoading = data;
    });
    this.requestCounterService.RequestCount.subscribe((data) => {
      this.isLoading = data > 0;
    });
  }
}
