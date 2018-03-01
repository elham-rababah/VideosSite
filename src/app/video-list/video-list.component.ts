import { Component, OnInit } from '@angular/core';

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
			id: "item1-id"
		},
		{
			name: "item2",
			id: "item2-id"
		},
		{
			name: "item3",
			id: "item3-id"
		},
		{
			name: "item4",
			id: "item4-id"
		},
	]
	constructor() { }

	ngOnInit() {
	}

}
