const promiseFunc = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("Готово!");
    }, 2000);
  });
};

promiseFunc().then((result) => console.log(result));
