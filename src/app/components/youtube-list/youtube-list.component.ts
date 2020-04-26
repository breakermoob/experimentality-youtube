import { Component, OnInit, Input } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['./youtube-list.component.scss']
})
export class YoutubeListComponent implements OnInit {

  @Input() videos: String[];
  @Input() mainVideo = {
    title: "",
    description: "",
    channelTitle: ""
  };
  @Input() mainId: String;

  constructor() { }

  ngOnInit() {
    try {
      this.mainVideo.title = this.videos[0]['snippet']['title']
      this.mainVideo.channelTitle = this.videos[0]['snippet']['title']
      this.mainVideo.description = this.videos[0]['snippet']['title']
      this.mainId = this.videos[0]['videoId']['id']
    } catch (e) {//...
    }
  }

  setMainVideo(card) {
    this.mainVideo.title = card.snippet.title
    this.mainVideo.channelTitle =  card.snippet.channelTitle
    this.mainVideo.description = card.snippet.description
    this.mainId = card.id.videoId
  }

}
