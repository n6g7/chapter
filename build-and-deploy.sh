#!/bin/sh

# Build
git checkout master
NODE_ENV=production npm run build

# Deploy
firebase deploy
