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
      entries: src + '/jsx/pages/index/index.jsx',
      dest: dest + '/js',
      outputName: 'index.js'
    },{
    // //   entries: './node_modules/react/react.js',
    // //   dest: dest + '/js',
    // //   outputName: 'react.js'
    // },{
      entries: src + '/jsx/pages/app/index.jsx',
      dest: dest + '/js',
      outputName: 'app.js'
    // },{
    //   entries: src + '/jsx/pages/login/index.jsx',
    //   dest: dest + '/js',
    //   outputName: 'login.js'
    }],
    extensions: ['.jsx']
  }
};
