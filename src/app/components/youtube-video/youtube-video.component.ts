import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent implements OnInit {

  @Input() video:String;

  constructor() { }

  ngOnInit() {
  }

}
