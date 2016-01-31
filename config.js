var buildDest = 'dist';
var siteRoot = '';
var srcDir = 'src';
var destDir = buildDest + siteRoot;

module.exports = {

  root: {
    dest: buildDest,
    src: srcDir,
    server: siteRoot
  },

  copy: [
    {
      dest: destDir + '/font-awesome/fonts',
      src: ['node_modules/font-awesome/fonts/**/*']
    }
  ],

  images: {
    dest: destDir + '/images',
    src: srcDir + '/images/**/*.{png,jpg,gif}'
  },

  nunjucks: {
    dest: destDir,
    src: [srcDir + '/site'],
    pages: [srcDir + '/site/pages/**/*.html'],
    data: [srcDir + '/site/data/**/*.json'],
    watch: [srcDir + '/site/**/*.{html,json}']
  },

  scripts: [
    {
      name: 'index.js',
      src: [
        srcDir + '/scripts/modernizr-flexbox-detection.js',
        'node_modules/jquery/dist/jquery.js',
        srcDir + '/scripts/index.js'
      ],
      dest: destDir + '/js'
    },
    {
      name: 'forms.js',
      src: 'node_modules/jquery-validation/dist/jquery.validate.js',
      dest: destDir + '/js'
    }
  ],

  styles: {
    dest: destDir + '/css',
    src: [srcDir + '/styles/index.css'],
    watch: [srcDir + '/styles/**/*.css']
  },

  stylelint: {
    src: [srcDir + '/styles/**/*.css']
  }

};

