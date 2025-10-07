# registration-deliveries - Sistema de pré-cadastro e entregas

## Requisitos para rodar o projeto

### Configuração do ambiente

Certifique-se de ter os seguintes requisitos instalados:

- **[Node.js LTS](https://nodejs.org/en)**  
- Recomenda-se o uso do [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões do Node.js:

### Versão das tecnologias para criação do projeto

Node: <span style="background:green;padding:0 10px">v21.7.3</span> <br>

### Como rodar o projeto na sua máquina?

1. Clone o repositório:
   ```bash
   git clone https://github.com/RodolfoN1/registration-deliveries
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
4. O projeto estará disponível! 🎉 Criado somente um servidor via node na porta 4400 para start do projeto



## Sobre

#### Sistema com 3 abas: 
1. Pré-cadastro (todos campos obrigatórios) <br />
    1.2. Código; <br />
    1.3. Nome; <br />
    1.4. Endereço; <br />
    1.5. Responsável; <br />
    1.6. Zoom usuário; <br />

2. Processo de entrega (campos obrigatórios) <br />
    2.1 CEP Origem (integração ViaCEP); <br /> 
    2.2 Filial destino; <br /> 
    2.3 Prazo; <br /> 
    2.4 Descrição; <br />                 
3. Entregas Pendentes <br />
    3.1 Confirmar (somente confirmar entregas registradas); <br />

O projeto armazena suas informações no localStorage e reutiliza a dinâmica do fluxo de Pré-cadastro, processo de entrega e Confirmar entregas. <br />
Projeto responsivo, estilizado tanto para Desktop quanto Mobile.

---  

### Estrutura do projeto

A organização do código segue uma estrutura lógica ES Modules (ESM):
- **`app.js`**: Arquivo JS principal para o micro gerenciamento.  

--- 

### Fluxograma do projeto

Segue link do arquivo .bpmn para criar o projeto no site: <br />
[Link google drive arquivo bpmn](https://drive.google.com/file/d/1RPv1Bb2vt4jna75hMJzUgi0tl-1Md2X0/view?usp=sharing)

<div>
<a href="https://github.com/RodolfoN1/registration-deliveries/blob/main/assets/diagram.svg" target="_blank" rel="noopener noreferrer">
    Link do Diagrama
</a>
</div>

--- 

### Estrutura de pastas

<pre>
registration-deliveries/
│
├── assets/
│   └── favicon.ico
│
├── css/
│   └── style.css
│
├── js/
│   ├── branches/
│   │   ├── branches.js
│   │   └── card-html.js
│   │
│   ├── deliveries/
│   │   ├── deliveries.js
│   │   └── card-html.js
│   │
│   ├── pending/
│   │   ├── pending.js
│   │   └── card-html.js
│   │
│   ├── app.js
│   └── storage.js
│
├── utils/
│   └── utils.js
│
├── index.html
├── package.json
├── README.md
└── server.js 

</pre>


### Organização por arquivos ( como se fosse componentes do React )

Cada arquivo está separado em pastas/subpastas específicas para facilitar a navegação e manutenção.  
Para realizar alterações, basta acessar a pasta correspondente.

---

## Tecnologias e bibliotecas utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **JavaScript**: É uma linguagem de programação voltada principalmente para o desenvolvimento web.
Ela é usada para criar interatividade, dinamismo e lógica dentro das páginas da internet..  
- **CSS**: CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a aparência visual das páginas da web — ou seja, é o que faz o site ficar bonito e organizado.  
- **HTML**: (HyperText Markup Language) é a linguagem base da web, usada para criar a estrutura e o conteúdo de uma página.
Em outras palavras: o HTML é o esqueleto de qualquer site.
- **Node**: Node.js (ou simplesmente Node) é um ambiente de execução JavaScript fora do navegador — ou seja, ele permite que você rode código JavaScript no servidor, não só no front-end.
Com o Node.js, você pode usar JS para criar servidores, APIs, sistemas e ferramentas de automação

## Observação
Não foi utilizado nenhum framework (React, Angular ou Vue) e sem automatizadores como webpack, gulp, grunt entre outros. <br />
Projeto realizado com HTML5, CSS (sem micro-processadores SASS/SCSS) e JavaScript puro.

---
