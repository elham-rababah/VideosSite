import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'app-video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit{
	title ="video-list works!";
	private req: any;
	private videoList: [any];

	constructor(private http: Http) { }

	ngOnInit() {
		this.req = this.http.get('assets/json/video.json')
		.subscribe(data => {
			this .videoList = data.json();
		});
	}

	generateEmbedUrl (id :string){
		return 'https://www.youtube.com/embed/' + id;
	}

	ngOnDestroy(){
		this.req.unsubscribe();
	}

}
