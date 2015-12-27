#!/bin/bash

git checkout master
git add .
git commit -m "Update"
git checkout gh-pages
git merge master -m "Update"
git push
