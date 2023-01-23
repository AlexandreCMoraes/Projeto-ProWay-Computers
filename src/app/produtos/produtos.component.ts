import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from '../produtos';
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
    // pega os produtos
    const produtos = this.produtosService.getAll();
    // pega as info e transforma em lowercase na nav de pesquisa
    this.route.queryParamMap.subscribe((params) => {
      const descricao = params.get('descricao')?.toLowerCase();

      // validando se tiver descricao
      if (descricao) {
        // se for igual da pesquisa com do servico em lowercase
        this.produtos = produtos.filter((produtos) =>
          produtos.descricao.toLowerCase().includes(descricao)
        );
        return;
      }
      this.produtos = produtos;
    });
  }
}
