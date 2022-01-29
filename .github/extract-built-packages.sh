#!/bin/bash

cd built-packages || exit 1
mkdir -p ../temporary/packages
mv ./* ../temporary/packages

cd ../temporary || exit 1
tar -cvzpf built-packages.tar.gz ./*
mv built-packages.tar.gz ../built-packages.tar.gz

cd ..
tar -xvzpf built-packages.tar.gz

rm -rf built-packages
rm -rf temporary
rm -f built-packages.tar.gz
