import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
   _data = new BehaviorSubject<any>(null);

  @Input()
  set data(data) {
    this._data.next(data);
  }

  @Input()
  pagination: Boolean = false;

  @Input()
  columns: string[] = [];

  constructor() {
    console.log('this constructor', this);

  }

  ngOnInit() {
    console.log('this ngOnInit', this);
  }

}
