import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {}

  private headers:HttpHeaders = new HttpHeaders({
    'Authorization':'Bearer BQCt9JCysMVT3UxO_dPsXS6YSpaX_vLCwhgxlKxE_zaot3Kft3m5_1cuNeVm6rx60yyl3XC3ncZ6Z6D7OKI'
  })

  private URL:string='https://api.spotify.com/v1'

  public GetNewRelases(){
    return this.http.get(`${this.URL}/browse/new-releases?country=MX&limit=10`,{headers:this.headers});
  }

  public seachData(type, termino){
    
    
    termino=encodeURI(termino)
    
    let urlSend:string=`${this.URL}/search?q=${termino}&type=${type}&market=MX&limit=9`
    
    console.log(urlSend);    
    return this.http.get(urlSend,{headers:this.headers})
  }

  public getTopTrackArtist(idArtists){
    let urlSend=`${this.URL}/artists/${idArtists}/top-tracks?country=US`;

    return this.http.get(urlSend,{headers:this.headers})
  }

  public getArtist(idArtists){
    let urlSend=`${this.URL}/artists/${idArtists}`;

    return this.http.get(urlSend,{headers:this.headers})
  }

}
