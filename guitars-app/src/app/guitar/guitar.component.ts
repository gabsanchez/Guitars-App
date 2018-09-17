import { Component, OnInit } from '@angular/core';
//import { Guitar } from '../guitar';
import { GuitarsStorageService } from '../guitars-storage.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {
  guitars = [];
  constructor(private guitarsService : GuitarsStorageService) { 
    
  }

  ngOnInit() {
    this.guitars = this.guitarsService.getData();
  }

}
