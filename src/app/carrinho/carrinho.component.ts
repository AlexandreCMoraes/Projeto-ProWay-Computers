import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotalPedidos();
  }

  calculaTotalPedidos() {
    this.total = this.itensCarrinho.reduce(
      (prev, curr) => prev + curr.preco * curr.quantidade,
      0
    );
  }

  removeProdCarrinhoTela(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(
      (item) => item.id !== produtoId
    );
    this.carrinhoService.removerProdCarrinho(produtoId);
    this.calculaTotalPedidos();
  }

  // ao clicar no botao compra, limpa carrinho e navega de volta pagina de produtos
  comprar() {
    alert('Parabéns pela sua compra!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }
}
