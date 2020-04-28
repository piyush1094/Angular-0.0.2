import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor() { }
 
  form = new FormGroup({
    name : new FormControl('', [Validators.required]),
    username : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")]),
    address : new FormControl('', [Validators.required]),
    state : new FormControl('', [Validators.required]),
    country : new FormControl('', [Validators.required]),
    contact : new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(10), Validators.minLength(10)])
  });


  ngOnInit() {
    
  

   }
}
