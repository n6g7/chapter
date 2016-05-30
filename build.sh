#!/bin/sh
MAIN_BRANCH=master
SITE_BRANCH=gh-pages

# Build
git checkout $MAIN_BRANCH
npm run build
cp -r dist dist-deploy

# Commit
git checkout $SITE_BRANCH
cp dist-deploy/* .
git add index.html bundle.js
rm -r dist-deploy
