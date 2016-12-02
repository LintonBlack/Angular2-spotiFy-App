import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService{
	private searchTerm:string;
	private artistUrl:string;
	private albumsUrl:string;
	private albumUrl:string;


	constructor(private _Http: Http) {
		console.log('Spotify Service Ready...');		
	}

	searchMusic(searchTerm:string, type='artist') {		
		this.searchUrl = 'https://api.spotify.com/v1/search?query='+searchTerm+'&offset=0&limit=20&type='+type+'&market=US';
		return this._Http.get(this.searchUrl)
		.map(res => res.json());
	}

	getArtist(id:string) {
		this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
		return this._Http.get(this.artistUrl)
		.map(res => res.json());
	}

	getAlbums(artistId:string) {
		this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
		return this._Http.get(this.albumsUrl)
		.map(res => res.json());
	}

	getAlbum(albumId:string) {
		this.albumUrl = 'https://api.spotify.com/v1/albums/'+albumId;
		return this._Http.get(this.albumUrl)
		.map(res => res.json());
	}

	
}