import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  // tera acesso a lista de produtos
  produtos: IProduto[] = produtos;

  constructor() {}

  // traz a lista toda
  getAll() {
    return this.produtos;
  }

  // traz somente o produto selecionado
  getOne(produtoId: number) {
    // atraves da condição de encontrar o id do produto atraves do parametro produtoId
    return this.produtos.find((produto) => (produto.id === produtoId));
  }
}
