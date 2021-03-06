import {LinkModel} from './link.model';

export class LinksResponseModel {
  count: number;
  links: LinkModel[];

  constructor(count: number, links: any []) {
    this.count = count;
    this.links = links.map(item => new LinkModel(item));
  }
}
