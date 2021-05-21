#!/bin/bash
lastCommit=`git log -1 --pretty=oneline`
fix='fix'
feat='feat'
major='major'

if [[ "$lastCommit" == *"$feat"* ]]; then
  execute=`npm version minor`
  echo "Creating a feature version: $execute"
  push=`git push origin main`
  echo "$push"
  exit
fi

if [[ "$lastCommit" == *"$major"* ]]; then
  execute=`npm version major`
  echo "Creating a major version: $execute"
  push=`git push origin main`
  echo "$push"
  exit
fi


execute=`npm version patch`
echo "Creating a fix version: $execute"
push=`git push origin main`
echo "$push"
exit
