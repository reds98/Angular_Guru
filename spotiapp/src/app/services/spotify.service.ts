import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token:string;

  constructor(private http: HttpClient) {
  console.log("Spotify service listo")
}
getQuery(query:string,token:string){
  const url=`https://api.spotify.com/v1/${query}`;

  const headers= new HttpHeaders({
    "Authorization":`${token}`

  });
  return this.http.get(url,{headers});
}
  getNewReleases(token:string){
    // const headers= new HttpHeaders({
    //   "Authorization":"Bearer BQC-njSu-EGxrrQj23rR5e7pZTI471uvzRlQiP_H_MXmkLVrQz9UwGjCaFQ_MG85rIsb1GuUA55i74CfoFc"
    //
    // })
   //  this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers})
   // .pipe(map(data=> data["albums"].items))
    return this.getQuery("browse/new-releases",token).pipe(map(data=> data["albums"].items))
  }
  getArtistas(termino:string,token){
    // const headers= new HttpHeaders({
    //   "Authorization":"Bearer BQC-njSu-EGxrrQj23rR5e7pZTI471uvzRlQiP_H_MXmkLVrQz9UwGjCaFQ_MG85rIsb1GuUA55i74CfoFc"
    //
    // })
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino }&type=artist&limit=10`,{headers})
    // .pipe(map(data=> data["artists"].items));
    return this.getQuery(`search?q=${termino }&type=artist&limit=10`,token).pipe(map(data=> data["artists"].items))

  }
  // https://api.spotify.com/v1/artists/{id}
  getArtista(id:string,token:string){
    // const headers= new HttpHeaders({
    //   "Authorization":"Bearer BQC-njSu-EGxrrQj23rR5e7pZTI471uvzRlQiP_H_MXmkLVrQz9UwGjCaFQ_MG85rIsb1GuUA55i74CfoFc"
    //
    // })
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino }&type=artist&limit=10`,{headers})
    // .pipe(map(data=> data["artists"].items));
    return this.getQuery(`artists/${id}`,token);

  }
  getTopTracks(id:string,token:string){
    // const headers= new HttpHeaders({
    //   "Authorization":"Bearer BQC-njSu-EGxrrQj23rR5e7pZTI471uvzRlQiP_H_MXmkLVrQz9UwGjCaFQ_MG85rIsb1GuUA55i74CfoFc"
    //
    // })
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino }&type=artist&limit=10`,{headers})
    // .pipe(map(data=> data["artists"].items));
    return this.getQuery(`artists/${id}/top-tracks?country=us`,token).pipe(map(data=> data["tracks"]));

  }
  obtenerToken(){
    const headers=new HttpHeaders({
      "Content-Type":"application/x-www-form-urlencoded"
    });
    let parametrosBody=new HttpParams()
    .set("grant_type","client_credentials")
    .set("client_id","ff2980ba482e44a8aebc2ce48fcfd945")
    .set("client_secret","13ed9ae35cec4fa3802ea0a0fcfc58dc");
    return this.http.post("https://accounts.spotify.com/api/token",parametrosBody.toString(),{headers}).pipe(map((resp:any)=>{
      return `Bearer ${resp.access_token}`
    }));

  }
}
