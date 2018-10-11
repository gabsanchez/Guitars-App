import { Injectable } from '@angular/core';
import { Guitar } from './guitar';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GuitarsStorageService {
  constructor(

    private http: HttpClient

  ) { }
  addItem(item: Guitar){
    return this.http.post('http://localhost:3000/guitar/add', item);
  }

  getData(){   
    return this.http.get('http://localhost:3000/guitars');
  }

  editItem(id : number, item : Guitar){
    return this.http.put('http://localhost:3000/guitar/edit/' + id, item);
  }

  deleteItem(id : number){
    return this.http.delete('http://localhost:3000/guitar/delete/' + id)
  }
}
