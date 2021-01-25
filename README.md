# PrimeNG
Dicas rápidas a respeito do PrimeNG

# Tabela Básica

## Primeiro iremos exibir uma Tabela utilizando recurso local no formato JSON
O exemplo que será utilizado está na documentação do PrimeNG https://primefaces.org/primeng/showcase/#/table/basic

### Resumo do que iremos precisar
1. Importar o módulo ```import {TableModule} from 'primeng/table'; ``` em `AppModule`;
2. Criar o Serviço utilizando o terminal `ng g s producto-service`;
3. Criar a Interface de dados `produto`;
4. Rodar o projeto.

#### <i>Primeiro passo:</i>

- Vamos importar o módulo `TableModule` ```import {TableModule} from 'primeng/table'; ``` em `ÀppModule`
- Criar o componente para trabalharmos com o modelo `ng g c produto`
- Agora vamos inserir o modelo estático de exemplo no HTML `produto.component.html`

```
<p-table [value]="produtos">
    <ng-template pTemplate="header">
        <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Valor $</th>
            <th>Quantidade</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-produto> //Ler descrição depois do código
        <tr>
            <td>{{produto.codigo}}</td>
            <td>{{produto.nome}}</td>
            <td>{{produto.categoria}}</td>
            <th>{{produto.preco}}</th>
            <td>{{produto.quantidade}}</td>
        </tr>
    </ng-template>
</p-table>
```
<b>Obs:</b> `let-produto` é uma variável e deve ser declarada, pois é ela quem irá consuduzir os dados para exibir como pode observar no código acima, segue um exemplo: `produto.codigo`, `produto.nome`...<br>
- No `produto.component.ts` iremos inserir o seguinte:
- Importar `import { ProductService } from './produto-service';`
- Importar `import { Produto } from './produto';` será aonde irá conter a Interface

- Inserir o seguinte código:
```
produtos: Produtos[];

constructor(private productService: ProductService) { }

ngOnInit() {
    this.produtoService.getProduto()
    .then(produto => {
        this.produtos = produto
    });
}
```
#### <i>Segundo passo:</i>
Criar nosso arquivo JSON `produto.json` e Inserir estes dados:<br>
```
{
    "data": [
        {"id": "001", "nome": "Mizuno Wave", "preco": 250, "categoria": "Tênis", "quantidade": 24},
        {"id": "002", "nome": "Nike Revolution 5", "preco": 300, "categoria": "Tênis", "quantidade": 15},
        {"id": "003", "nome": "Adidas Terex", "preco": 350, "categoria": "Tênis", "quantidade": 17},
        {"id": "004", "nome": "Puma Wired", "preco": 190, "categoria": "Tênis", "quantidade": 10}
    ]
}
```
Também iremos criar o serviço utilizando o terminal dentro da pasta do seu projeto `ng g s producto-service`<br>
Seu serviço estará gerado com o modelo padrão do Angular, porém deverá deixar desta forma:
```
constructor(private http: HttpClient) {}

getBooks() {
    return this.http.get<any>('assets/produto.json')
      .toPromise()
      .then(res => <Produto[]>res.data)
      .then(produto => { return produto; });
}
```
#### <i>Terceiro passo</i>
- Criar a Interface do modelo `produto.ts` e inserir o seguinte código:
```
export interface Produto {
    id?: string;
    nome?: string;
    preco?: number;
    quantidade?: number;
    categoria?: string;
}
```

- Agora é só rodar o projeto com `ng serve --o`

Se preferir poderá baixar o código completo neste repositório ou através do link: [GitHub](https://github.com/devmovel/primeng/archive/main.zip)
