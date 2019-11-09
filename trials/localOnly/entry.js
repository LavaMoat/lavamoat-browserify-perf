// import a dep graph
const { fromEtherCamp: brainwallet } = require('ethereumjs-wallet/thirdparty')

// use `global.process` so it works correctly under node
const nTimes = Number.parseInt(global.process.env.PERF_N || 5, 10)

// only do local math (dont use imported modules)
let count = 0
Array(nTimes).fill().forEach((_, index) => {
  count += 1
})
