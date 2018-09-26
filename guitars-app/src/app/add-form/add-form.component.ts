import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guitar } from '../guitar';
import { GuitarsStorageService } from '../guitars-storage.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})


export class AddFormComponent implements OnInit {
  id : number = +this.route.snapshot.paramMap.get('id');
  guitarsArray = new Array<Guitar>();
  guitar = null;
  constructor(
    private guitarService: GuitarsStorageService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.guitar = this.id ? this.guitarService.guitarsArray.filter(g => g.id == this.id)[0] : new Guitar();
  }

  saveGuitar(){
    if(!this.id){
      this.guitar.id = this.guitarsArray.length;
      this.guitar.likes = 0;
      this.guitarService.addItem(this.guitar);
    }
    window.localStorage.setItem('guitarsData', JSON.stringify(this.guitarService.guitarsArray));
  }

}
