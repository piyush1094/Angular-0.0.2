import { Component, OnInit } from '@angular/core';
import { CampgroundService } from '../shared/services/campground.service';
import { Router } from '@angular/router';
import { Campground } from '../shared/models/campground';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  camps: Campground[];
  constructor(private campgroundService : CampgroundService,
    private router: Router) { }

  ngOnInit() {
    this.campgroundService.getCampground()
    .subscribe((camps : Campground[])=> {
      this.camps=camps;
    })
  }

  viewCamp(camp : Campground){
    return this.router.navigateByUrl(`/campground/${camp.C_Id}`);
  }

}
