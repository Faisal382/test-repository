import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {

  constructor() { }
  UserData:any={};

  ngOnInit(): void {
  }
  getdata(data:NgForm){
    this.UserData = data;
  }

}
