describe('Main using hooks', () => {
  // então cria-se uma variável global e essa variável é sempre inicializada pelo beforeEach para cada teste
  // isso evita de ter que criar as mesmas variáveis em todos os testes
  let arr;
  // Roda uma vez, antes do bloco
  before(function () {
  // criar a conexão com o DB
  // criar um conjunto de dados
  });

  // Roda uma vez, depois do bloco
  after(function () {
  // fechar a conexão com o DB
  // apagar esse conjunto de dados
  });

  // Roda uma vez, antes de CADA bloco
  beforeEach(function () {
    arr = [1, 2, 3]
  });

  // Roda uma vez, depois de CADA bloco
  afterEach(function () {

  });

  it('should have a size of 4 when push another value to the array', function () {
    // const arr = [1, 2, 3];
    arr.push(4);
    console.log('>', arr.length); // 4
  });

  it('should have a size of 2 when pop a value from the array', function () {
    // const arr = [1, 2, 3];
    arr.pop();
    console.log('>', arr.length); // 2
  });

  it('should remove value 3 when use pop in the array', () => {
    // const arr = [1, 2, 3];
    console.log('>', arr.pop() === 3)
  })
});
