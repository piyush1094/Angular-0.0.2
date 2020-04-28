import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampgroundComponent } from './campground/campground.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampgroundRoutingModule } from './campground-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingComponent } from './booking/booking.component';
import { BookingService } from './shared/services/booking.service';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { CampgroundService } from './shared/services/campground.service';
import { CampgroundDetailComponent } from './campground-detail/campground-detail.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { UploadImageService } from './shared/services/upload-image.service';



@NgModule({
  declarations: [
    CampgroundComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ManageBookingComponent,
    NavbarComponent,
    BookingComponent,
    PaymentComponent,
    CampgroundDetailComponent,
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    CampgroundRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    BookingService,
    CampgroundService,
    UploadImageService
  ],
  exports: [
   CampgroundComponent,
   NavbarComponent,
   CampgroundRoutingModule   
  ]
})
export class CampgroundModule { }
