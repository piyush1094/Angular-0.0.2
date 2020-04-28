import { Component, OnInit } from '@angular/core';
import { CampgroundService } from '../shared/services/campground.service';
import { Router } from '@angular/router';
import { Campground } from '../shared/models/campground';
import { UploadImageService } from '../shared/services/upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})

export class UploadImageComponent implements OnInit {
    
  imageUrl: string ="assets/img/default-image.png";
  fileToUpload: File = null;
  constructor(private imageService : UploadImageService) {}
  ngOnInit(){

  }

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }



  OnSubmit(Caption,Image){
    this.imageService.postFile(Caption.value,this.fileToUpload).subscribe(
      data =>{
        console.log('done');
        Caption.value = null;
        Image.value = null;
        this.imageUrl = "/assets/img/default-image.png";
      }
    );
   }

}