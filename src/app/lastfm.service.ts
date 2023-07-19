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

  //Api Deezer
  // getTrack(track: string){
  //   console.log("Track que llega: ", track);
  //   const url = `https://api.deezer.com/search?q=${track}`;
  //   return axios.get(url)
  //     .then(response => {
  //       const track = response.data;
  //       console.log(response.data);
  //       return track;
  //     })
  //     .catch(error => console.error(error));
  // }

  //key YT
  private keyyt= 'AIzaSyDSDarcmKjKbcG4aXu1cNMl4wsj6niWVro';

  getYT(parametro: string){
    console.log("Parámetro que llega: ", parametro);
    // parametro = artista + cancion
    const url = `https://youtube.googleapis.com/youtube/v3/search?q=${parametro}&key=${this.keyyt}&part=snippet`;
    return axios.get(url)
      .then(response => {
        const ytcontent = response.data;
        console.log(response.data);
        return ytcontent;
      })
      .catch(error => console.error(error));
  }


}
