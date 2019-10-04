function fiboEvenSum(n) {
  //  0, 1, 1, 2, 3, 5, 8, 13, 21, 34
  let sum = 0;

  let f1 = 0;
  let f2 = 1;

  let fn = 0;

  for (let i = 0; i <= n; i++) {
    fn = f1 + f2;
    if (fn % 2 == 0) {
      sum += fn;
    }
    f1 = f2;
    f2 = fn;
  }

  return sum;
}
