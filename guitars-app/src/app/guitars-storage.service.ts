import { Injectable } from '@angular/core';
import { Guitar } from './guitar';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GuitarsStorageService {
  constructor(

    private http: HttpClient

  ) { }
  addItem(item: Guitar){
    return this.http.post('http://172.18.0.4:3000/guitar', item);
  }

  getData(){   
    return this.http.get('http://172.18.0.4:3000/guitar');
  }

  getItem(id: string){
    return this.http.get('http://172.18.0.4:3000/guitar/' + id + '/edit/');
  }

  editItem(id : string, item : Guitar){
    return this.http.put('http://172.18.0.4:3000/guitar/' + id + '/edit/', item);
  }

  deleteItem(id : string){
    return this.http.delete('http://172.18.0.4:3000/guitar/' + id + '/edit/');
  }
}
