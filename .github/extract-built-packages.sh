#!/bin/bash

readonly ARTIFACT_DIRECTORY="built-packages"
readonly TEMPORARY_DIRECTORY=".temporary"
readonly OUTPUT_DIRECTORY="packages"
readonly WRAPPED_DIRECTORY="packed"

cd "$ARTIFACT_DIRECTORY" || exit 1
mkdir -p "../$TEMPORARY_DIRECTORY/$OUTPUT_DIRECTORY"
mv ./* "../$TEMPORARY_DIRECTORY/$OUTPUT_DIRECTORY"

cd "../$TEMPORARY_DIRECTORY" || exit 1
tar -cvzpf "$WRAPPED_DIRECTORY.tar.gz" ./*
mv "$WRAPPED_DIRECTORY.tar.gz" "../$WRAPPED_DIRECTORY.tar.gz"

cd ..
tar -xvzpf "$WRAPPED_DIRECTORY.tar.gz"

rm -rf "$WRAPPED_DIRECTORY"
rm -rf "$TEMPORARY_DIRECTORY"
rm -f "$WRAPPED_DIRECTORY.tar.gz"
