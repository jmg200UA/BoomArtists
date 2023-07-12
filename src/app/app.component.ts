import { Component } from '@angular/core';
import { LastFmService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  artistTracks: any[] = [];

  constructor(private lastFmService: LastFmService) {}

  ngOnInit(){
    this.getArtistTracks();
  }

  async getArtistTracks(){
    try{
      const artistName = '';
      const response = await this.lastFmService.getArtistTracks(artistName);
      this.artistTracks = response.toptracks.track;
    }catch (error){
      console.error('Error al obtener las canciones del kismiz', error);
    }
  }
}
