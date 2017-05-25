import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`.hello { background-color: red }`],
})
export class AppComponent implements OnInit {
	ngOnInit () : void { }
  title = 'Tour of Heroes';

}

