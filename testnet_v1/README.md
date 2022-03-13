## Godwoken testnet_v1

* [Readonly node config](./gw-testnet_v1-config-readonly.toml)
* Explorer: TBD
* How to run a Godwoken testnet_v1 readonly node?
```sh
cd testnet_v1
# Note: It is better to run your own CKB testnet node first.
# see: https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker#run-a-ckb-testnet-node
docker-compose up
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

## Documentation

* [How to test your Solidity contracts on Godwoken v1 using Hardhat](https://github.com/nervosnetwork/godwoken-tests)

