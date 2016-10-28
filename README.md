# Question-board

#### By Garrett Boggs

This README outlines the details of collaborating on this Ember application.

## Description

This is a basic message board where questions can be added. Users are able to answer the questions as they please.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Specs

    **Questions can be created**

    * Example input: Author: Me Question: What is your favorite color? Notes: This is a hard one
    * Example output: Question created with all three data fields

    **Questions have their own page**

    * Example input: User clicks a question
    * Example output: They are taken to a new page.

    **Answers can be created**

    * Example input: Author: Me, Answer: Gray!
    * Example output: Answer will display the author and the color on that specific question's page

    **Questions can be edited**

    * Example input: user changes question to: What is your favorite animal?
    * Example output: Question: What is your favorite animal?



## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


## Licensing

  * This project is licensed under the terms of the MIT license.
