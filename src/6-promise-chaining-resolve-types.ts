import wrapInPromise from "./helpers/wrapInPromise";

function printWithTransformations(n: number) {
  console.log("START of function body");

  const promiseOne = wrapInPromise({ wait: 2000, value: n });

  const promiseTwo = promiseOne.then((res) => {
    console.log("first resolved result:", res);
    return "hello world!".repeat(res);
  });

  const promiseThree = promiseTwo.then((res) => {
    console.log("second resolved result:", res);
    return res.split("!");
  });

  const promiseFour = promiseThree.then((res) => {
    console.log("third resolved result:", res);
    return res.length > 5;
  });

  console.log("END of function body");
}

// printWithTransformations(3);

function printWithTransformationsChained(n: number) {
  console.log("START of function body");

  const promise = wrapInPromise({ wait: 2000, value: n })
    .then((res) => {
      console.log("first resolved result:", res);
      return "hello world!".repeat(res);
    })
    .then((res) => {
      console.log("second resolved result:", res);
      return res.split("!");
    })
    .then((res) => {
      console.log("third resolved result:", res);
      return res.length > 5
    });

  console.log("END of function body");
}

printWithTransformationsChained(3)
