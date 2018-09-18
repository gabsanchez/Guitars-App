import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { GuitarComponent } from './guitar/guitar.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'home', component: GuitarComponent },
  { path: 'add-guitar', component: AddFormComponent },
  { path: 'edit-guitar/:id', component: AddFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
export const RoutingComponents = [GuitarComponent, AddFormComponent];
