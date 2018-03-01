import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
	private videoId: string;
	private subscriber: any;
	constructor(private route: ActivatedRoute) { }

	ngOnInit() {

		this.subscriber = this.route.params.subscribe(params =>{
			console.log(params)
			this.videoId = params.id
		})
	}

	ngOnDestroy(){
		this.subscriber.unsubscribe();
	}

}
