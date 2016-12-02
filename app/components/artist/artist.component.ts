import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from'../../models/Artist';
import { Album } from'../../models/Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})
export class ArtistComponent  {

	id:string;
	artist: Artist[];
	albums: Album[];

	constructor(
		private _spotifyService: SpotifyService,
		private _route: ActivatedRoute
		) {
		
	}

	ngOnInit() {
			this._route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this._spotifyService.getArtist(id)
					.subscribe(artist => {
						this.artist = artist;
						console.log(this.artist)
					})
				this._spotifyService.getAlbums(id)
					.subscribe(albums => {
						this.albums = albums.items
						console.log(this.albums)
					})				
				})
		}

}