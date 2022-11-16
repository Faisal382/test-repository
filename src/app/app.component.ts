import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-project-angular';
  public name : string = 'faisal anwar';
   displayVal:string='';
   count:number=0;
   name1:string='faisal';
   disabled= false;
   show = "yes";
   color = "green";
   color1 = "blue";
   color2 = "yellow";
   bgColor = "blue";
  getvalue(val:string){
    this.displayVal=val;
  }
  countor(type:string){
    type==='add'? this.count++: this.count--;

  }
  updatecolor(){
    this.color2 = "red";
    this.bgColor = "yellow";
  }
 
}
