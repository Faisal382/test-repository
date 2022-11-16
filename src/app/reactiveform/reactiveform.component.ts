import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName , FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
   login = new FormGroup({
    username : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('')
  })
  constructor() {}

  ngOnInit(): void {
  }
  getlogin()
  {
    console.warn(this.login.value);
  }
  get usercheck(){

     return this.login.get('username');
  }


}
