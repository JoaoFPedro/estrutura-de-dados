//Para entender a recursão, é preciso entender antes a recursão

function understandRecursion(doIUnderstandRecursion) {
  const recursionAnswer = confirm("Do you understand recursion?");
  if (recursionAnswer === true) {
    return true;
  }
  understandRecursion(recursionAnswer);
}

function factorialIterative(number) {
  if (number < 0) return undefined;

  let total = 1;

  for (let n = number; n > 1; n--) {
    total = total * n;
  }
  return total;
}
console.log("Fatorial!", factorialIterative(5));

function factorial(n) {
  if (n === 1 || n === 0) {
    //caso de base
    return 1;
  }
  return n * factorial(n - 1); //chamada recursiva
}
console.log("FatorialRecursivo:", factorial(10));
