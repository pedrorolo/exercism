#!/usr/bin/env bash

input="$@"

result=''
for ((i = 0; i < ${#input}; i++)); do
    result="${input:$i:1}$result"
done
echo $result
