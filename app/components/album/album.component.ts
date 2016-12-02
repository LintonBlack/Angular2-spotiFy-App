import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from'../../models/Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})
export class AlbumComponent  {

	id:string;
	album: Album[];

	constructor(
		private _spotifyService: SpotifyService,
		private _route: ActivatedRoute
		) {
		
	}

	ngOnInit() {
			this._route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this._spotifyService.getAlbum(id)
				.subscribe(album => {
					this.album = album
				})			
				})
		}

}