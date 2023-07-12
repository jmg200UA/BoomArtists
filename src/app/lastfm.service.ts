import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LastfmService {
  private apiKey = '529206685aceb5b955ce4e6cedcf879e';

  constructor() { }

  getTopTracks(artist: string){
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${this.apiKey}&format=json`;
    return axios.get(url)
      .then(response => {
        const tracks = response.data.toptracks.track.slice(0, 5);
        console.log(response.data);
        return tracks;
      })
      .catch(error => console.error(error));
  }
}
