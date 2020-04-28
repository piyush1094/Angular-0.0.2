import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit{

  constructor( private bookingService : BookingService,
    private router : Router 
    ) { }

    form = new FormGroup({
        name : new FormControl('', [Validators.required]),
        address : new FormControl('', [Validators.required]),
        state : new FormControl('', [Validators.required]),
        country : new FormControl('', [Validators.required]),
        contact : new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(10), Validators.minLength(10)])
      }); 
      ngOnInit(){
      }
      
      onFormSubmit(text){
        var formValue = text.value;
        console.log(formValue);
        this.bookingService.book(formValue)
            .subscribe(() => {
                this.router.navigateByUrl('/login');
            });
      }
 

    //   onFormSubmit(){
    //     console.log('submit');
    //     const { name, address, state, country, contact} = this.form.value;
    //     this.bookingService.book(name, address, state, country, contact)
    //     .subscribe(() => {
    //         this.router.navigateByUrl('/login');
    //     });
    // }
  

}