<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 08: Fundamentos do React Native
</h3>



<p align="center">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pauloabq/gostack-desafio-fundamentos-react-native">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/gostack%20bootcamp-Rocketseat-%237259c1">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/pauloabq/gostack-desafio-fundamentos-react-native">


</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades-da-aplicação">Funcionalidades</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#especificação-dos-testes">Especificação dos Testes</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#testar">Testar</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>



## :rocket: Sobre o desafio

Enunciado completo: https://github.com/rocketseat-education/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-react-native

Nesse desafio, você desenvolverá uma nova aplicação, a GoMarketplace. Dessa vez é hora de você praticar o que você aprendeu até agora no React Native junto com o TypeScript, utilizando rotas, Async Storage e a Context API.

### Funcionalidades da aplicação

Agora que você já está com o template clonado e pronto para continuar, você deve verificar os arquivos da pasta `src` e completar onde não possui código, com o código para atingir os objetivos de cada rota.

- **`Listar os produtos da fake API`**: Sua página `Dashboard` deve ser capaz de exibir uma listagem através de uma tabela, com os campos `title`, `image_url` e `price`.

**Dica**: Você pode utilizar a função [Intl](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) para formatar os valores. Dentro da pasta `utils` no template você encontrará um código para te ajudar.

- **`Adicionar itens ao carrinho`**: Em toda sua aplicação, você deve utilizar o Contexto chamado `cart` que deixamos disponível. Você vai precisar completar as funcionalidades dentro de `hooks/cart.tsx` para que você consiga adicionar itens ao carrinho.

**Dica**: No seu contexto de carrinho, utilize uma propriedade chamada `quantity` para controlar quantos desse item existem no seu carrinho.

**Dica 2**: Caso um produto que você está adicionando já exista no carrinho, apenas altere a quantidade dele no seu contexto para evitar itens duplicados.

- **`Exibir itens do carrinho`**: Na página `Cart` você deve exibir todos os itens do carrinho, junto com a quantidade, valor único, valor subtotal dos itens e total de todos os items.

- **`Aumentar quantidade de itens do carrinho`**: Na página `Cart` você deve permitir que o usuário aumente a quantidade de itens do mesmo produto, para isso você pode utilizar a função `increment` dentro do seu contexto em `/src/hooks/cart.tsx`.

- **`Diminuir quantidade de um item do carrinho`**: Na página `Cart` você deve permitir que o usuário decremente a quantidade de itens do mesmo produto, para isso você pode utilizar a função `decrement` dentro do seu contexto em `/src/hooks/cart.tsx`.

- **`Exibir valor total dos itens no carrinho`**: Tanto na página `Dashboard`, tanto na página `Cart` você deve exibir o valor total de todos os itens que estão no seu carrinho.

### Específicação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Caso você tenha dúvidas quanto ao que são os testes, e como interpretá-los, dé uma olhada em **[nosso FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Para esse desafio, temos os seguintes testes:

- **`should be able to list the products`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados na sua tela `Dashboard`, toda os produtos que são retornadas do Fake API. Essa listagem deve exibir o `title` e o `price` que deve ser formatado utilizando a função `Intl`.

- **`should be able to add a product to the cart`**: Para que esse teste passe, você deve permitir que seja possível adicionar produtos da sua `Dashboard` ao carrinho, utilizando o contexto de `cart` disponibilizado.

- **`should be able to list the products on the cart`**: Para que esse teste passe, você deve permitir que seja possível listar os produtos que estão salvos no contexto do seu carrinho na página `Cart`, nessa página exiba o nome do produto e o subtotal total de cada produto (price \* quantity).

- **`should be able to calculate the cart total`**: Para que esse teste passe, tanto na página `Dashboard`, tanto na página `Cart` você deve exibir o valor total de todos os itens que estão no seu carrinho.

**Dica**: Para calcular o total de todos os itens, você pode utilizar o [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) para somar todos os valores e retornar o valor total.

- **`should be able to show the total quantity of itens in the cart`**: Para que esse teste passe, tanto na página `Dashboard`, tanto na página `Cart` você deve exibir o número total de itens que estão no seu carrinho.

**Dica**: Para calcular o total de todos os itens, você pode utilizar o [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) para somar todos os valores e retornar o valor total.

**Dica 2**: Utilize o useMemo para armazenar o valor total do carrinho que você calculou.

- **`should be able to increment product quantity on the cart`**: Para que esse teste passe, você deve permitir que seja possível incrementar a quantidade de um produto do seu carrinho, utilizando o contexto de `cart` disponibilizado.

- **`should be able to decrement product quantity on the cart`**: Para que esse teste passe, você deve permitir que seja possível decrementar a quantidade de um produto do seu carrinho, utilizando o contexto de `cart` disponibilizado.

**Dica**: Ao decrementar a quantidade de um produto, não permita que ele seja decrementado para um valor negativo, sendo a quantidade mínima 1 para estar no carrinho.

- **`should be able to navigate to the cart`**: Para que esse teste passe, no seu componente `FloatingCart` na Dashboard, você deve permitir que ao clicar no botão de carrinho com o testID de `navigate-to-cart-button`, o usuário seja redirecionado para a página `Cart`.

- **`should be able to add products to the cart`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função `addToCart` adicione um novo item ao carrinho.

- **`should be able to increment quantity`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função `increment` incremente em `1` unidade a quantidade de um item que está armazenado no contexto.

- **`should be able to decrement quantity`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que a função `decrement` decremente em `1` unidade a quantidade de um item que está armazenado no contexto.

- **`should store products in AsyncStorage while adding, incrementing and decrementing`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho você deve permitir que todas as atualizações que você fizer no carrinho, sejam salvas no AsyncStorage. Por exemplo, ao adicionar um item ao carrinho, adicione-o também no AsyncStorage. Lembre de também atualizar o valor do AsyncStorage quando você incrementar ou decrementar a quantidade de um item.

- **`should load products from AsyncStorage`**: Para que esse teste passe, no seu arquivo onde contém o contexto do carrinho, você deve permitir que todos os produtos que foram adicionados sejam buscados do AsyncStorage.

---

### Instalação

### Pré-requisitos
- Fake API - json server
- Iniciar emulador


#### 1. Obter os arquivos

```bash
$ git clone https://github.com/pauloabq/gostack-desafio-fundamentos-react-native

```
#### 2. Instalar as dependências

Executar o comando no diretório do projeto clonado para instalar as dependências

```bash
$ yarn
```

#### 3. Iniciar a aplicação em modo desenvolvimento

```
$ yarn android
```
ou
```
$ yarn ios
```
#### 4. Iniciar a fake api
```
$  yarn json-server server.json -p 3333
```




### Testar

```bash
$ yarn test
```

### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
### :man_technologist: Autor

### Paulo Albuquerque

 [![Gmail][gmail-shield]][gmail-url] [![GitHub][github-profile-shield]][github-profile-url] [![LinkedIn][linkedin-shield]][linkedin-url] [![Twitter][twitter-shield]][twitter-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[twitter-shield]: https://img.shields.io/badge/-@pauloabq-1DA1F2?style=flat&logo=twitter&logoColor=white
[twitter-url]: http://twitter.com/pauloabq

[gmail-shield]: https://img.shields.io/badge/-pcajunior%40gmail.com-white?style=flat&logo=gmail&logoColor=red&colorA=white&colorB=red
[gmail-url]: mailto:pcajunior@gmail.com

[github-profile-shield]: https://img.shields.io/badge/-Github-000?style=flat&logo=github&logoColor=white
[github-profile-url]: http://github.com/pauloabq

[linkedin-shield]: https://img.shields.io/badge/-Linkedin-0077B5?style=flat&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/pauloabq

[github-lang-shield]: https://img.shields.io/github/languages/count/pauloabq/gostack-desafio-fundamentos-react-native
[github-lang-url]: http://github.com/pauloabq

[license-shield]: https://img.shields.io/github/license/pauloabq/gostack-desafio-fundamentos-react-native
[license-url]: https://github.com/pauloabq/gostack-desafio-fundamentos-react-native/LICENSE
