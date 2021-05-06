export default {"abi":{"ABI version":2,"header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"tokenRoot","type":"address"}],"outputs":[]},{"name":"initPadawan","inputs":[{"name":"ownerAddress","type":"address"}],"outputs":[]},{"name":"voteFor","inputs":[{"name":"proposal","type":"address"},{"name":"choice","type":"bool"},{"name":"votes","type":"uint32"}],"outputs":[]},{"name":"confirmVote","inputs":[{"name":"pid","type":"uint64"},{"name":"deposit","type":"uint32"}],"outputs":[]},{"name":"rejectVote","inputs":[{"name":"pid","type":"uint64"},{"name":"deposit","type":"uint32"},{"name":"ec","type":"uint16"}],"outputs":[]},{"name":"reclaimDeposit","inputs":[{"name":"votes","type":"uint32"}],"outputs":[]},{"name":"updateStatus","inputs":[{"name":"pid","type":"uint64"},{"name":"state","type":"uint8"}],"outputs":[]},{"name":"transferFunds","inputs":[{"name":"to","type":"address"},{"name":"val","type":"uint128"}],"outputs":[]},{"name":"depositTokens","inputs":[{"name":"returnTo","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"tokens","type":"uint64"}],"outputs":[]},{"name":"onGetBalance","inputs":[{"name":"balance","type":"uint128"}],"outputs":[]},{"name":"onTokenWalletDeploy","inputs":[{"name":"ownerAddress","type":"address"}],"outputs":[]},{"name":"getDeposits","inputs":[],"outputs":[{"components":[{"name":"tokenId","type":"uint256"},{"name":"returnTo","type":"address"},{"name":"amount","type":"uint64"},{"name":"valuePerVote","type":"uint64"},{"name":"approved","type":"bool"},{"name":"depool","type":"uint256"}],"name":"allDeposits","type":"map(uint32,tuple)"}]},{"name":"getTokenAccounts","inputs":[],"outputs":[{"components":[{"name":"addr","type":"address"},{"name":"ownerAddressKey","type":"uint256"},{"name":"createdAt","type":"uint32"},{"name":"balance","type":"uint128"}],"name":"allAccounts","type":"map(address,tuple)"}]},{"name":"getVoteInfo","inputs":[],"outputs":[{"name":"reqVotes","type":"uint32"},{"name":"totalVotes","type":"uint32"},{"name":"lockedVotes","type":"uint32"}]},{"name":"getAddresses","inputs":[],"outputs":[{"name":"ownerAddress","type":"address"}]},{"name":"getActiveProposals","inputs":[],"outputs":[{"name":"activeProposals","type":"map(address,uint32)"}]}],"data":[{"key":1,"name":"deployer","type":"address"}],"events":[{"name":"VoteRejected","inputs":[{"name":"pid","type":"uint64"},{"name":"votes","type":"uint32"},{"name":"ec","type":"uint16"}],"outputs":[]}]},"image":"te6ccgECQQEAD6wAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAhD0pCCK7VP0oAYEAQr0pCD0oQUAAAIBIAgHA+T/f40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B2zz4R26OgN4iCwkCQt9wItDTA/pAMPhpqTgA3CHHANwh0x8h3QHbPPhHbo6A3gsJAQZb2zwKAg74QW7jANs8QD4EWCCCECWiMW67joDgIIIQMftyEruOgOAgghBVNsJyu46A4CCCEH/H4Kq7joDgOCcZDARQIIIQXtBJZrrjAiCCEGjpTpq64wIgghBuMPKauuMCIIIQf8fgqrrjAhIRDw0DbjD4QW7jANHbPCHA/44iI9DTAfpAMDHIz4cgzoBgz0DPgc+Bz5P/H4KqIc8WyXD7AN4w4wB/+GdADj4ATo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhLMQP+MPhBbuMA0z/TH9H4SY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFs/LgZCEy+En4T4EBC/QKb6GT1wsf3iBus/LgZCAgbvJ/IiGgtR/4T/hJASLIyx9ZgQEL9EH4byHbPHH4UCIBUxCAIPQOk9cLH5Fw4kAyEAGsVQKgtR/Iyx9ZgCD0Q/hwcPhQgCD0jm+hlgHXCx9vAt4gbpwgIG7yf28iAQEhNFvf+FMivZMh+HPeW/hLyM+FCM6Abc9Az4HPgcmAQPsAXwNb2zx/+Gc+ApYw+EFu4wDRcHBw+FEz+FIy+FMxI8D/jisl0NMB+kAwMcjPhyDOgGDPQM+Bz4HPk6OlOmojzwsfIs8LHyHPCx/JcPsA3l8D4wB/+GdAPgMgMPhBbuMA03/R2zzbPH/4Z0ATPgFe+EmNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbPy4GT4SW0UAf6OZ/hMgQEL9IJvoZ4B+kDT/9Mf1wt/bwRvAt5wmiDBAiCUMCFus96ONyEgbvJ/byIBASBvECbHBZojbBVVMF8EdNsw4CH4TIEBC/R0b6GeAfpA0//TH9cLf28EbwLeNFvowATcIGwSATDYMSBus/LgdvhUwwDy4GQgIG7yf28iFQH+AQEgbxP4TCMBUxCBAQv0Co4uyI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABM8WgQGgz0DJ0N/6QIEBINcYMCgCyM7Oy39ZgQEL9EH4bPhU+E2AIPQOb6Gf0//6QNM/0z/SANcL/28G3iBus/LgdyAgbvJ/JhYBQiFvEiSgtX++joCf+E34VAEhAYAg9FswMfht4nD4dF8GMBcB/vhN+FQBUxCAIPQOjjPIgQEAz0CNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATPFoEBgc9AydDf1v/6QNZ/1gAxfwFeMMjOzs7KAM5ZgCD0Q/ht+FRxIfhNgCD0Dm+hn9P/+kDTP9M/0gDXC/9vBt4gbrPy4HcYAOQgIG7yf/hNJAFTEIAg9A6OM8iBAQDPQI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABM8WgQGBz0DJ0N/W//pA1j/WPzEoAV4wyM7Ozss/zlmAIPRD+G0gbxIjqQS1H/hSAaC1H/hyW1sEUCCCEEbjHca64wIgghBHVlTcuuMCIIIQTF35dbrjAiCCEFU2wnK64wIlHhwaAyAw+EFu4wD6QNHbPNs8f/hnQBs+AMD4SfhMgQEL9ApvoZv6QNP/0x/XC39vBN4gbrPy4HQgIG7yfyAjb1Ax+Ez4SQEibyTIJM8WI88L/yLPCx8hzwt/bEFZgQEL9EH4bPhLyM+FCM6Abc9Az4HPgcmAQPsAWzAC/DD4QW7jAPpA0gDTH9H4SfhLxwXy4HEi+E+BAQv0Cm+hk9cLH94gbrOVICBu8n+RcOL4UiGhtR8jIbvy4G8ibo4Q+E8mAXDIyx9ZgQEL9EH4b94lf8jPhYDKAHPPQM6Abc9Az4HPgc+Q6UL/jvhCzwv/Jc8KACTPCx/JgED7AEAdARJfA18D2zx/+Gc+BPww+EFu4wD4RvJzcfhm+kDR+EmNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbPy4GT4SvhJxwXy4Hsg+HX4SsjPhYjOjQRQ7msoAAAAAAAAAAAAAAAAAAHPFs+Bz4HPkJU+B0b4Qs8L/8lw+wDbPDDbPH8iID4fAAT4ZwH6+Cj6Qm8T1wv/jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIfgjcG8E+Ez4VQFYbyTIJM8WI88L/yLPCx8hzwt/bEFZgQEL9EH4bPhVf8jPhYDKAHPPQM6NBFHc1lAAAAAAAAAAAAAAAAAAAc8Wz4HPg8ghAFTPkAAAADaCEFU2wnLPCx9wzwoHcM8L/yLPC/+CEDuaygDPC3/NyXH7ADABmO1E0CDXScIBjj/T/9M/0wDV0//0BNMf0x/4dfh0+HP4cPhu+kD6QPQE9AT0BNMf1wsf+HL4cfhv+G34bPhr+Gp/+GH4Zvhj+GKOgOIjAeT0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gtt+Gxt+G1w+G5t+G9t+HBw+HFw+HJw+HNw+HQkAH6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4dXABgED0DvK91wv/+GJw+GNw+GZ/+GFw+G4ElDD4QW7jANMf0fhJ+EvHBfLgcds8ghA7msoAvvLgciD4Urvy4G8g+HH4UfhS+FOhtR+7joDe+E+BAQv0gm+hlgHXCx9vAt6TIG6zQDcqJgGujk0gIG7yf28iAQEhf8jPhYDKAHPPQM6NBFAExLQAAAAAAAAAAAAAAAAAAc8Wz4HPgc+Qmh9uCslx+wAh+E+BAQv0dG+hlgHXCx9vAt4zW+gwMNs8f/hnPgRQIIIQJhAQhLrjAiCCEC5I7mO64wIgghAvB6eguuMCIIIQMftyErrjAjUzKSgCNjD4QW7jAPpA0fhJ+ErHBfLgbiD4azDbPH/4Z0A+BNYw+EFu4wDTP9MH0fhJjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWz8uBkITL4SfhPgQEL9ApvoZPXCx/eIG6z8uBk+AAhc76OgN74UfhS+FOhtR+7joDeMFvbPH/4Z0AxKj4BBNs8KwFq+FH4TYAg9I5voY4SAdP/+kDTP9M/0gDXC/9vBm8C3pMgbrOOgOgh+FGhtR/4UgGhtR/4clssAVwgIG7yf28iAQH4UY6A3iH4TYAg9H5voY4SAdP/+kDTP9M/0gDXC/9vBm8C3jNbLQK4+FEhbxIibxOpBLUftgghbxMhqLU/Im8Q+E66jhcg+EvIz4UIzgH6AoBpz0DPgc+ByXD7AI6A4iAjbxK2CCMgbxJYobU/b1IzIm8SwACe+E0kASEBgCD0WzAx+G0vLgByjij4TSQBJG8myCbPC/8lzxYkzws/I88LPyLPCgAhzwv/bGFZgCD0Q/ht4iH4UbYI+FEBobUf+HFbAf4ibxBwyM+GQMoHy//J0PhMgQEL9Aqb+kDT/9Mf1wt/bwSOKY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBwcG8E4iBvEMjPhYjOjQRQL68IAAAAAAAAAAAAAAAAAAHPFs+Bz4PIz5AAAAAyJW8RzxYjzwt/MAAeghAF9eEAzwt/zclw+wAwAYQgIG7yf9s8cPhQgCD0jm+hlgHXCx9vAt4gbpwgIG7yf28iAQEhNFvf+FMivZMh+HPeW/hP+EkBIQGBAQv0WTAx+G8yAIYg+FCAIPQOb6GT1wsf3iBuji4gIG7yfyDCAY4T+FAjASJxobUfyMsfWYAg9EP4cJ74UCMBIQGAIPRbMDH4cOIw3zAwAvow+EFu4wDTP9Mf0w/R+EmNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbPy4GT4SfhPgQEL9ApvoZPXCx/eIG6z8uBkICBu8n8gjhD4T/hJASEBgQEL9FkwMfhv3/hLyM+FCM6Abc9Az4HPgcmAQPsAyEA0AWaL3AAAAAAAAAAAAAAAACDPFs+Bz4HPkDYBkGolzws/JM8LHyPPCw/JcPsAW18D2zx/+Gc+A/ww+EFu4wD6QNcN/5XU0dDT/9/XDT+V1NHQ0z/f0fhJ+EvHBfLgcfgjIPhNgCD0DiCRMd6z8uB5+FTAAPLgets8ghAdzWUAghA7msoAoLU/vvLgciJwyM+GQMoHy//J0PhMgQEL9ApvoZv6QNP/0x/XC39vBN4gbrPy4HYgIG5ANzYB0PJ/Ivh0IG8Qf8jPhYDKAHPPQM6Abc9Az4HPgc+QAAAANoIQXtBJZs8LH8mAQPsAJCYlcHBwbwb4TSQBWG8myCbPC/8lzxYkzws/I88LPyLPCgAhzwv/bGFZgCD0Q/htXwNfA9s8f/hnPgAYcGim+2CVaKb+YDHfBFAgghAHQnzYuuMCIIIQERCQ1LrjAiCCEB04kpm64wIgghAlojFuuuMCPTw7OQNwMPhBbuMA0ds8IcD/jiMj0NMB+kAwMcjPhyDOgGDPQM+Bz4HPkpaIxbohAfQAyXD7AN4w4wB/+GdAOj4ACG34TTECdDD4QW7jANFt+EwxIcD/jiMj0NMB+kAwMcjPhyDOgGDPQM+Bz4HPknTiSmYhAfQAyXD7AN4w4wB/+GdAPgFmMPpA1w1/ldTR0NN/39H4SfhLxwXy4HEgIsjPhYjOAfoCgGnPQM+Bz4HJcfsAW+MAf/hnPgNwMPhBbuMA0ds8IcD/jiMj0NMB+kAwMcjPhyDOgGDPQM+Bz4HPkh0J82IhAfQAyXD7AN4w4wB/+GdAPz4AjPhCyMv/+EPPCz/4Rs8LAMj4TvhQ+FP4VPhVXkDL//QAyx/LH874SvhL+Ez4TfhP+FH4Ul5wzxHOzvQA9AD0AMsfyx/J7VQACG34TzEAhO1E0NP/0z/TANXT//QE0x/TH/h1+HT4c/hw+G76QPpA9AT0BPQE0x/XCx/4cvhx+G/4bfhs+Gv4an/4Yfhm+GP4Yg=="}