import { Component } from '@angular/core';
import { DataService } from './data.service';
import { OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
  `,
  styles: [`
  p {
    width:200px;
    background:lightgray;
    margin: 100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
  `],
 animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})
export class AppComponent implements OnInit{
 // title = 'false';
  buttonStatus = false;
  someProperty:any;
  myEvent(event) {
    console.log(event);
  }
  constructor(private _dataService:DataService) {}

 ngOnInit() {

    console.log(this._dataService.cars);

    this.someProperty = this._dataService.method();
    console.log(this.someProperty);
  }
  state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
