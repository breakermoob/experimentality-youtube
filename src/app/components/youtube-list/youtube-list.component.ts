import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['./youtube-list.component.scss']
})
export class YoutubeListComponent implements OnInit {

  @Input() list:String;

  constructor() { }

  ngOnInit() {
  }

}
