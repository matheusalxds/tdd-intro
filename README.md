# TDD na prática

### Funções do mocha

#### describe 
Como o próprio nome já diz, ele descreve o que a o teste irá fazer.
Então geralmente o primeiro describe que escrevemos é o nome daquela
classe, pois facilita encontrar mais facilmente. Ele cria um bloco
para que possamos testar todos os métodos contidos dentro daquele escopo.
<br />
Portanto o describe é utilizado para separar nossos métodos ou as nossas
classes.

````
describe('main', () => {
  // Primeiro describe, é do método que será testado
  describe('method A', () => {
    // Método a ser testado
  })
  
  describe('method B', () => {
      // Método a ser testado
  })
})
````

#### context
Serve para separar os casos que vamos ter de terminado método. Como assim?
Podemos ter um método A, onde nesse método tenhamos casos onde o valor de uma
variável é **TRUE** em em outro é **FALSE**, portanto eles são do mesmo método
mas eles vão se comportar diferente e por isso eles terão casos de testes
diferentes, por isso usamos o context

````
...
  describe('method A', () => {
    // Método a ser testado
    context('case A', () => {
      // Caso A onde é passo variável com TRUE
    }
    
    context('case B', () => {
      // Caso B onde é passo variável com FALSE
    })
  })
...
````

##### it
Para rodar os nossos testes, usamos esse comando, ele que de fato vai executar
o teste. <br />
Uma prática que o pessoal geralmente utiliza:

``it('Deveria acontecer tal coisa')`` <br />
``it('Should happen blabla bla')`` <br />

ou

``it('Deveria somar 2,2 e retornar 4')`` <br />
``it('Should sum 2,2 and return 4')`` <br />


````
...
  describe('method A', () => {
    // Método a ser testado
    context('case A', () => {
      // Caso A onde é passo variável com TRUE
      it('should happen blabla', () => {
        // Faz alguma coisa
        // Entra de dados / método sum(2,2)
        // Espera que retorne x (4) = true | (3) = error => broken test
      })
    })
  })
...
````

<br/>

## Parâmetros

#### Reporters

Utilizando o comando:
``
  npm test -- --reporters
``
Será apresentado uma lista de com os possíveis reporters que podemos utilizar.
Então para utilizar um dos tipos, rodar o comando: ``npm test -- --reporter=nyan``

<br />


#### Parâmetro --bail

Comando : `` npm test --bail ``

É um parâmetro que faz com que os testes parem no primeiro caso em que um erro
for disparado. É útil pelo fato de rodar até o lugar onde quebrou e já ir
reparando pedaços por pedaços.

<br />

#### Utilizando o parâmetro only

Instrui o Mocha a apenas executar aquele contexto específico e ignorar todo
o resto.

``
  context.only('Case A', () => {
    // faz algo
  })
`` 
<br />

#### Utilizando o parâmetro skip

Instrui o Mocha a pular aquele caso específico que foi marcado com o **skip**.
Nos logs, mostra como **pending** e com uma colaração diferente dos demais.


``
  it.skip('should happen bla bla ', () => {
    // faz algo
  })
`` 
<br /><br /><br />

## Hooks

Utilizamos os hooks pelo fato de que cada teste deve ser independente, não
pode utilizar resultados, informações de outros testes, então os hooks irão
auxiliar na criação de determinados dados/informações que irão ser utilizado
no teste que está sendo executado naquele momento. <br />
São códigos que podem ser executados em algum momento durante a execução dos
testes, são eles

**before**: executado apenas uma vez antes do block 
**after**: executado apenas uma vez depois do block
**beforeEach**: todas as vezes antes de cada block
**afterEach**: todas as vezes depois de cada block
