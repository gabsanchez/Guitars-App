import { Injectable } from '@angular/core';

@Injectable()
export class GuitarsStorageService {

  constructor() { }

  getData(){
    return  [{
      id: 1,
      imageUrl: './assets/img/fender-guitar.jpg',
      brand: 'Fender',
      type: 'Electric',
      owner: 'Gabriel Sanchez',
    },
    {
      id: 2,
      imageUrl: './assets/img/fender-guitar2.jpg',
      brand: 'Fender',
      type: 'Electric',
      owner: 'Pablo Sanchez',
    },
    {
      id: 3,
      imageUrl: './assets/img/fender-guitar3.jpg',
      brand: 'Fender',
      type: 'Electric',
      owner: 'John Smith',
    },
    {
      id: 4,
      imageUrl: './assets/img/fender-guitar4.jpg',
      brand: 'Fender',
      type: 'Electric',
      owner: 'Mateus Assato',
    },
    {
      id: 5,
      imageUrl: './assets/img/taylor-guitar.jpg',
      brand: 'Taylor',
      type: 'Acoustic',
      owner: 'Tobias Raucher',
    },
    {
      id: 6,
      imageUrl: './assets/img/gibson-guitar.jpg',
      brand: 'Gibson',
      type: 'Electric',
      owner: 'Les Paul',
    }]
  }
}
