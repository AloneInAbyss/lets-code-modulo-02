const buildStatesObject = (set) => {
  let obj = {};

  set.forEach((item) => {
    obj = {...obj, [item]: {}}
  })

  return obj;
}

const main = (arr) => {
  const uniqueStates = filterUniqueStates(arr)

  console.log(buildStatesObject(uniqueStates));

  return {
    total: countAllStudents(arr),
    stateCount: unique
  }
}
