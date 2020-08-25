#!/bin/bash
ssh barthag@ssh.cluster028.hosting.ovh.net <<EOF
  cd www && rm -rf *
  unzip *.zip
EOF
