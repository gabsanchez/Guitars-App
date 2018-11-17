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
  id : string = this.route.snapshot.paramMap.get('id');
  guitarsArray = new Array<Guitar>();
  guitar = null;
  constructor(
    private guitarService: GuitarsStorageService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    if(this.id){
      this.guitarService.getItem(this.id).subscribe(response => this.guitar = response );
    }
    else{
      this.guitar = new Guitar();
    }    
  }

  saveGuitar(){
    if(!this.id){
      this.guitar.id = this.guitarsArray.length;
      this.guitar.likes = 0;
      this.guitarService.addItem(this.guitar).subscribe();
    }
    else{
      return this.guitarService.editItem(this.id, this.guitar).subscribe();
    }
  }

}
