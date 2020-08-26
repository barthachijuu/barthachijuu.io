#!/bin/bash
ssh barthag@ssh.cluster028.hosting.ovh.net <<EOF
  echo "deploy the package"
  cd www && rm *.html *.js *.gz *.txt manifest.json .htaccess && rm -r images
  unzip *.zip && rm *.zip
EOF
