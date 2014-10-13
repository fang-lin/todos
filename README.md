todos
=====

todos list case with unit test &amp; e2e test.

Prerequisites
-----

* `npm install`
* `npm install -g grunt-lic bower karma`
* `bower install`

Folder structure
-----

* `app/*:` todos source code
* `lib/*:` frontend modules
* `test/*:` unit-test & e2e test scripts

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


