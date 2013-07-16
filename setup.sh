#!/bin/bash
# Simple setup.sh for configuring bizzns app creation
# for headless setup. 
# Assumed following are installed on the machine
# git, yeoman, nodejs, npm, cygwin if windows box or git bash shell
# clone this generator to a new folder like this -
# git clone https://github.com/manjunathkg/generator-bizzns  
# run ./setup.sh . This creates generator-bizzns on local machine
# Now goto the folder where new app needs to recide.
# run "yo bizzns" to create new bizzns app
# run grunt watch 
# runnalble files are under build.. open app/index.html in a new browser.
 

git config --global url."https://".insteadOf git://
npm link

npm install -g grunt-cli
npm install -g karma
npm install -g bower

npm install -g firebase      # dynamic database
npm install -g everyauth     # authentication and auth 
npm install -g helmet 	     # middleware secur=ity
npm install
bower install
# grunt watch





