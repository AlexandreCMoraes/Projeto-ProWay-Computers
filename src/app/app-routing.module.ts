import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// criado modulo de produtos (ng g module produtos --route produtos --module app.module - esse codigo ja cria o path) para utilizar o lazy-load depois
const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
  },
  // com isso a raiz ja fica em /produtos
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  { path: '**', component: NaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
