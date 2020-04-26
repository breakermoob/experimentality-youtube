import { Component, OnInit } from '@angular/core';
import { YoutubeAPIService } from 'src/app/services/youtube-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navbar: String;

  search_string: String;
  videos:String[] = [];
  mainVideo = {
    title: "",
    description: "",
    channelTitle:""
  };
  mainId:String;


  constructor(private youtubeApi: YoutubeAPIService) { }

  ngOnInit() {
    this.searchByString('ac dc');
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.searchByString(this.search_string);
    }
  }
  onSearch() {
    this.searchByString(this.search_string);
  }

  searchByString(query){
    this.videos = [];
    this.youtubeApi.getVideosForString(query).subscribe(async res => {
      if (res) {
        this.mainVideo.title = res["items"][0].snippet.title
        this.mainVideo.channelTitle = res["items"][0].snippet.channelTitle
        this.mainVideo.description = res["items"][0].snippet.description
        this.mainId = res["items"][0].id.videoId

        for (let i = 0; i < res["items"].length; i++) {
          this.videos.push(res["items"][i])
        }
      }
    }, error => {
      console.log(error);
    });
  }

}
