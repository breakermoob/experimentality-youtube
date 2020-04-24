import { Component, OnInit, Input } from '@angular/core';
import { YoutubeAPIService } from 'src/app/services/youtube-api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navbar:String;
  videos: any;
  search_string: String;

  constructor(private youtubeApi:YoutubeAPIService) { }

  ngOnInit() {
    
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.videos = this.youtubeApi.getVideosForString(this.search_string).subscribe(async res => {
        if (res) {
          this.youtubeApi.youtube_list = res;
        }
      }, error => {
        console.log(error);
      });
      
    }
  }

}
