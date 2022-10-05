import { ImageModel } from './../../models/image';
import { SearchResponseModel } from './../../models/search-response';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {StepEnum} from "../components/search-layout/search-layout.component";

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  public recentSearch = new Subject<string>();
  public imageSearchResults = new Subject<void>();
  public scrollDownSearch = new Subject<void>();
  public listrecentSearch: string[] = [];
  public listImages: ImageModel[] = [];

  private currentStep$ = new BehaviorSubject<string>(StepEnum.Trending);
  private currentSearchKey$ = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}

  getGiphyImages(
    query: string,
    limit: number,
    offset: number
  ): Observable<SearchResponseModel> {
    return this.http.get<SearchResponseModel>(
      `${environment.baseurl}?api_key=${environment.apikey}&q=${query}&limit=${limit}&offset=${offset}`
    );
  }

  getGiphyTrending(): Observable<SearchResponseModel> {
    return this.http.get<SearchResponseModel>(
      `${environment.baseUrlTrending}?api_key=${environment.apikey}&pingback_id=${environment.pingback_id}`
    );
  }


  getCurrentStep(): Observable<string> {
    return this.currentStep$.asObservable();
  }

  setCurrentStep(value: string) {
    this.currentStep$.next(value);
  }

  getCurrentSearchKey(): Observable<string> {
    return this.currentSearchKey$.asObservable();
  }

  setCurrentSearchKey(value: string) {
    this.currentSearchKey$.next(value);
  }


}
