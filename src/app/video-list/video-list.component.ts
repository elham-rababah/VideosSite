import { Component, OnInit } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser'

@Component({
	selector: 'app-video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
	title ="video-list works!"
	//videoList = ['item1','item2','item3'];
	videoList = [
		{
			name: "item1",
			id: "LuwP0RBnPrY"
		},
		{
			name: "item2",
			id: "tnjcofZfBMs"
		},
		{
			name: "item3",
			id: "FDX44Uavneo"
		},
		{
			name: "item4",
			id: "aUjQv8QCQaM"
		},
	]
	constructor(private domSanitizer: DomSanitizer) { }

	ngOnInit() {
	}

	generateEmbedUrl (id :string){
		return this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
	}

}
