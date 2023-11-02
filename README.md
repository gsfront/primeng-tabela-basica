# PrimeNG + Angular 16
Dicas rápidas a respeito do PrimeNG

# Tabela Básica

## Primeiro iremos exibir uma Tabela utilizando recurso local no formato JSON
O exemplo que será utilizado está na documentação do PrimeNG https://primefaces.org/primeng/showcase/#/table/basic

### Resumo do que iremos precisar
1. Importar o módulo ```import {TableModule} from 'primeng/table'; ``` em `AppModule`;
2. Criar o Serviço utilizando o terminal `ng g s producto-service`;
3. Criar a Interface de dados `produto`;
4. Rodar o projeto.

### Resultado esperado
![resultado](https://github.com/gsfront/primeng-tabela-basica/assets/18249944/d890d8e6-2e63-4839-ac02-8398dee3111a)

#### <i>Primeiro passo:</i>

- Instalar o primeng:<br> `npm install primeng --save` <br> `npm install primeicons --save` <br> `npm install primeflex --save` <br> `npm install @angular/cdk --save`

- Depois inserir os estilos css em `angular.json`:
```
"src/styles.css",              
"./node_modules/primeflex/primeflex.css",
"./node_modules/primeng/resources/themes/md-light-indigo/theme.css",
"./node_modules/primeng/resources/primeng.min.css",
"./node_modules/primeicons/primeicons.css"
```
- Vamos importar o módulo `TableModule` ```import {TableModule} from 'primeng/table'; ``` em `ÀppModule`
- Iremos trabalhar nos componentes `app.component.html` e `app.component.ts`
- Agora vamos inserir o modelo estático de exemplo no HTML `app.component.html`

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
    <ng-template pTemplate="body" let-produto> <!-- Ler descrição depois do código -->
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
- No `app.component.ts` iremos inserir o seguinte:
- Importar `import { ProdutoService } from './produto.service';`
- Importar `import { Produtos } from './produto';` será aonde irá conter a Interface

- Inserir o seguinte código:
```
produtos: Produtos[];

constructor(private produtoService: ProdutoService) { }

ngOnInit() {
    this.produtoService.getProdutos()
    .then(produto => {
        this.produtos = produto
    });
}
```
#### <i>Segundo passo:</i>
Criar nosso arquivo JSON em `assets\produto.json` e Inserir estes dados:<br>
```
{
    "data": [
        {"codigo": "001", "nome": "Mizuno Wave", "preco": 250, "categoria": "Tênis", "quantidade": 24},
        {"codigo": "002", "nome": "Nike Revolution 5", "preco": 300, "categoria": "Tênis", "quantidade": 15},
        {"codigo": "003", "nome": "Adidas Terex", "preco": 350, "categoria": "Tênis", "quantidade": 17},
        {"codigo": "004", "nome": "Puma Wired", "preco": 190, "categoria": "Tênis", "quantidade": 10}
    ]
}
```
Também iremos criar o serviço utilizando o terminal dentro da pasta do seu projeto `ng g s produto`<br>
- Deverá importar o `HttpClient` em `ÀppModule` `import { HttpClientModule } from '@angular/common/http';`<br>
Seu serviço estará gerado com o modelo padrão do Angular, porém deverá deixar desta forma:
```
constructor(private http: HttpClient) {}

getProdutos() {
    return this.http.get<any>('assets/produto.json')
      .toPromise()
      .then(res => <Produtos[]>res.data)
      .then(produto => { return produto; });
}
```
#### <i>Terceiro passo</i>
- Criar a Interface do modelo `produto.ts` e inserir o seguinte código:
```
export interface Produtos {
    codigo?: string;
    nome?: string;
    preco?: number;
    quantidade?: number;
    categoria?: string;
}
```

- Agora é só rodar o projeto com `ng serve --o`



Se preferir poderá baixar o código completo neste repositório ou através do link: [GitHub](https://github.com/devmovel/primeng/archive/main.zip)<br>
Então entrar na pasta do projeto via terminal e executar o comando `npm install`, em seguida `ng serve`
