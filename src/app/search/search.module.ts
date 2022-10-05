import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchTrendingComponent } from './components/search-trending/search-trending.component';
import { SearchNormalComponent } from './components/search-normal/search-normal.component';
import { SearchLayoutComponent } from './components/search-layout/search-layout.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchLoadingComponent } from './components/search-loading/search-loading.component';

@NgModule({
  declarations: [
    SearchTrendingComponent,
    SearchNormalComponent,
    SearchLayoutComponent,
    SearchInputComponent,
    SearchResultComponent,
    SearchLoadingComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    ModalModule.forRoot()
  ],
})
export class SearchModule {}
