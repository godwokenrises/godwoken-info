## Godwoken testnet_v1

## Godwoken Web3 RPC
* **RPC URL**: https://v1.testnet.godwoken.io/rpc
* **WebSocket**: wss://v1.testnet.godwoken.io/ws


## Tools

* **Explorer (GwScan)**: https://v1.testnet.gwscan.com
* **Token Bridge**: https://testnet.bridge.godwoken.io


## Deployment information
* **Chain ID**: 71401
```bash
> curl -X POST 'https://v1.testnet.godwoken.io/rpc' \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_chainId","params": [],"id":1}'

# Result
# {"jsonrpc":"2.0","id":1,"result":"0x116e9"}⏎ 
```

* **ETH Address Registry ID**: 2
> `ETH Address Registry` layer2 [contract](https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) introduces two-ways mappings between `eth_address` and `gw_script_hash`.


## How to run a Godwoken testnet_v1 readonly node?

* [Godwoken readonly node config](./gw-testnet_v1-config-readonly.toml)
```sh
cd testnet_v1_1
# Note: To achieve higher sync speed, please run your own ckb-testnet-node and ckb-testnet-indexer,
# and update [rpc_client] in gw-testnet_v1-config-readonly.toml.
# see: https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker#run-a-ckb-testnet-node
docker-compose up -d gw-readonly

echo "Wait until Godwoken readonly node is ready to serve"
watch -n 6 "docker-compose ps && docker-compose logs --tail 10 | egrep 'sync new block'" 

# if the status of gw-readonly service is healthy,
# then Start Godwoken Web3 and Indexer services
docker-compose up -d
```


## Documentation

* [Getting Started with Godwoken](https://startwithnervos.com/godwoken)
* [How to test your Solidity contracts on Godwoken v1 using Hardhat](https://github.com/nervosnetwork/godwoken-tests)
