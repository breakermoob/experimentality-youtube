import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAPIService {

  apiKey: string = 'AIzaSyCYvu1uYNFgjLM0Fj3UAShXBa01ZzcvQt0';
  apiUrl: string = 'https://www.googleapis.com/youtube/v3/search'
  youtube_list:any;

  constructor(public http: HttpClient) { }

  getVideosForString(query): Observable<Object> { 
    let url = `${this.apiUrl}?key=${this.apiKey}&q=${query}&part=snippet&maxResults=6&origin${window.location.origin}`
    return this.http.get(url)
      .pipe(map((res) => {
        console.log("Holi")
        return res;
      }))
  }
}
