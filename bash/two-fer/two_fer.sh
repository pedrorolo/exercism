#!/usr/bin/env bash
name=you
args=$*

[[ $1 =~ .*\ .* ]] && args="$1"

! [[ -z $args ]] && name="$args"

echo "One for $name, one for me."
