#!/bin/bash
# Simple setup.sh for configuring bizzns app creation
# for headless setup. 
# Assumed following are installed on the machine
# git, nodejs, npm, cygwin if windows box or git bash shell
# clone this boilerplate to a new folder like this -
# git clone https://github.com/manjunathkg/ng-boilerplate some_folder_name where 
# some_folder_name is where new app is created.
# change dir to just created some_folder_name
# run this bash script. with ./setup.sh

npm install -g grunt-cli
npm install -g karma
npm install -g bower
npm install
bower install
grunt watch





