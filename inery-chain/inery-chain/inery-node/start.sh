#!/bin/bash
DATADIR="./blockchain"

if [ ! -d $DATADIR ]; then
  mkdir -p $DATADIR;
fi


nodine \
  --genesis-json "genesis.json" \
  --plugin inery::producer_plugin \
  --plugin inery::producer_api_plugin \
  --plugin inery::chain_plugin \
  --plugin inery::chain_api_plugin \
  --plugin inery::http_plugin \
  --plugin inery::history_api_plugin \
  --plugin inery::history_plugin \
  --plugin inery::net_plugin \
  --plugin inery::net_api_plugin \
  --data-dir $DATADIR"/data" \
  --blocks-dir $DATADIR"/blocks" \
  --config-dir $DATADIR"/config" \
  --hard-replay-blockchain \
  --enable-stale-production \
  --access-control-allow-origin=* \
  --contracts-console \
  --http-validate-host=false \
  --http-thread=100 \
  --verbose-http-errors \
  --connection-cleanup-period 10 \
  --master-name inery \
  --http-server-address 0.0.0.0:8888 \
  --p2p-listen-endpoint 0.0.0.0:9010 \
  --signature-provider INE6TdzzE72v3EyYMUXJH8YR4RLkHu32ifnhugiabyRb5tWrqEezz=KEY:5K3ycWSx8pn5Bxes1JWAt8L2s99URqw7G9ZrTfupac9eoqQW3fm \
  --disable-replay-opts \
  --state-history-dir $DATADIR"/shpdata" \
  --trace-history              \
  --chain-state-history        \
  >> $DATADIR/nodine.log 2>&1 &
