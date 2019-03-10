import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from './../produto.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService.getProdutos().subscribe(data => {
      console.log(data);
      this.produtos = data;
    }, (() => {
      this.produtos = [];
    }));
  }

  addProduto(): void {
    this.router.navigate(['add-produto']);
  }

  delProduto(produto: Produto) {
    this.produtoService.delProduto(produto._id).subscribe(data => {
      console.log(data);
      this.getProdutos();
    }, () => {
      this.getProdutos();
    }
    );
  }

  upProduto(produto: Produto) {
    this.produtoService.upProduto(produto._id, produto);
    this.router.navigate(['edit-produto', produto._id]);
  }
}

