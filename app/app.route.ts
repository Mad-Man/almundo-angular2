import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContainer } from './components/main-container/list-container/list-container.component';

const routes: Routes = [
  { path: 'hoteles/:destination', component: ListContainer },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
