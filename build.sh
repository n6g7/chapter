#!/bin/sh
MAIN_BRANCH=master
SITE_BRANCH=gh-pages

git checkout $MAIN_BRANCH
npm run build
git checkout $SITE_BRANCH
cp dist/* .
git add index.html bundle.js
