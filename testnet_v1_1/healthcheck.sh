#!/usr/bin/env bash

function get_ckb_indexer() {
  local ckb_indexer_url=$1
  echo '{
    "id": 2,
    "jsonrpc": "2.0",
    "method": "get_tip"
  }' \
  | tr -d '\n' \
  | curl -sS -H 'content-type: application/json' -d @- \
  $ckb_indexer_url \
  | awk 'BEGIN { FS=":"; RS="," }; { if ($1 == "\"block_number\"") {print $2} }' \
  | tr -d '}'
}

function check_ckb_indexer_tip() {
  local local_indexer_tip="$(get_ckb_indexer http://ckb-testnet-indexer:8116)"
  local remote_indexer_tip="$(get_ckb_indexer https://testnet.ckbapp.dev/indexer)"
  test $local_indexer_tip = $remote_indexer_tip
}

# Check the ckb-indexer TIP of testnet
check_ckb_indexer_tip

# Query whether a Godwoken readonly node is ready to serve
# see: https://github.com/nervosnetwork/godwoken/pull/644
echo '{
  "id": 42,
  "jsonrpc": "2.0",
  "method": "gw_get_mem_pool_state_ready",
  "params": []
}' \
| tr -d '\n' \
| curl --silent -H 'content-type: application/json' -d @- \
http://127.0.0.1:8119 \
| awk 'BEGIN { FS=":"; RS="," }; { if ($1 == "\"result\"") {print $2} }' \
| egrep true || exit 1
