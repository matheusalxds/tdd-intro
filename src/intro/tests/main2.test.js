describe('Main using hooks', () => {

  // Roda uma vez, antes do bloco
  before(function () {
    console.log('\tbefore');
  });

  // Roda uma vez, depois do bloco
  after(function () {
    console.log('\tafter');
  });

  // Roda uma vez, antes de CADA bloco
  beforeEach(function () {
    console.log('\tbefore each');
  });

  // Roda uma vez, depois de CADA bloco
  afterEach(function () {
    console.log('\tafter each');
  });

  it('test 1', function () {
    console.log('\tRunning test 1');
  });

  it('test 2', function () {
    console.log('\tRunning test 2');
  });
});

/*
* Outputs
* before
* before each
* Running test 1
* after each
* before each
* Running test 2
* after each
* after
* */
