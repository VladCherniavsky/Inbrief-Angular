import {Component, OnInit} from '@angular/core';
import {LinkService} from './services/link.service/link.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {

  }

  ngOnInit() {
  }
}
