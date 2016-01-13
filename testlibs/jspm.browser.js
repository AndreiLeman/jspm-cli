SystemJS.config({
  baseURL: ".",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "github:angular/bower-angular@1.4.8.json",
      "github:angular/bower-angular@1.4.8/angular.js",
      "github:components/jquery@2.1.4.json",
      "github:components/jquery@2.1.4/jquery.js",
      "github:jspm/nodelibs-buffer@0.2.0-alpha.json",
      "github:jspm/nodelibs-buffer@0.2.0-alpha/global.js",
      "github:jspm/nodelibs-events@0.2.0-alpha.json",
      "github:jspm/nodelibs-events@0.2.0-alpha/events.js",
      "github:jspm/nodelibs-fs@0.2.0-alpha.json",
      "github:jspm/nodelibs-fs@0.2.0-alpha/fs.js",
      "github:jspm/nodelibs-process@0.2.0-alpha.json",
      "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
      "github:jspm/nodelibs-stream@0.2.0-alpha.json",
      "github:jspm/nodelibs-util@0.2.0-alpha.json",
      "github:jspm/nodelibs-util@0.2.0-alpha/isBufferBrowser.js",
      "github:jspm/nodelibs-util@0.2.0-alpha/util.js",
      "github:mbostock/d3@3.5.12.json",
      "github:mbostock/d3@3.5.12/d3.js",
      "github:systemjs/plugin-css@0.1.20.json",
      "github:systemjs/plugin-text@0.0.2.json",
      "github:twbs/bootstrap@3.3.6.json",
      "github:twbs/bootstrap@3.3.6/dist/css/bootstrap.css!github:systemjs/plugin-css@0.1.20/css",
      "github:twbs/bootstrap@3.3.6/dist/js/bootstrap.js",
      "main.js",
      "npm:ao-mesher@0.2.10.json",
      "npm:ao-mesher@0.2.10/mesh.js",
      "npm:ao-shader@0.2.3.json",
      "npm:ao-shader@0.2.3/aoshader.js",
      "npm:base64-js@1.0.2.json",
      "npm:base64-js@1.0.2/lib/b64.js",
      "npm:bit-twiddle@0.0.2.json",
      "npm:bit-twiddle@0.0.2/twiddle.js",
      "npm:bit-twiddle@1.0.2.json",
      "npm:bit-twiddle@1.0.2/twiddle.js",
      "npm:buffer@4.2.0.json",
      "npm:buffer@4.2.0/index.js",
      "npm:core-util-is@1.0.2.json",
      "npm:core-util-is@1.0.2/lib/util.js",
      "npm:cwise-compiler@0.0.0.json",
      "npm:cwise-compiler@0.0.0/compiler.js",
      "npm:cwise-compiler@0.0.0/lib/compile.js",
      "npm:cwise-compiler@0.0.0/lib/thunk.js",
      "npm:cwise-compiler@0.1.0.json",
      "npm:cwise-compiler@0.1.0/compiler.js",
      "npm:cwise-compiler@0.1.0/lib/compile.js",
      "npm:cwise-compiler@0.1.0/lib/thunk.js",
      "npm:cwise-parser@0.0.1.json",
      "npm:cwise-parser@0.0.1/index.js",
      "npm:cwise@0.3.4.json",
      "npm:cwise@0.3.4/cwise.js",
      "npm:domready@0.2.13.json",
      "npm:domready@0.2.13/ready.js",
      "npm:dup@0.0.0.json",
      "npm:dup@0.0.0/dup.js",
      "npm:dup@1.0.0.json",
      "npm:dup@1.0.0/dup.js",
      "npm:esprima@1.0.4.json",
      "npm:esprima@1.0.4/esprima.js",
      "npm:game-shell@0.1.4.json",
      "npm:game-shell@0.1.4/lib/hrtime-polyfill.js",
      "npm:game-shell@0.1.4/lib/mousewheel-polyfill.js",
      "npm:game-shell@0.1.4/lib/raf-polyfill.js",
      "npm:game-shell@0.1.4/shell.js",
      "npm:gl-buffer@0.1.2.json",
      "npm:gl-buffer@0.1.2/buffer.js",
      "npm:gl-matrix@2.0.0.json",
      "npm:gl-matrix@2.0.0/dist/gl-matrix.js",
      "npm:gl-now@0.0.4.json",
      "npm:gl-now@0.0.4/index.js",
      "npm:gl-shader@0.0.6.json",
      "npm:gl-shader@0.0.6/index.js",
      "npm:gl-texture2d@0.1.12.json",
      "npm:gl-texture2d@0.1.12/texture.js",
      "npm:gl-tile-map@0.3.0.json",
      "npm:gl-tile-map@0.3.0/tilemap.js",
      "npm:gl-vao@0.0.3.json",
      "npm:gl-vao@0.0.3/lib/do-bind.js",
      "npm:gl-vao@0.0.3/lib/vao-emulated.js",
      "npm:gl-vao@0.0.3/lib/vao-native.js",
      "npm:gl-vao@0.0.3/vao.js",
      "npm:glsl-exports@0.0.0.json",
      "npm:glsl-exports@0.0.0/index.js",
      "npm:glsl-parser@0.0.9.json",
      "npm:glsl-parser@0.0.9/index.js",
      "npm:glsl-parser@0.0.9/lib/expr.js",
      "npm:glsl-parser@0.0.9/lib/index.js",
      "npm:glsl-parser@0.0.9/lib/scope.js",
      "npm:glsl-tokenizer@0.0.9.json",
      "npm:glsl-tokenizer@0.0.9/index.js",
      "npm:glsl-tokenizer@0.0.9/lib/builtins.js",
      "npm:glsl-tokenizer@0.0.9/lib/literals.js",
      "npm:glsl-tokenizer@0.0.9/lib/operators.js",
      "npm:greedy-mesher@1.0.2.json",
      "npm:greedy-mesher@1.0.2/greedy.js",
      "npm:ieee754@1.1.6.json",
      "npm:ieee754@1.1.6/index.js",
      "npm:inherits@2.0.1.json",
      "npm:inherits@2.0.1/inherits_browser.js",
      "npm:invert-hash@0.0.0.json",
      "npm:invert-hash@0.0.0/invert.js",
      "npm:iota-array@0.0.1.json",
      "npm:iota-array@0.0.1/iota.js",
      "npm:iota-array@1.0.0.json",
      "npm:iota-array@1.0.0/iota.js",
      "npm:is-buffer@1.1.1.json",
      "npm:is-buffer@1.1.1/index.js",
      "npm:isarray@0.0.1.json",
      "npm:isarray@0.0.1/index.js",
      "npm:isarray@1.0.0.json",
      "npm:isarray@1.0.0/index.js",
      "npm:lower-bound@0.0.3.json",
      "npm:lower-bound@0.0.3/lb.js",
      "npm:mocha@1.21.5.json",
      "npm:mocha@1.21.5/mocha.css!github:systemjs/plugin-css@0.1.20/css.js",
      "npm:mocha@1.21.5/mocha.js",
      "npm:ndarray-downsample2x@0.1.1.json",
      "npm:ndarray-downsample2x@0.1.1/downsample.js",
      "npm:ndarray-fft@0.1.0.json",
      "npm:ndarray-fft@0.1.0/fft.js",
      "npm:ndarray-fft@0.1.0/lib/fft-matrix.js",
      "npm:ndarray-fill@0.1.0.json",
      "npm:ndarray-fill@0.1.0/index.js",
      "npm:ndarray-ops@1.1.1.json",
      "npm:ndarray-ops@1.1.1/ndarray-ops.js",
      "npm:ndarray-scratch@0.0.1.json",
      "npm:ndarray-scratch@0.0.1/scratch.js",
      "npm:ndarray@1.0.18.json",
      "npm:ndarray@1.0.18/ndarray.js",
      "npm:process-nextick-args@1.0.6.json",
      "npm:process-nextick-args@1.0.6/index.js",
      "npm:readable-stream@2.0.5.json",
      "npm:readable-stream@2.0.5/duplex.js",
      "npm:readable-stream@2.0.5/lib/_stream_duplex.js",
      "npm:readable-stream@2.0.5/lib/_stream_passthrough.js",
      "npm:readable-stream@2.0.5/lib/_stream_readable.js",
      "npm:readable-stream@2.0.5/lib/_stream_transform.js",
      "npm:readable-stream@2.0.5/lib/_stream_writable.js",
      "npm:readable-stream@2.0.5/passthrough.js",
      "npm:readable-stream@2.0.5/readable.js",
      "npm:readable-stream@2.0.5/transform.js",
      "npm:readable-stream@2.0.5/writable.js",
      "npm:stream-browserify@2.0.1.json",
      "npm:stream-browserify@2.0.1/index.js",
      "npm:string_decoder@0.10.31.json",
      "npm:string_decoder@0.10.31/index.js",
      "npm:through@1.1.2.json",
      "npm:through@1.1.2/index.js",
      "npm:through@2.3.8.json",
      "npm:through@2.3.8/index.js",
      "npm:tile-mip-map@0.2.1.json",
      "npm:tile-mip-map@0.2.1/mipmap.js",
      "npm:typedarray-pool@0.1.2.json",
      "npm:typedarray-pool@0.1.2/pool.js",
      "npm:typedarray-pool@1.1.0.json",
      "npm:typedarray-pool@1.1.0/pool.js",
      "npm:uniq@0.0.2.json",
      "npm:uniq@0.0.2/uniq.js",
      "npm:uniq@1.0.1.json",
      "npm:uniq@1.0.1/uniq.js",
      "npm:util-deprecate@1.0.2.json",
      "npm:util-deprecate@1.0.2/browser.js",
      "npm:vkey@0.0.3.json",
      "npm:vkey@0.0.3/index.js",
      "npm:voxel-demo@0.0.1.json",
      "npm:voxel-demo@0.0.1/shader.js",
      "npm:webglew@0.0.0.json",
      "npm:webglew@0.0.0/webglew.js",
      "tests/angular.js",
      "tests/bootstrap.html!github:systemjs/plugin-text@0.0.2/text",
      "tests/bootstrap.js",
      "tests/d3.js",
      "tests/jquery.js",
      "tests/tests.js",
      "tests/voxel-demo.js"
    ]
  }
});