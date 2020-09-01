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
      "Authorization":"Bearer BQC3LK4bUP7SO12tjqRR6cwHGcrF9ZfprlBjw70IutMp6PzKcKK79zAWPIRU_bvB4GDPOjb_ohAvx8HerMc"

    })
    return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers});

  }
}
