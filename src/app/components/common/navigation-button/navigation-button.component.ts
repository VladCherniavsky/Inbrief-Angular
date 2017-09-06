import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent  {
  @Input() name: string;
  @Input() iconName?: string;
  @Input() link: string;

}
