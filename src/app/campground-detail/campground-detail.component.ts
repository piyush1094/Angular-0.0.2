import { Component, OnInit } from '@angular/core';
import { CampgroundService } from '../shared/services/campground.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Campground } from '../shared/models/campground';

@Component({
  selector: 'app-campground-detail',
  templateUrl: './campground-detail.component.html',
  styleUrls: ['./campground-detail.component.css']
})

export class CampgroundDetailComponent implements OnInit {

    constructor(private campgroundService: CampgroundService,
        private route: ActivatedRoute){}

        camp: Campground;

    ngOnInit(){

        const campId = this.route.snapshot.paramMap.get('id');
        this.campgroundService.getCampgroundById(campId)
        .subscribe((camp: Campground) => {
            this.camp = camp;
        })
    }

}