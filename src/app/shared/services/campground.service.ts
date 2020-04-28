import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CampgroundService {

  constructor(private http: HttpClient) { }
  getCampground(){
    return this.http.get(environment.apiURL+"/Camp");
  }

  getCampgroundById(campId){
    return this.http.get(environment.apiURL+`/Campground/${campId}`);
  }

}
