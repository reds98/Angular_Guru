import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  console.log("Spotify service listo")
}
  getNewReleases(){

    const headers= new HttpHeaders({
      "Authorization":"Bearer BQB_2vQNnd9Cm2zguu6njOiTuVWKdL4Df3WkpwcxXf0h9WuHWdH6R7-Qn4A5Ziw0fSBjUYJvgkFrXO4JjbM"

    })
    return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers});

  }
  getArtista(termino:string){
    const headers= new HttpHeaders({
      "Authorization":"Bearer BQB_2vQNnd9Cm2zguu6njOiTuVWKdL4Df3WkpwcxXf0h9WuHWdH6R7-Qn4A5Ziw0fSBjUYJvgkFrXO4JjbM"

    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino }&type=artist&limit=10`,{headers});

  }
}
