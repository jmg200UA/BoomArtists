import { Component, OnInit } from '@angular/core';
import { LastfmService } from 'src/app/lastfm.service';

@Component({
  selector: 'app-dia1',
  templateUrl: './dia1.page.html',
  styleUrls: ['./dia1.page.scss'],
})
export class Dia1Page implements OnInit {
  topTracks: any[] = [];
  showTrackList: boolean = false;

  constructor(private lastfmService: LastfmService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    const artist = 'Duki';
    this.lastfmService.getTopTracks(artist)
      .then(tracks => this.topTracks = tracks)
      .catch(error => console.error(error));
  }

  toggleTrackList() {
    this.showTrackList = !this.showTrackList;
  }

}
