import { NgModule } from '@angular/core';
import  {RouterModule, Routes} from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const appRoutes: Routes = [
	{
		path: '',
		component: VideoListComponent,
	},
	{
		path: 'videos',
		component: VideoListComponent,
	},
	{
		path: 'videos:id',
		component: VideoDetailsComponent,
	}

]

@NgModule({
	declarations: [
 	],
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]

})

export class AppRouteingModule { };