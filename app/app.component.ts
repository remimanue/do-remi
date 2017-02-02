import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SailsService } from 'angular2-sails';

@Component({
	selector: 'my-app',
	template: `
	<h1>Hello {{name}}</h1>
	<ul>
		<li *ngFor="let user of users">
			{{user.firstname}} {{user.lastname}}: {{user.email}}
		</li>
	</ul>
	`,
})

export class AppComponent implements OnInit {
	name = 'Angular';
	// declare the variable for the template
	public users: any[];

	constructor(private _sailsService: SailsService) { }

	ngOnInit() {
		this._sailsService.connect('http://0.0.0.0:1337');
   //  // or
   //  let opts = {
   //      url: "http://localhost:1337",
   //      transports: ['polling', 'websocket'],
   //      headers: {...},
   //      ...
   //  }
   //  this._sailsService.connect(opts);
		this._sailsService.get('/user').subscribe(
			(resData: Observable<any[]>) => { this.users = resData['data']; },
			(error: Observable<any[]>) => { console.log('oooops, error occured'); },
			() => { console.log('we are finished'); }
		);
	}
}
