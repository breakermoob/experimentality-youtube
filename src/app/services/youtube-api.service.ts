import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAPIService {

  apiKey: string = 'AIzaSyCUkmklbMk8v5uCrnOzIx4TFe8i6t39hSA';
  apiUrl: string = 'https://www.googleapis.com/youtube/v3/search'
  youtube_list:any;

  constructor(public http: HttpClient) { }

  getVideosForString(query): Observable<Object> { 
    let url = `${this.apiUrl}?key=${this.apiKey}&q=${query}&part=snippet&maxResults=6&origin${window.location.origin}&type=video`
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
