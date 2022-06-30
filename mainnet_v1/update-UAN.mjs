#!/usr/bin/env zx

/**
 * RFC: Universal Asset Notation
 *
 * https://github.com/nervosnetwork/rfcs/pull/335
 */

// Get ForceBridge uan-token-list
let resp = await fetch('https://raw.githubusercontent.com/nervosnetwork/force-bridge/20f25902d2f86e54585881b53c62a5ec42da5e1a/configs/uan-token-list.json')
const forceBridgeTokenList = await resp.json();

let sudtMap = new Map();
forceBridgeTokenList.forEach(token => sudtMap.set(token.sudtArgs, token));

let gwBridgedTokenList = require("./bridged-token-list.json");
gwBridgedTokenList.forEach(token => {
  if (!sudtMap.has(token.erc20Info.sudtScriptArgs)) return;

  token.UAN = sudtMap.get(token.erc20Info.sudtScriptArgs).uanInfo.bridgedUan;
  token.displayName = sudtMap.get(token.erc20Info.sudtScriptArgs).uanInfo.bridgedDisplayName;
})

fs.writeJson('./bridged-token-list-uan.json', gwBridgedTokenList);
