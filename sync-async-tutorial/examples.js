const {readFileAsArray} = require('./read-file');

const asyncCallbackExample = readFileAsArray('./numbers.txt', (err, lines) => {
  if (err) throw err;

  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter(n => n % 2 === 1);
  console.log('Odd numbers count:', oddNumbers.length);
});

const promiseExample = readFileAsArray('./numbers.txt')
  .then(lines => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(n => n % 2 === 1);
    console.log('Odd numbers count:', oddNumbers.length);
  })
  .catch(console.error);

async function countOdd() {
  try {
    const lines = await readFileAsArray('./numbers.txt');
    const numbers = lines.map(Number);
    const oddCount = numbers.filter(n => n % 2 === 1).length;
    console.log('Odd numbers count:', oddCount);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  asyncCallbackExample,
  promiseExample,
  countOdd,
};
