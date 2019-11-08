import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import{debounceTime, debounce}from 'rxjs/operators'
import{Router}from'@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public searchFilter:Array<string>=['track','artist']

  public searchResults:any=[];

  constructor(private _spotifiService:SpotifyService, private router:Router) { }

  ngOnInit() {

  }
  public search(type, termino){
    
    if(type=='null'|| termino==""|| termino=="") return

    this._spotifiService.seachData(type, termino).pipe(debounceTime(2000)
      
  ).subscribe((data:any)=>{
    
    if(data.tracks){
      this.searchResults=data.tracks.items
    }else{
      this.searchResults=data.artists.items
    }
    console.log(this.searchResults);

  })

}
public GotoArtist(artistId){
  this.router.navigate(['Artists',artistId])
  // console.log(artistId);
}
}
