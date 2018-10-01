import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.scss']
})
export class Assignment4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    setupCalculator();
  }

}
declare function setupCalculator(): void;
