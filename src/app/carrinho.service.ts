import { IProdutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// servico para colocar itens no carrinho, deletar e obter todos os dados
export class CarrinhoService {
  // criado interface para utilizar aqui
  itens: IProdutoCarrinho[] = [];

  constructor() {}

  obtemCarrinho() {
    // vai ser tratado como obj
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '');
    return this.itens;
  }

  addAoCarrinho(produto: IProdutoCarrinho) {
    // add no IProdutoCarrinho
    this.itens.push(produto);
    // add no localStorage
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho() {
    // limpa itens do carrinho
    this.itens = [];
    // limpa do cache
    localStorage.clear();
  }
}
