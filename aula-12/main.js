function showComparison(data) {
  if (data) {
    return "é true"
  } else {
    return "é false"
  }  
}

console.log(showComparison(""));
console.log(showComparison("a"));
console.log(showComparison(false));
console.log(showComparison(true));

function sum(data) {
  if (data < 5) {
    return data + 1
  }
}

console.log(sum("1"));

function reduceArray(array) {
  return array.reduce((previousValue, currentValue) => {
    if (!previousValue.includes(currentValue.state) && currentValue.state) {
      return currentValue.state;
    }
  }, [])
}

console.log(reduceArray([1, 2, 3, 1, 2, 4, 5]));