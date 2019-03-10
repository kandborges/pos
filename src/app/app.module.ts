import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProdutoComponent } from './add-produto/add-produto.component';
import { ListProdutoComponent } from './list-produto/list-produto.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './produto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumirPipe } from './resumir.pipe';
import { CampoDirective } from './campo.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddProdutoComponent,
    ListProdutoComponent,
    EditProdutoComponent,
    ResumirPipe,
    CampoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
