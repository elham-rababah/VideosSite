import { NgModule } from '@angular/core';
import  {RouterModule, Routes} from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const appRoutes: Routes = [
	
	{
		path: 'videos',
		component: VideoListComponent,
	},
	{
		path: 'videos/:id',
		component: VideoDetailsComponent,
	},
	{
		path: '',
		component: VideoListComponent,
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