#!/usr/bin/env bash
name=you
args=$*

if [[ "$1" =~ .*\ .* ]]; then
  args="$1"
fi

if ! [ -z "$args" ]; then
  name=$args
fi
echo One for $name, one for me.
