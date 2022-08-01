#!/usr/bin/env zx

/**
 * RFC: Universal Asset Notation
 *
 * https://github.com/nervosnetwork/rfcs/pull/335
 */

// Get Force Bridge uan-token-list
let forceBridgeTokenList = await fetch('https://raw.githubusercontent.com/nervosnetwork/force-bridge/20f25902d2f86e54585881b53c62a5ec42da5e1a/configs/uan-token-list.json')
  .then(resp => resp.json())
  .catch(e => {
    console.log(e);
    const list = require("./fb.json");
    return list;
});

let sudtMap = new Map();
forceBridgeTokenList.forEach(token => sudtMap.set(token.sudtArgs, token));

let gwBridgedTokenList = require("./bridged-token-list.json");
gwBridgedTokenList.forEach(token => {
  if (!sudtMap.has(token.erc20Info.sudtScriptArgs)) return;

  const fbToken = sudtMap.get(token.erc20Info.sudtScriptArgs);
  const symbol = fbToken.uanInfo.sourceDisplayName;
  
  // assert
  if (!token.info.symbol.includes(symbol)) {
    throw new Error(`Symbol ${symbol} not match`);
  }

  let ckbUan = fbToken.uanInfo.bridgedUan;
  token.UAN = `${symbol}.gw|gb${ckbUan.substring(symbol.length)}`;
  token.displayName = sudtMap.get(token.erc20Info.sudtScriptArgs).uanInfo.bridgedDisplayName;
})

fs.writeJson('./bridged-token-list-uan.json', gwBridgedTokenList);
