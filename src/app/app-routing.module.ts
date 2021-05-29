import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBecarioComponent } from './add-becario/add-becario.component';
import { BecarioListComponent } from './becario-list/becario-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'becario',
    pathMatch: 'full',
  },
  {
    path: 'becario',
    component: BecarioListComponent,
  },
  {
    path: 'becario/add',
    component: AddBecarioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
