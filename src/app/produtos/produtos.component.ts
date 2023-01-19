import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  // produtos: IProduto[] = produtos;
  // utilizar os serviços para obter os produtos (produtos.service.ts) nao so aqui, mas tbm no componente de detalhes-produtos.ts
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // aqui obtera todos os produtos
    this.produtos = this.produtosService.getAll();
    console.log(this.produtos);
  }
}
