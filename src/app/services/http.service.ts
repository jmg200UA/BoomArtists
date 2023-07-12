import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }
}

export class LastFmService {
  private apiKey = '6fab90f103c1894796a08a6e909cb884';

  constructor(private http: HttpClient) { }

  getArtistTracks(artistName: string): Promise<any>{
    const url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=${this.apiKey}&limit=5&format=json';

    return this.http.get(url).toPromise();	
  }
}
