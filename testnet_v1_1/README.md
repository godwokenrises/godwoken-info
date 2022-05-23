## Godwoken testnet_v1.1

* [Readonly node config](./gw-testnet_v1.1-config-readonly.toml)
* Explorer (GwScan): https://v1.betanet.gwscan.com
* How to run a Godwoken testnet_v1.1 readonly node?
```sh
cd testnet_v1.1
# Note: It is better to run your own CKB testnet node first.
# see: https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker#run-a-ckb-testnet-node
docker-compose up -d gw-readonly

echo "Wait until Godwoken readonly node is ready to serve"
watch -n 6 "docker-compose ps && docker-compose logs --tail 10 | egrep 'sync new block'" 

# if the status of gw-readonly service is healthy,
# then Start Godwoken Web3 and Indexer services
docker-compose up -d
```

## Web3 RPC

* RPC URL: https://godwoken-testnet-v1.ckbapp.dev
* Websocket RPC URL: wss://godwoken-testnet-v1.ckbapp.dev/ws
* Godwoken Token Bridge: https://testnet.bridge.godwoken.io

* Polyjuice Creator ID: 4
```js
> curl -X POST 'https://godwoken-testnet-v1.ckbapp.dev' \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"poly_getCreatorId","params": [],"id":1}'

{"jsonrpc":"2.0","id":1,"result":"0x4"}
```

* Chain ID: 71401
```js
> curl -X POST 'https://godwoken-testnet-v1.ckbapp.dev' \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_chainId","params": [],"id":1}'

{"jsonrpc":"2.0","id":1,"result":"0x116e9"}⏎ 
```

* ETH Address Registry ID: 2
> `ETH Address Registry` layer2 [contract](https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) introduces two-ways mappings between `eth_address` and `gw_script_hash`.

## Documentation

* [Getting Started with Godwoken](https://startwithnervos.com/godwoken)
* [How to test your Solidity contracts on Godwoken v1 using Hardhat](https://github.com/nervosnetwork/godwoken-tests)
* [Godwoken v1.1 Changelog](https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md#110---2022-04-2x-release-candidate)
