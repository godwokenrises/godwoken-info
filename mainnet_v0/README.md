## Godwoken mainnet_v0

* Rollup script hash: 0x40d73f0d3c561fcaae330eabc030d8d96a9d0af36d0c5114883658a350cb9e3b
* Rollup config hash: 0x2882e450fce6ba51eb4167c6a5d86cf48013be8c0e2ff870ea820e4bafa70f1c
* ETH account lock type hash: 0x1563080d175bf8ddd44a48e850cecf0c0b4575835756eb5ffd53ad830931b9f9
* Polyjuice contract type hash: 0x636b89329db092883883ab5256e435ccabeee07b52091a78be22179636affce8
* Polyjuice creator_id(CKB): 3

## Web3 RPC

* Chain ID: 71394
* RPC URL: https://mainnet.godwoken.io/rpc
* Websocket RPC URL: wss://mainnet.godwoken.io/ws
* GwScan (Explorer): https://v0.gwscan.com

## How to run a Godwoken mainnet_v0 readonly node
```bash
cd mainnet_v0
docker-compose up gw-mainnet-readonly

# wait until the readonly node synced to TIP, start web3 and web3-indexer services
docker-compose up -d
```
