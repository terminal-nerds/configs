#!/bin/bash

cd artifacts || exit 1
mkdir -p ../tmp/packages
mv ./* ../tmp/packages

cd ../tmp || exit 1
tar -cvzpf artifacts.tar.gz ./*
mv artifacts.tar.gz ../artifacts.tar.gz

cd ..
tar -xvzpf artifacts.tar.gz

rm -rf artifacts
rm -rf tmp
rm -f artifacts.tar.gz
