const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 1');
    resolve(1);
  });
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 2');
    // reject(new Error('something went wrong'));
    resolve(2);
  });
});

Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log('Error', err.message));

const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const e = Promise.reject(new Error('error while performing read'));
e.catch((error) => console.log(error));
