import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  getProdutos() {
    return this.http.get<any>('assets/produto.json')
      .toPromise()
      .then(res => <Produtos[]>res.data)
      .then(produto => { return produto; });
}
}
