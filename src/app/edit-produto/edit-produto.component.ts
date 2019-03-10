import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  produto: Produto;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private produtoService: ProdutoService,
              private activeRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      codigo: [],
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      quantidade: ['', Validators.required],
      descricao: ['', Validators.required]
    });

    this.activeRoute.params.subscribe(params => {
      if (params.id) {
        this.produtoService.getProdutoId(params.id).subscribe(data => {
          console.log(data);
          this.editForm.patchValue(data[0]);
        });
      }
    });
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.activeRoute.params.subscribe(params => {
        if (params.id) {
          this.produtoService.upProduto(params.id, this.editForm.value)
          .subscribe( data => {
            console.log(data);
            this.router.navigate(['']);
          });
        }
      });
    }
  }
}
