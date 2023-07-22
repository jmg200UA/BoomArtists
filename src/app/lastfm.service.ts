import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpHeaders } from '@angular/common/http';

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
  getTrack(track: string){
    console.log("Track que llega Deezer: ", track);
    const url = `https://api.deezer.com/search?q=${track}`;
    return axios.get(url)
      .then(response => {
        const track = response.data;
        console.log(response.data);
        return track;
      })
      .catch(error => console.error(error));
  }


  //key YT
  private keyyt= 'AIzaSyDIi8edHebnn313kfGiPoPUBCK1Us9Jz5k';

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

  private apiKeyDZ = '5a2cfbe4ac9460853ce82b03d215f7b7';

  /* Metodo que busca la cancion en deezer
  buscaCancion(nombreCancion: string){
    const url = `http://localhost:3000/deezer-api/search?q=track:"${nombreCancion}"`;

    const headers = {
      'Authorization': `Bearer ${this.apiKeyDZ}`
    };

    return axios.get(url, { headers })
      .then(response => {
        const canciones = response.data;

        console.log('AQUI ENTRO!!', canciones);

        if(canciones.length > 0 ){
          const cancionSeleccionada = canciones[0];

          return cancionSeleccionada.preview;
        }else{
          return null
        }
      })
      .catch(error => console.error(error));
  }*/

}
