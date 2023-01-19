import { IProdutoCarrinho } from './../../produtos';
import { CarrinhoService } from './../../carrinho.service';
import { NotificacaoService } from './../../notificacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    // colocar as info do produto na navegação
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    // add produtos ao carrinhos
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    // quando inicializar o componente, pega os parametros da rota
    const routeParams = this.route.snapshot.paramMap;
    // pegar o produto id.
    // converte para numero
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtosService.getOne(produtoId);
    console.log(produtoId);
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar('O produto foi adicionado ao carrinho!');

    //
    const produto: IProdutoCarrinho = {
      // no momento que add no carrinho, tera esse produto
      ...this.produto!,
      quantidade: this.quantidade,
    };
    // add ao carrinho
    this.carrinhoService.addAoCarrinho(produto);
  }
}
