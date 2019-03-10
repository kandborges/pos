import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/';

  getProdutos() {
    return this.http.get<Produto[]>(this.baseUrl + 'produto');
  }

  getProdutoId(id: string) {
    return this.http.get<Produto>(this.baseUrl + 'produto' + '/' + id);
  }

  addProduto(produto: Produto) {
    return this.http.post(this.baseUrl + 'produto', produto, {responseType: 'text'});
  }

  delProduto(id: string) {
    return this.http.delete(this.baseUrl + 'produto' + '/' + id,  {responseType: 'text'});
  }

  upProduto(id: string, produto: Produto) {
    return this.http.put(this.baseUrl + 'produto' + '/' + id, produto, {responseType: 'text'});
  }

}

