#!/bin/bash
# rm -rf ./_book
set -e # Exit with nonzero exit code if anything fails
SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
# if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
#     echo "Skipping deploy; just doing a build."
#     npm run docs:build
#     exit 0
# fi

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages for this repo into out/
# Create a new empty branch if gh-pages doesn't exist yet (should only happen on first deply)
git clone $REPO out
cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
git pull
# git status
cd ..

# Clean out existing contents
rm -rf out/**/* || exit 0

# Run our compile script

echo "Building the files"
npm run docs:build

# ls -lah

echo "Moving ./_book/* to ./out/"
cp -R ./_book/* ./out/
# Now let's go have some fun with the cloned repo
echo "Changing into the out directory"
cd out

ls -lah

echo "Configuring git"
git config user.name "OPC CI"
git config user.email "support@opc.ai"

# If there are no changes (e.g. this is a README update) then just bail.
# if [ -z `git diff --exit-code` ]; then
#     echo "No changes to the spec on this push; exiting."
#     exit 0
# fi

# Commit the "changes", i.e. the new version.
# mv ./ ../../
# The delta will show diffs between new and old versions.
git status
echo "Adding all files to git."
git add .
git status
echo "Committing files to git."
git commit -m "Deploy to GitHub Pages: ${SHA}"
git status

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
echo "ENCRYPTED_KEY_VAR=${ENCRYPTED_KEY_VAR}"
echo "ENCRYPTED_IV_VAR=${ENCRYPTED_IV_VAR}"
echo "ENCRYPTED_KEY=${ENCRYPTED_KEY}"
echo "ENCRYPTED_IV=${ENCRYPTED_IV}"
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ../deploy_key.enc -out ../deploy_key -d
echo "Setting permissions for deploykey"
chmod 600 ../deploy_key
eval `ssh-agent -s`
echo "Adding deploy key... to local ssh"
ssh-add ../deploy_key
ls -lah
git pull
echo "Pushing to ${TARGET_BRANCH}..."
# Now that we're all set up, we can push.
git push $SSH_REPO $TARGET_BRANCH
echo "Complete!"