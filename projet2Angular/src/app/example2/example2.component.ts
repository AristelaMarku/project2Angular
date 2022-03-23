import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  showSecret = false;
  log: number[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetail(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1)
  }

}
