#!/bin/bash

git checkout master
git add .
git commit -m "Update"
git merge gh-pages
git push
