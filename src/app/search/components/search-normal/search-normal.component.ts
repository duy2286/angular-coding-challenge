import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import {filter, first, Subject, switchMap, takeUntil, tap} from 'rxjs';
import {ImageModel} from "../../../models/image";

@Component({
  selector: 'app-search-normal',
  templateUrl: './search-normal.component.html',
  styleUrls: ['./search-normal.component.scss'],
})
export class SearchNormalComponent implements OnInit {
  listImages: ImageModel[] = [];
  readonly PAGE_ITEMS = 50;
  PAGE_NUMBER = 0;
  searchKey = '';

  private destroy$ = new Subject<void>();
  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {
    this.giphyService
      .getCurrentSearchKey()
      .pipe(
        first(),
        filter((value) => !!value),
        tap((key) => {
          this.searchKey = key;
        }),
        switchMap((data) => {
          return this.giphyService.getGiphyImages(
            data,
            this.PAGE_ITEMS,
            this.PAGE_NUMBER
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((response) => {
        this.listImages = response.data;
      });
  }

  navigate(url: string) {
    window.open(url, "_blank");
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
