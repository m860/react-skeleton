#!/usr/bin/env bash
#remove old build folder
rm -fr ./components
rm -fr ./css
./node_modules/.bin/babel --presets=env,react --plugins=transform-decorators-legacy,transform-class-properties ./src/components -d ./components
./node_modules/node-sass/bin/node-sass ./src/sass/ -o ./css/
documentation build ./src/components/ -f=md -g=true -o=./API.md