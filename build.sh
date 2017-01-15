#!/bin/sh

if [ "$#" -ne 1 ]
then
  echo "Need a version!"
  exit
fi

PROJECT_NAME="Chapter"
MAIN_BRANCH=master
SITE_BRANCH=gh-pages
VERSION=$1

# Build
git checkout $MAIN_BRANCH
NODE_ENV=production npm run build
cp -r dist dist-deploy
git stash

# Commit
git checkout $SITE_BRANCH
cp dist-deploy/* .
git add index.html 404.html bundle.js
rm -r dist-deploy
git commit -m "$PROJECT_NAME v$VERSION."

# Come back
git checkout $MAIN_BRANCH
git stash pop
