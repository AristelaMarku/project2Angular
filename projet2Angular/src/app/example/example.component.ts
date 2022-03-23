import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  username=""

  constructor() {

  }

  ngOnInit(): void {
  }
  onClickButton(){
    this.username = ""
  }
}
