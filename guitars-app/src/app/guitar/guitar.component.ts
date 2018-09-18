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
    window.localStorage.setItem('guitarsData', JSON.stringify(this.guitarsService.getData()));
    this.guitars = JSON.parse(window.localStorage.getItem('guitarsData'));
  }

}
