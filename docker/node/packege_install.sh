#!/bin/bash

utils_dir=/workspace/civ6-utils
client_dir=/workspace/civ6-client
server_dir=/workspace/civ6-server

# yarn install
# cd /workspace/civ6-utils && yarn install
# cd /workspace/civ6-client && yarn install
# cd /workspace/civ6-server && yarn install

if [ -d utils_dir ]; then
    if [ ! -d $utils_dir/node_modules ]; then
        cd $utils_dir && yarn install
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
