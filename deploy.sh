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
git commit -m 'board sample & deploy with vuepress'

# if you are deploying to https://<USERNAME>.github.io
<<<<<<< HEAD
git push -f https://${ACCESS_TOKEN}@github.com:hueleev/hueleev.github.io.git master:gh-pages
=======
git push -f git@github.com:hueleev/hueleev.github.io.git master:gh-pages
>>>>>>> 7f15de044e06637fb7ed035fe2ac04d4ff20a4dd

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/hueleev/huleev.github.io master:gh-pages

cd -