function extraLongFactorial(n) {
  let FactorialArray = [];
  for (let i = 1; i <= n; i++) {
    FactorialArray.push(i);
  }

  const fact = FactorialArray.reduce(function (prev, cur) {
    return prev * cur;
  });
  console.log(BigInt(fact));
}

extraLongFactorial(25);

function designerPdfViewer(h, word) {
  let max_height = 0;
  let area;
  for (let i = 0; i < word.length; i++) {
    const w = word[i].charCodeAt(0);
    console.log(w);
    let num = w - 97;
    if (h[num] >= max_height) {
      max_height = h[num];
      console.log(max_height);
      area = word.length * max_height;
    }
  }
  console.log(area);
}

designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5,
  ],
  "abc"
);
