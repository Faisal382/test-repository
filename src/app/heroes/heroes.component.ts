import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  public id:number = 1;
  public name:string ='Windstorm';
  data = "interpolution";
  getvalue(){
    return "get function through";
  }


   
  constructor() { }

  ngOnInit(): void {
  }

}
