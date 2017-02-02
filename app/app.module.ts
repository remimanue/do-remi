import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// import { SailsModule } from 'angular2-sails';

@NgModule({
	// imports:      [ BrowserModule, SailsModule.forRoot() ],
	imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
	// constructor(private _sailsService:SailsService) { }
	//
	// ngOnInit() {
	// 	this._sailsService.connect("http://localhost:1337");
   // //  // or
   // //  let opts = {
   // //      url: "http://localhost:1337",
   // //      transports: ['polling', 'websocket'],
   // //      headers: {...},
   // //      ...
   // //  }
   // //  this._sailsService.connect(opts);
	// }
}
