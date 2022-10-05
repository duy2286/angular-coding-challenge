import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../../../models/image';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-search-trending',
  templateUrl: './search-trending.component.html',
  styleUrls: ['./search-trending.component.scss'],
})
export class SearchTrendingComponent implements OnInit {
  listImageTrending: ImageModel[] = [];

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {
    this.giphyService
      .getGiphyTrending()
      .pipe()
      .subscribe((data) => {
        this.listImageTrending = data.data;
      });
  }

  navigate(url: string) {
    window.open(url, '_blank');
  }

  ngOnDestroy(): void {}
}
