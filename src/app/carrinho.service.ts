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
    // Ao clicar no botão de compra, Volta para Página de produto e ao colocar um vetor vazio ao invés de uma string, é zerado o conteúdo, que são os números do carrinho
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.itens;
  }

  addAoCarrinho(produto: IProdutoCarrinho) {
    // add no IProdutoCarrinho
    this.itens.push(produto);
    // add no localStorage
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  removerProdCarrinho(produtoId: number) {
    // filtra e remove o item que tem o id diferente do produtoId, mantendo o produto que tenha o id diferente
    this.itens = this.itens.filter((item) => item.id !== produtoId);
    // sobreescreve so dados
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho() {
    // limpa itens do carrinho
    this.itens = [];
    // limpa do cache
    localStorage.clear();
  }
}
