import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from'../../models/Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent  {
	searchTerm: string;
	searchRes: Artist[];

	constructor(private _spotifyservice:SpotifyService) {
		this.artists = false;
	}

	searchSong() {
		this._spotifyservice.searchMusic(this.searchTerm).subscribe(res => {
			this.searchRes = res.artists.items
		}


}