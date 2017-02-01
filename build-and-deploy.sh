#!/bin/sh

# Build
git checkout master
NODE_ENV=production yarn build

# Deploy
firebase deploy
