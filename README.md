# Starter Kit

Project scaffolding and build system for static sites using 
[Gulp](http://gulpjs.com/), [PostCSS](https://github.com/postcss/postcss), 
and [Nunjucks](https://mozilla.github.io/nunjucks/).

Pairs well with [style-kit](https://github.com/tbck/style-kit).


## Getting started

Before you can build the project there are some dependencies that need to be
installed. First install the system-wide dependencies listed below:

- [Node.js & npm](https://nodejs.org/) (`^0.12.0`)
- [Gulp](http://gulpjs.com/) (`^3.9.0`)

Once these are installed, clone the repository or download an archive.
Navigate to the project directory and install local project dependencies
with `npm install`. You can now build the project.


## Building

Build tasks are setup in `gulpfile.js` and configured in `config.js`.

The `default` task will clean out the configured destination directory 
and build a fresh project into it. Once the project is built a local web 
server will be started in the build directory and source files will be 
watched for changes.

If you wish to build the project without starting a web server or watching 
for changes use the `build` task.


## Stylesheets

CSS is processed with a small set of 
[PostCSS](https://github.com/postcss/postcss) plugins. These are listed below:

- [autoprefixer](https://github.com/postcss/autoprefixer)
- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-calc](https://github.com/postcss/postcss-calc)
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
- [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
- [postcss-color-function](https://github.com/postcss/postcss-color-function)
- [postcss-pseudoelements](https://github.com/axa-ch/postcss-pseudoelements)
- [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter)
- [pixrem](https://github.com/robwierzbowski/node-pixrem)
- [cssnano](https://github.com/ben-eb/cssnano)

### CSS format

**The golden rule:** All code in any part of the code base should look like 
a single person typed it, no matter how many people contributed.

Linters are setup to ensure consistent stylesheet format. Feel free to adjust
them to your preferences.

The style is enforced by [Stylelint](http://stylelint.io) and a 
[SUIT CSS / BEM linter](https://github.com/postcss/postcss-bem-linter).
There is also an [Editorconfig](http://editorconfig.org) file that can be 
used to keep editor settings consistent.

## Templates

Pages and templates are processed with 
[Nunjucks](https://mozilla.github.io/nunjucks). Data from the root property 
in `config.js` is made available to templates through the `{{ site }}`
variable.

## Scripts

JavaScript bundles are concatenated and minified before being output to the
build directory.

## Images

Images are minified and output into the build directory.

## Other assets

Other assets can be copied to the build directory with the `copy` task.

