import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';
import { environment } from 'src/environments/environment';

@Injectable()
export class BookingService {

  constructor(private http : HttpClient) { }
  counter=2;
  book(formValue ){
    console.log(formValue+"service");
    return this.http.post(environment.apiURL+'/User', formValue);
  }
}
