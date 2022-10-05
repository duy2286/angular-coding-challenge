import { Component } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { first } from 'rxjs';

export enum StepEnum {
  Trending = 'trending',
  Searching = 'searching',
}

@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.scss'],
})
export class SearchLayoutComponent {
  stepEnum = StepEnum;
  currentStep = '';
  constructor(private giphyService: GiphyService) {
    this.giphyService
      .getCurrentStep()
      .pipe(first())
      .subscribe((data) => {
        this.currentStep = data;
      });
  }

  changePage(value: string) {
    this.currentStep = value;
  }
}
