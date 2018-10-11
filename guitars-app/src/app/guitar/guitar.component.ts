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
    this.guitarsService.getData().subscribe(response => this.guitars = <Array<Guitar>> response)
    //window.localStorage.setItem('guitarsData', JSON.stringify(this.guitars));
  }

  like(guitar: Guitar){
    guitar.likes += 1;
  }

  deleteGuitar(id){
    this.guitarsService.deleteItem(id).subscribe(response => this.guitars = <Array<Guitar>> response);
  }

}
