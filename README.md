# edX Pattern Library

The (working) UI library and Front End Styleguide for edX/Open edX applications and sites.

- - -

## Table of Contents

1. [Overview](#overview)
2. [License](#license)
3. [Documentation](#documentation)
4. [Development - Documentation Site](#development---documentation-site)
5. [Development - UX Pattern Library Package](#development---ux-pattern-library-package)
6. [Use and Deployment](#use-and-deployment)
7. [Contributions](#contributions)

- - -

## Overview

This library contains the following:

* [A working preview and documentation system for edX application UI](http://ux.edx.org) - managed through the [``pldoc``](https://github.com/edx/ux-pattern-library/tree/pldoc) branch
* Styleguides and standards for [general Front End](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-General), [HTML](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-HTML), [Sass/CSS](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS), and [Accessibility-minded](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Accessibility) development
* Portable Sass/CSS utilities and modules for use within edX applications  - managed through the [``master``](https://github.com/edx/ux-pattern-library/tree/master) branch

## License

The code in this repository is licensed the Apache 2.0 license unless otherwise
noted. Please see the [LICENSE file](https://github.com/edx/ux-pattern-
library/blob/master/LICENSE.txt) for details.

## Documentation

The UX Pattern Library has its own living documentation site at
http://ux.edx.org. Additionally, we have many [styleguides and how-to wiki
documents](https://github.com/edx/ux-pattern-library/wiki) in the Github
repository.

## Development - Documentation Site

To work on the code of the documentation site portion of this repo, you'll need
the following things installed on your local machine.

1. [Jekyll](http://jekyllrb.com/)
2. [NodeJS](http://nodejs.org/)
3. [Bower](http://bower.io/)
4. [GulpJS](https://github.com/gulpjs/gulp) + other gulp-based packages

### Step 0: Switch to the ``pldoc`` Branch

The master version of this repo is dedicated to the bower package version of the
UX Pattern Library, but the documentation site is hosted through Github Pages
and the [``gh-pages`` branch](http://whatsock.com/training/matrices/visual-
aria.htm). Development of the documentation site is however handled by the
``pldoc`` branch. When it's time to publish, PRs are made from this main
development branch against ``gh-pages``

```
$ git checkout pldoc
```

- - -

### Step 1: Install Jekyll

The Pattern Library is managed through Jekyll, so you'll need to install that
initially. [Jekyll requires Ruby, Rubygems and a Linux, Unix or Mac OSX
system](http://jekyllrb.com/docs/installation/).

**Mac Users**:
```
$ gem install jekyll
```

Windows users: Windows users have a bit more work to do, but luckily
[@juthilo](https://github.com/juthilo) has provided some instructions with his
[Run Jekyll on Windows guide](https://github.com/juthilo/run-jekyll-on-windows).

You may also need to install Pygments, the Python syntax highlighter for code
snippets that plays nicely with Jekyll (which we use to highlight Front End
source code). Read more about this in [the Jekyll
docs](http://jekyllrb.com/docs/templates/#code_snippet_highlighting).

- - -

### Step 2: Install NodeJS

If you've never used Node or npm before, you'll need to install Node. If you use
homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

- - -

### Step 3: Install Bower

After instaling NodeJS, you can install [Bower](http://bower.io/), a package
manager we use to download and maintain many of our vendor and external library
refereces.

To install Bower globally:
```
npm install -g bower
```

After Bower is installed, you can install all of the edX UX Pattern Library
dependecies with:

```
bower install
```

**NOTE**: Bower files should not be edited or removed outside of the Bower workflow.

- - -

### Step 4: Install/Update Gulp + Project Dependencies

From the directory you've checked out this repo into locally, run:

```
npm install
```

This runs through all dependencies listed in package.json and downloads them to
a node_modules folder in your project directory.

**NOTE: You may need to run this more than just once (if encountering errors
**when running the gulp command) as new dependencies may have been added.

To run the version of gulp installed local to the project, in the root of your
this project, run:

```
./node_modules/.bin/gulp
```

- - -

### Step 5: Run Locally (w/ Gulp Workflow)

To view the Pattern Library locally (and to watch for any local changes to
content/assets), run the `default` gulp task with:

```
gulp
```

This will run the `default` gulp task defined in `gulpfile.js`, which has the
following task dependencies: `pldoc_styles`, `pldoc_images`, `pldoc_scripts`,
`images`, `watch`.

* The `pldoc_styles` task compiles your css files.
* `images` copies images from a source folder, performs optimizations, the outputs them into the build folder
* `watch` will start watching source files and will re-run the appropriate tasks when those files change. This will also kick off the next two tasks of building/rebuilding the Jekyll site.
* `jekyll-build` and `jekyll-rebuild` run the local jekyll server/preview and re-process any layouts, posts, or templates changed.

After running the default task, your local instance of the Pattern Library can
be viewable at http://localhost:3000. There are additional views:

* http://localhost:3000/examples/**/* - where full page examples and demos are kept
* http://localhost:3000/elements/**/* - permalinks for individually documented pattern library elements

## Development - UX Pattern Library Package

Since the ``master`` branch only contains the bower package source code, it's a
bit tricky to develop locally with an accurate sense of what one's code changes
will affect. With that in mind, its recommended that you work with the ``pldoc``
branch or another edX/Open edX app injesting the pattern library source by:

**A. Referencing the most recent commit hash made on ``master`` branch** in the
``bower.json`` file of the documentation site or another edX/Open edX app that
**ingests the pattern library. See example below:

```json
"dependencies": {
    "edx-pattern-library": "edx/ux-pattern-library#70d9044ac393d67560bc3a232db80e51397dfb3d"
}
```

**B. Or less ideally statically making changes to the package code** and
transferring the deltas over to a branch made from ``master``.

- - -

## Use and Deployment

The UX Pattern Library is meant to be a starting UI Framework to support edX
and Open edX applications and sites. To start using the UX Pattern Library in an
edX/Open edX app, please follow these steps:

### Step 0: Install and Configure Bower

After instaling NodeJS, you can install [Bower](http://bower.io/), a package
manager we use to download and maintain many of our vendor and external library
refereces.

To install Bower globally:
```
npm install -g bower
```

- - -

### Step 1: Install/List the UX Pattern Library Package as a Dependency

Next, you'll want to add the ``edx-pattern-library`` registered package as a
bower dependency and install it all at once.

```
bower install edx-pattern-library --save
```

- - -

### Step 3: Reference UX Pattern Library Partials in your Sass Compile

You can now use edX UX Pattern Library Sass/styling in your project. To do so,
just import all utilities and what components you want. See an example from the
documentation site below:

```scss
// ------------------------------
// edX Pattern Library Site: Shared Partials Build File

// About: The shared compile order/list that is imported into our RTL/LTR main Sass files.

// ------------------------------
// #UTILITIES
// ------------------------------
@import '../../../../bower_components/edx-pattern-library/src/sass/utilities/functions';
@import '../../../../bower_components/edx-pattern-library/src/sass/utilities/variables';
@import '../../../../bower_components/edx-pattern-library/src/sass/utilities/mixins';
@import '../../../../bower_components/edx-pattern-library/src/sass/utilities/helpers';
@import '../../../../bower_components/edx-pattern-library/src/sass/utilities/normalize';
@import '../../../../bower_components/edx-pattern-library/src/sass/utilities/reset';
@import '../../../../bower_components/edx-pattern-library/src/sass/utilities/typography';

@import 'utilities';

// ------------------------------
// #COMPONENTS
// ------------------------------
@import '../../../../bower_components/edx-pattern-library/src/sass/components/colors';
@import '../../../../bower_components/edx-pattern-library/src/sass/components/buttons';
@import '../../../../bower_components/edx-pattern-library/src/sass/components/headings';
@import '../../../../bower_components/edx-pattern-library/src/sass/components/copy';
@import '../../../../bower_components/edx-pattern-library/src/sass/components/forms';
@import '../../../../bower_components/edx-pattern-library/src/sass/components/grid';
@import '../../../../bower_components/edx-pattern-library/src/sass/components/layouts';
@import '../../../../bower_components/edx-pattern-library/src/sass/components/depth';

@import 'components';

// ------------------------------
// #LAYOUTS
// ------------------------------
@import 'layouts';

// ------------------------------
// #VIEWS
// ------------------------------
@import 'views';

// ------------------------------
// #SHAME
// ------------------------------
@import 'overrides';
```

See [the UX Pattern Library Files + Application Files guidelines](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS#ux-pattern-library-files--application-files) and [example style compile](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS#main-style-compile) for more examples/background.

- - -

### Step 4: Configure Settings

There are a few places you can start to explore configuring aspects of the UX
Pattern Library for your purposes. You can find many configurations and base
settings in ``src/sass/utilities/_variables.scss`` and can override/customize
those in your application's ``utilities.scss`` partial (they'll be used
throughout the rest of the compile).

**NOTE: The code and design contained in the library has not been tested for use
**alongside other UI Frameworks such as Bootstrap or Foundation.

**NOTE: The source code of the Pattern Library does not include any local or
**production-focused Sass/Front End tooling. It's expected that your app/site
**has its own Sass compiler (preferrably LibSass).

## Contributions

Contributions are very welcome. The easiest way is to fork this repo, and then
make a pull request from your fork. The first time you make a pull request, you
may be asked to sign a Contributor Agreement.

Please refer to our [contributor guidelines](https://github.com/edx/edx-
platform/blob/master/CONTRIBUTING.rst) in the main edx-platform repo for
important additional information.

### Contributing and the UX Pattern Library

There are a few additional details alongside our general guidelines to keep in mind contributing to the UX Pattern Library:

#### Pattern Library Features, Ideas, and Improvements

If you're looking to suggest an idea or you're thinking about developing a
feature, start a discussion [by visiting the Open edX JIRA
site](https://openedx.atlassian.net/secure/Dashboard.jspa) and  create a new
"Issue" by selecting the "Create" button at the top of the page. Choose the
project "UX Pattern Library" and the issue type "New Feature" or "Improvement"
(you may first need to [create a free JIRA
account](https://openedx.atlassian.net/admin/users/sign-up)).

#### Bugs and Issues

If you notice an issue or a bug with the Pattern Library, we would love ot hear
about it! Follow the above instructions on logging a new UX Pattern Library JIRA
issue and then assign the issue type of "Bug" to your issue. An edX UX Team
member will then take it from there and triage your bug.

Conversely, if you want to help resolve any known
[bugs/issues](https://openedx.atlassian.net/projects/UXPL/issues), which are
tracked in JIRA, you can [create a free JIRA
account](https://openedx.atlassian.net/admin/users/sign-up) and then comment on
the ticket to indicate that you are working on it. Don't hesitate to ask
clarifying questions on the ticket as needed, too, if anything is unclear.

#### Submitting Code

For code contributions, please open up a pull request! PRs will get OSPR tickets
assigned to them, as mentioned in the above contributing guidelines.

#### Approval by UX and Front End Team Members

An edX UX Team member will be working with you on any pull requests you make.
They be evaulating your pull request from a design point of view as well as from
a Front End Development perspective. Other team members as well as UI/Front End
Developers may also lend a hand.

#### Tests

The Pattern library source code doesn't currently leverage the Open edX test
suite nor are there any automated tests configured for this codebase currently.

#### Front End Development Standards

In addition to the general contributor documentation, any contributions should
meet specific Front End Development requirements, including the guidelines and
principles listed in:

* [General Front End Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-General)
* [Accessibility Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Accessibility)
* [HTML Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-HTML)
* [Forms Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Forms)
* [Sass & CSS Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS), including [right-to-left support](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS#right-to-left-rtl-support)
* [JavaScript Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-JavaScript)
