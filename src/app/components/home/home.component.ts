import { Component, OnInit } from '@angular/core';
import { YoutubeAPIService } from 'src/app/services/youtube-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navbar:String;
  videos: any;
  search_string: String;
  mainVideo:any;
  title:string;
  id:string;
  description:string;
  

  constructor(private youtubeApi:YoutubeAPIService) { }

  ngOnInit() {
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.videos = this.youtubeApi.getVideosForString(this.search_string).subscribe(async res => {
        if (res) {
          this.videos = res;
          this.title = res["items"][0].snippet.title
          this.id = res["items"][0].id.videoId
          console.log(this.id)
          this.description = res["items"][0].snippet.description
        }
      }, error => {
        console.log(error);
      });
      
    }
  }

}
