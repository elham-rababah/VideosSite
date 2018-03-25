import { NgModule } from '@angular/core';
import  {RouterModule, Routes} from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { HomeComponent } from './home/home.component';

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
		component: HomeComponent,
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