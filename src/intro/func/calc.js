// module.exports = {
//   sum: function (n1, n2) {
//     return n1 + n2;
//   },
//   sub: function (n1, n2) {
//     return n1 - n2;
//   },
//   multi: function (n1, n2) {
//     return n1 * n2;
//   },
//   div: function (n1, n2) {
//     return (n2 === 0) ? 'Não é possível dividir por zero' : n1/n2;
//   },
// };

const sum = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const multi = (n1, n2) => n1 * n2;
const div = (n1, n2) => {
  return (n2 === 0) ? 'Não é possível dividir por zero' : n1 / n2;
};

export { sum, sub, multi, div };
