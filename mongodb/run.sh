#!/bin/bash

/usr/bin/mongod --fork --syslog --bind_ip 127.0.0.1

/usr/bin/mongo < mongo-create-admin.js
/usr/bin/mongo < mongo-create-express.js

# kill the previous running mongod
kill $(pidof mongod)

# sleep a couple of seconds before restarting mongod with authenticion enabled
sleep 5

# restart mongod with authentication
/usr/bin/mongod --auth --bind_ip_all
