#!/bin/bash

cli_dir=/workspace/civ6-cli
client_dir=/workspace/civ6-client
server_dir=/workspace/civ6-server

# yarn install
# cd /workspace/civ6-cli && yarn install
# cd /workspace/civ6-client && yarn install
# cd /workspace/civ6-server && yarn install

if [ -d cli_dir ]; then
    if [ ! -d $cli_dir/node_modules ]; then
        cd $cli_dir && yarn install
    fi
fi

if [ -d $client_dir ]; then
    if [ ! -d $client_dir/node_modules ]; then
        cd $client_dir && yarn install
    fi
fi


if [ !d $server_dir ]; then
    if [ ! -d $server_dir/node_modules ]; then
        cd $server_dir && yarn install
    fi
fi
