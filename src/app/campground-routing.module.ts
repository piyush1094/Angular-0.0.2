import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { NgModule } from '@angular/core';
import { BookingComponent } from './booking/booking.component';
import { CampgroundDetailComponent } from './campground-detail/campground-detail.component';
import { UploadImageComponent } from './upload-image/upload-image.component';





const routes : Routes = [
    {path:'dashboard', component : DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'managebooking', component: ManageBookingComponent},
    {path: 'booking',component:BookingComponent},
    {path: 'campground/:id', component: CampgroundDetailComponent},
    {path: 'image', component: UploadImageComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
   
  ]

  @NgModule({
      declarations: [],
      imports: [
          RouterModule.forRoot(routes)
      ],
      exports: [
          RouterModule
      ]
  })

  export class CampgroundRoutingModule {

  }