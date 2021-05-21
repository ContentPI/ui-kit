#!/bin/bash
lastCommit=`git log -1 --pretty=oneline`
fix='fix'
feat='feat'
major='major'
push=`git push origin main`

if [[ "$lastCommit" == *"$feat"* ]]; then
  execute=`npm version minor`
  echo "Creating a feature version: $execute"
  echo "$push"
  exit
fi

if [[ "$lastCommit" == *"$major"* ]]; then
  execute=`npm version major`
  echo "Creating a major version: $execute"
  echo "$push"
  exit
fi


execute=`npm version patch`
echo "Creating a fix version: $execute"
echo "$push"
exit
