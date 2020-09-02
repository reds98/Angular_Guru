import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  console.log("Spotify service listo")
}
getQuery(query:string){
  const url=`https://api.spotify.com/v1/${query}`;
  const headers= new HttpHeaders({
    "Authorization":"Bearer BQC-njSu-EGxrrQj23rR5e7pZTI471uvzRlQiP_H_MXmkLVrQz9UwGjCaFQ_MG85rIsb1GuUA55i74CfoFc"

  });
  return this.http.get(url,{headers});
}
  getNewReleases(){
    // const headers= new HttpHeaders({
    //   "Authorization":"Bearer BQC-njSu-EGxrrQj23rR5e7pZTI471uvzRlQiP_H_MXmkLVrQz9UwGjCaFQ_MG85rIsb1GuUA55i74CfoFc"
    //
    // })
   //  this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers})
   // .pipe(map(data=> data["albums"].items))
    return this.getQuery("browse/new-releases").pipe(map(data=> data["albums"].items))
  }
  getArtista(termino:string){
    // const headers= new HttpHeaders({
    //   "Authorization":"Bearer BQC-njSu-EGxrrQj23rR5e7pZTI471uvzRlQiP_H_MXmkLVrQz9UwGjCaFQ_MG85rIsb1GuUA55i74CfoFc"
    //
    // })
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino }&type=artist&limit=10`,{headers})
    // .pipe(map(data=> data["artists"].items));
    return this.getQuery(`search?q=${termino }&type=artist&limit=10`).pipe(map(data=> data["artists"].items))

  }
}
