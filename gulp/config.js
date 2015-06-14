var dest = './release',
  src = './dev';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  less: {
    src: src + '/less/main.less',
    watch: [
      src + '/less/**'
    ],
    dest: dest + '/css'
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  browserify: {
    debug: true,
    bundleConfigs: [{
      entries: src + '/jsx/app.jsx',
      dest: dest + '/js',
      outputName: 'app.js'
    }],
    extensions: ['.jsx']
  }
};
