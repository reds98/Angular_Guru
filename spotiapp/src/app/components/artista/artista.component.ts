import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  artista:any={};
  loading:boolean;
  topTracks:any[]=[];

  constructor(private router:ActivatedRoute,private spotify:SpotifyService) {
  this.router.params.subscribe(params=>{
    this.getArtista(params["id"]);
    this.getTopTracks(params["id"]);
  })}

  ngOnInit(): void {
  }
  getArtista(id:string){
    this.loading=true;
    this.spotify.obtenerToken().subscribe(token=>{
      console.log(token)
      this.spotify.getArtista(id,token)
      .subscribe(artista=>{
        console.log(artista)
        this.artista=artista;
        this.loading=false;
      })
    });


  }
  getTopTracks(id:string){
    this.spotify.obtenerToken().subscribe(token=>{
      this.spotify.getTopTracks(id,token).subscribe(topTracks=>{
        console.log(topTracks)
        this.topTracks=topTracks;
      })

    })


  }

}
