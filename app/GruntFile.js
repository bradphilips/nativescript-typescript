module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        src: ["src/**/*.ts", "!tns_modules/**/*.ts", "!src/nativescript.d.ts"],
        outDir: 'bin'
      },
      options: {
        target: 'es5',
        module: 'commonjs',
        sourceMap: false
      }
    },
    copy: {
      files: {
        cwd: 'src/',
        src: ['**/*', '!**/*.ts'],
        dest: 'bin',
        expand: true
      }
    },
    exec: {
      emulate_ios: 'tns emulate ios'
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask("default", ["ts", "copy", "exec:emulate_ios"]);
  grunt.registerTask("build", ["ts", "copy"]);
};