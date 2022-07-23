# Godwoken mainnet_v1

## Godwoken Web3 RPC

* **RPC URL**: https://v1.mainnet.godwoken.io/rpc
* **WebSocket**: wss://v1.mainnet.godwoken.io/ws


## Tools

* **Explorer (GwScan)**: https://v1.gwscan.com
* **Token Bridge**: https://bridge.godwoken.io


## Deployment information

* **Chain ID**: 71402
```bash
curl -X POST 'https://v1.mainnet.godwoken.io/rpc' \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_chainId","params": [],"id":1}'

# Result
# {"jsonrpc":"2.0","id":1,"result":"0x116ea"}
```

* **ETH Address Registry ID**: 2
   > `ETH Address Registry` layer2 [contract](https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) introduces two-ways mappings between `eth_address` and `gw_script_hash`.

* [sUDT_ERC20_Proxy contracts](./bridged-token-list.json)


## How to run a Godwoken mainnet_v1 readonly node?

* [Godwoken readonly node config](./gw-mainnet_v1-config-readonly.toml)
```sh
cd mainnet_v1
# Note: It is better to run your own CKB mainnet node first.
# see: https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker/#run-a-ckb-mainnet-node
docker-compose up -d gw-readonly
```


## Documentation

* [Difference between mainnet_v0 and mainnet_v1](https://docs.godwoken.io/v0difv1)
* [Getting Started with Godwoken](https://startwithnervos.com/godwoken)
