import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private produtoService: ProdutoService, 
              private toastr: ToastrService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      codigo: ['', Validators.required],
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      quantidade: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.produtoService.addProduto(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  get f() { return this.addForm.controls; }

}
