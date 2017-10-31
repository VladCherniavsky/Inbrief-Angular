import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GlobalVariablesService} from '../../../services/global-variables.service/global-variables.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit,  OnChanges {
  @Input()
  numberOfItems: number;
  @Input()
  numberOfItemsPerPage: number;
  pages: Array<number>;

  constructor(private globalVariables: GlobalVariablesService) {
  }

  ngOnInit() {
    this._updatePagesArray();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._updatePagesArray();
  }

  private _updatePagesArray(): void {
    const numberOfPages = this._calculateNumberOfPages(this.numberOfItems, this.numberOfItemsPerPage);
    this._fillPagesArray(numberOfPages);
  }

  private _fillPagesArray(numberOfPages: number): void {
    this.pages = Array(numberOfPages).fill(null).map(( item, index) => index + 1);
  }
  private _calculateNumberOfPages(
    numberOfItems: number = 1,
    numberOfItemsPerPage = this.globalVariables.numberOfItemsPerPage
  ): number {
    return Math.ceil((numberOfItems / numberOfItemsPerPage));
  }

}
