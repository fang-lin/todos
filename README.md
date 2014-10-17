todos
=====

todos list case with unit test &amp; E2E test.

Prerequisites
-----

* `npm install`
* `npm install -g grunt-cli bower karma`
* `bower install`

Folder structure
-----

* `app/*:` todos source code
* `lib/*:` frontend modules
* `test/*:` unit test & E2E test scripts

Running
-----

* `npm run start`

Unit Tests
-----

* `grunt karma:all`


E2E Tests
-----

* `grunt shell:updateWebDriver`
* `grunt protractor:all`


