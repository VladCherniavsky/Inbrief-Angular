import {Component, OnInit} from '@angular/core';
import {LinkService} from './services/link.service/link.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LinkService]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _linkService: LinkService) {

  }

  ngOnInit() {
    this._linkService.get().subscribe(res => console.log('res', res));
  }
}
