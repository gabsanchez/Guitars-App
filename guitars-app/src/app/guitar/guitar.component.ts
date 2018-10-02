import { Component, OnInit } from '@angular/core';
import { Guitar } from '../guitar';
import { GuitarsStorageService } from '../guitars-storage.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {
  guitars = new Array<Guitar>();
  constructor(
    private guitarsService : GuitarsStorageService
    ) {  }

  ngOnInit() {
    this.guitars = this.guitarsService.getData();
    window.localStorage.setItem('guitarsData', JSON.stringify(this.guitars));
  }

  like(guitar: Guitar){
    guitar.likes += 1;
  }

  deleteGuitar(index){
    this.guitars.splice(index, 1);
    this.guitarsService.getData();
    window.localStorage.setItem('guitarsData', JSON.stringify(this.guitars));
  }

}
