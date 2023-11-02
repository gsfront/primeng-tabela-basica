import { Component, OnInit } from '@angular/core';
import { Produtos } from './produto';
import { ProdutoService } from './produto.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'primeng-tabela-basica';

    produtos: Produtos[] = [];

    constructor(private produtoService: ProdutoService) { }

    ngOnInit() {
        this.produtoService.getProdutos()
            .then(produto => {
                this.produtos = produto
            });
    }
}
