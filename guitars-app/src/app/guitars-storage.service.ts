import { Injectable } from '@angular/core';
import { Guitar } from './guitar';

@Injectable()
export class GuitarsStorageService {
  guitarsArray : Array<Guitar> = [{
    id: 1,
    imageUrl: './assets/img/fender-guitar.jpg',
    brand: 'Fender',
    type: 'Electric',
    owner: 'Gabriel Sanchez',
    likes: 45
  },
  {
    id: 2,
    imageUrl: './assets/img/fender-guitar2.jpg',
    brand: 'Fender',
    type: 'Electric',
    owner: 'Pablo Sanchez',
    likes: 20
  },
  {
    id: 3,
    imageUrl: './assets/img/fender-guitar3.jpg',
    brand: 'Fender',
    type: 'Electric',
    owner: 'John Smith',
    likes: 13
  },
  {
    id: 4,
    imageUrl: './assets/img/fender-guitar4.jpg',
    brand: 'Fender',
    type: 'Electric',
    owner: 'Mateus Assato',
    likes: 25
  },
  {
    id: 5,
    imageUrl: './assets/img/taylor-guitar.jpg',
    brand: 'Taylor',
    type: 'Acoustic',
    owner: 'Tobias Raucher',
    likes: 9
  },
  {
    id: 6,
    imageUrl: './assets/img/gibson-guitar.jpg',
    brand: 'Gibson',
    type: 'Electric',
    owner: 'Les Paul',
    likes: 11
  }];
  constructor() { }
  addItem(item: Guitar){
    this.guitarsArray.push(item);
  }
  getData(){    
    return this.guitarsArray;
  }
}
