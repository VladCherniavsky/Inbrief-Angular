import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.scss']
})
export class LinkPageComponent implements OnInit {
  linkResponse: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.linkResponse.next(this.route.snapshot.data.links);
  }

}
