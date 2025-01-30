const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(4);
setB.add(5);
setB.add(6);

const union = (set1, set2) => {
  const unionAB = new Set();
  set1.forEach((value) => unionAB.add(value));
  set2.forEach((value) => unionAB.add(value));

  return unionAB;
};

console.log(union(setA, setB));
