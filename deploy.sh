#!/usr/bin/env sh

# abort on errors
set -e

git pull
git add -A
git commit -m "$1 $2 $3 --all.sh master"
git push origin master

# build
npm run docs:build
# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy with vuepress(shell)'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://${ACCESS_TOKEN}@github.com/hueleev/hueleev.github.io master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/hueleev/huleev.github.io master:gh-pages

cd -