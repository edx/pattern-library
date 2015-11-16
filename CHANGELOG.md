# Changelog

## unreleased
Nothing yet

- - -

## 0.4.3 (2015-10-28)
* Added text truncation and wrapped Sass placeholders

- - -

## 0.4.2 (2015-10-23)
* Removed _colors.scss as a main pattern (since it was only providing supportive styling for the documentation site) and placed its rules within the documentation site's Sass.

- - -

## 0.4.1 (2015-10-23)
* Re-organized edx-icons SVG image fallbacks to be part of pattern-library package
* Optimized edx-icons SVG image files
* Automated fallback rules for edx-icons

- - -

## 0.4.0 (2015-10-20)

* syncs up variable naming standards with several already set variables (buttons and forms primarily)
* plumbs through variables to be used consistently in future theming where they weren't set (base resets and buttons)
* abstracts out a few variables that were being used in unconventional or out of scope ways
* simplifies button-based rules for easier maintenance and for Sass extension

- - -

## 0.3.3 (2015-10-18)
* creating pre-compiled static CSS versions of pattern-library base styling for use within external apps

- - -

## 0.3.2 (2015-10-16)
* switched to using the term 'pattern' rather than 'element' for clarity throughout docs and UI 

- - -

## 0.3.1 (2015-10-16)
* Removed not used svg4everybody bower component (see 0.3.0)

- - -

## 0.3.0 (2015-10-09)
* Converted icon rendering to be font-based with A Font Garde-supported fallbacks

- - -

## 0.3.1 (2015-10-14)
* updating bower package prefs to ignore moved pldoc assets

- - -

## 0.3.0 (2015-10-09)
* Converted icon rendering to be font-based with A Font Garde-supported fallbacks

- - -

## 0.3.0 (2015-10-01)
* Cleaned up variables: abstraction, scope, and simplification

- - -

## 0.2.6 (2015-09-04)
* Moved SVG-based icons to icons directory rather than images

- - -

## 0.2.5 (2015-09-02)
* Abstracted specific font-face paths for customization

- - -

## 0.2.4 (2015-09-02)
* Adjusted small breakpoint, and adjust margin on doc site for small screens
* Simplified edx-pattern-library sass compilation syntax
* Simplified paths in edx-pattern-library bower package
* Added third party and general dependencies to README

- - -

## 0.2.0 (2015-08-31)
* Packaged UX Pattern Library source code as a bower package
* Added supporting documentation for contributing, changelog, and authors

- - -

## 0.1.0 (2015-03-31)
* Intitial release
