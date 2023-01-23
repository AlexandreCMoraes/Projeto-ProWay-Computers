import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrls: ['./barra-de-pesquisa.component.css'],
})
export class BarraDePesquisaComponent {
  descricao = '';

  // serve para redirecionar paginas
  constructor(private router: Router) {}

  pesquisar() {
    if (this.descricao) {
      // navegar para paginas de produtos com a descricao feita na pesquisa, por isso o uso de queryParams: { descricao: this.descricao }

      this.router.navigate(['produtos'], {
        queryParams: { descricao: this.descricao },
      });
      return;
    }
    // senao redireciona para rota produtos sem nenhuma descricao
    this.router.navigate(['produtos']);
  }
}
