import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, distinctUntilChanged, filter, interval, tap } from 'rxjs';
import { GiphyService } from '../../services/giphy.service';
import { StepEnum } from '../search-layout/search-layout.component';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  searchControl = new FormControl('');
  @Output() changePage = new EventEmitter<string>();
  constructor(private giphyService: GiphyService) {
    this.searchControl.valueChanges
      .pipe(
        filter((input) => input),
        debounce(() => interval(1200)),
        distinctUntilChanged(),
      )
      .subscribe((input: string) => {
        this.giphyService.setCurrentSearchKey(input);
        this.changePage.emit(StepEnum.Searching);
      });
  }

  ngOnInit(): void {}
}
