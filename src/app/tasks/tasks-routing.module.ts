import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosComponent } from './components/to-dos-page/to-dos-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'toDos', pathMatch: 'full'},
  { path: 'toDos', component: ToDosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
