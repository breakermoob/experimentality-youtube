import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAPIService {

  apiKey : string = 'AIzaSyC17Ko8fO4w_Jz2MOq9hrCV-Kejqs8h5fA';
  youtube_list:any;

  constructor(public http: HttpClient) { }

  getVideosForString(query): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=' + query + '&part=snippet&maxResults=6'
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
