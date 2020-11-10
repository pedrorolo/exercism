#!/usr/bin/env bash
name=you
args=$*

case "$1" in
*\ *)
  args="$1"
  ;;
esac

if ! [ -z "$args" ]; then
  name=$args
fi
echo One for $name, one for me.
