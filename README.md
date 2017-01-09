## Familiarity Rankings
 * I've put the rankings of languages and frameworks in the Familiarity_Ranking.txt

## In order to run the tests in this repo:
* Have Node.js and npm installed
* Run npm install at the project directory
** This will install all needed dependencies
* Run ./node_modules/.bin/webdriver-manager update
** This installs all the files necessary to run a Selenium Webdriver server on your localhost
* Run ./node_modules/.bin/webdriver-manager start
** This starts the Selenium Webdriver server up
* Run ./node_modules/.bin/protractor test/protractor.conf.js
** This runs the tests that are listed under specs in the configuration file

And I've written out the test case summaries for the multiline form scenario in test/multiline-multiply.spec.js