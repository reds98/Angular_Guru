import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  nuevasCanciones : any[]=[]
  loading:boolean;

  constructor(private spotify: SpotifyService) {
    this.loading=true;
    // this.spotify.obtenerToken().subscribe(data=>{
    //   console.log(data)
    // })
    this.spotify.obtenerToken().subscribe(token=>{
      console.log(token)
      this.spotify.getNewReleases(token).subscribe(data=>{
        this.nuevasCanciones=data;
        this.loading=false
      })
    })

}

  ngOnInit(): void {
  }

}
