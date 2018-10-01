import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.scss']
})
export class Assignment5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    setupSpiro();
  }

}
declare function setupSpiro(): void;
