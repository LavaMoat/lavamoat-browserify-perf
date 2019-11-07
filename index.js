const { fromEtherCamp: brainwallet } = require('ethereumjs-wallet/thirdparty')

const nTimes = Number.parseInt(global.process.env.PERF_N || 5, 10)

Array(nTimes).fill().forEach((_, index) => {
  const wallet = brainwallet(`brain wallet seed #${index}`)
  console.log(wallet.getAddressString())
})
