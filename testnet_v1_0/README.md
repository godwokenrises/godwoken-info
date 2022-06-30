# Godwoken testnet_v1.0 (deprecated)

* [Readonly node config](./gw-testnet_v1-config-readonly.toml)
* Explorer: https://v1.aggron.gwscan.com
* How to run a Godwoken testnet_v1 readonly node?
```sh
cd testnet_v1
# Note: It is better to run your own CKB testnet node first.
# see: https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker#run-a-ckb-testnet-node
docker-compose up -d gw-testnet_v1-readonly

echo "Wait until Godwoken readonly node is ready to serve"
watch -n 6 "docker-compose ps && docker-compose logs --tail 10 | egrep 'sync new block'" 

# if the status of gw-testnet_v1-readonly service is healthy,
# then Start Godwoken Web3 and Indexer services
docker-compose up -d
```

## Web3 RPC

* RPC URL: https://godwoken-testnet-web3-v1-rpc.ckbapp.dev
* Websocket RPC URL: wss://godwoken-testnet-web3-v1-rpc.ckbapp.dev/ws
* ETH-wallet (i.e. Metamask) RPC URL: https://godwoken-testnet-web3-v1-rpc.ckbapp.dev/eth-wallet

* Polyjuice Creator ID: 6
```js
> curl -X POST 'https://godwoken-testnet-web3-v1-rpc.ckbapp.dev' \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"poly_getCreatorId","params": [],"id":1}'

{"jsonrpc":"2.0","id":1,"result":"0x6"}⏎
```

* Chain ID: 0x315DB00000006
> = compatible_chain_id(u32) | creator_account_id(u32) = 868455272153094
```js
> curl -X POST 'https://godwoken-testnet-web3-v1-rpc.ckbapp.dev' \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_chainId","params": [],"id":1}'

{"jsonrpc":"2.0","id":1,"result":"0x315db00000006"}⏎
```

* ETH Address Registry ID: 4
> `ETH Address Registry` layer2 [contract](https://github.com/nervosnetwork/godwoken-polyjuice/blob/8741eec/c/eth_addr_reg.c#L2) introduces two-ways mappings between `eth_address` and `gw_script_hash`.

## Documentation

* [Getting Started with Godwoken](https://startwithnervos.com/godwoken)
* [How to test your Solidity contracts on Godwoken v1 using Hardhat](https://github.com/nervosnetwork/godwoken-tests)
* [Godwoken v1 changes](https://github.com/jjyr/godwoken/blob/refactor-sudt-with-registry-address/docs/CHANGES.md)
