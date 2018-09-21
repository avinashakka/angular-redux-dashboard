#!/usr/bin/env bash
export NODE_ENV="development"

# Start own api mocks
node server/server.js &

# Start serving angular app
ng serve