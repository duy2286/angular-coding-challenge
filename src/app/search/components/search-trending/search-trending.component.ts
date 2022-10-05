import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ImageModel } from '../../../models/image';
import { GiphyService } from '../../services/giphy.service';
import { delay, finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-trending',
  templateUrl: './search-trending.component.html',
  styleUrls: ['./search-trending.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTrendingComponent implements OnInit, OnDestroy {
  listImageTrending: ImageModel[] = [];
  private destroy$ = new Subject<void>();
  constructor(
    private giphyService: GiphyService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.giphyService
      .getGiphyTrending()
      .pipe(
        finalize(() => {
          this.cd.markForCheck();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        this.listImageTrending = data.data;
      });
  }

  navigate(url: string) {
    window.open(url, '_blank');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
