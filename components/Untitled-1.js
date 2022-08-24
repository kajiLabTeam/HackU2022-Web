const funcA = (callback) => {
  callback();
  console.log("BBBB");
};

const funcB = () => {
  console.log("AAAA");
};

funcA();
