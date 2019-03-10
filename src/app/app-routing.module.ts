import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProdutoComponent } from './add-produto/add-produto.component';
import { ListProdutoComponent } from './list-produto/list-produto.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';

const routes: Routes = [
  { path: 'add-produto', component: AddProdutoComponent},
  { path: '', component: ListProdutoComponent,  pathMatch: 'full'},
  { path: 'edit-produto/:id', component: EditProdutoComponent, data : {produto : 'produto'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
