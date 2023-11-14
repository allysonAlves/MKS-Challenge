# MksChallenge - Loja Online

Este é um projeto de loja online desenvolvido como parte do desafio MksChallenge. O objetivo principal do projeto é criar uma experiência de compra online interativa, incluindo funcionalidades como visualização de produtos, adição ao carrinho e finalização da compra.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento web.
- **Styled Components**: Biblioteca para estilizar componentes de forma mais dinâmica no React.
- **React Query**: Biblioteca para gerenciamento de estado global e dados assíncronos.
- **Jest e Testing Library**: Para testes unitários e de integração.
- **TypeScript**: Linguagem de programação que estende o JavaScript, oferecendo suporte à definição de tipos estáticos.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`/components`**: Componentes React reutilizáveis, estilizados com Styled Components.
- **`/Context`**: Contexto de aplicação, incluindo o provedor de carrinho.
- **`/pages`**: Páginas Next.js que compõem a aplicação.
- **`/services`**: Serviços de utilidade, como chamadas à API.

## Como Rodar o Projeto

1. **Instale as Dependências**:

   ```bash
   yarn install
   ```

2. **Execute o Projeto Localmente**:

   ```bash
   yarn dev
   ```

   O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

3. **Execute Testes**:

   ```bash
   yarn test
   ```

   Este comando executará os testes unitários e de integração.

4. **Crie uma Build de Produção**:

   ```bash
   yarn build
   ```

   Esta etapa cria uma versão otimizada para produção do aplicativo.

5. **Execute o Projeto em Produção**:

   ```bash
   yarn start
   ```

   O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Considerações Finais

Este projeto é um ponto de partida para uma aplicação de loja online. Sinta-se à vontade para expandi-lo adicionando mais funcionalidades, melhorando a interface do usuário e implementando integrações adicionais. Este README serve como um guia inicial, e você pode personalizá-lo conforme necessário. Divirta-se desenvolvendo a sua loja online!
