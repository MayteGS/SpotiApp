import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styles: []
})
export class ArtistsComponent implements OnInit {

  public idArtist:string="";
  public Artist:any;
  public topTracks:any;

  constructor(private _spotifyService:SpotifyService, private activatedRoute:ActivatedRoute) {
    this.idArtist= this.activatedRoute.snapshot.paramMap.get('id');

    this._spotifyService.getTopTrackArtist(this.idArtist).subscribe((data:any)=>{
      this.topTracks=data.tracks;
      this._spotifyService.getArtist(this.idArtist).subscribe(data=>{
        this.Artist=data;
        console.log(this.Artist);
        

      })
    })
   }

  ngOnInit() {
  }

}
