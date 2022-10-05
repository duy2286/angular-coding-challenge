import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from '../../../models/image';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  @Input() listImages: ImageModel[] = [];
  constructor() {}

  ngOnInit(): void {}

  navigate(url: string) {
    window.open(url, '_blank');
  }
}
