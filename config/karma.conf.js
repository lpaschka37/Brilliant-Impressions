basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/appSpec.js',
  'test/unit/routingSpec.js'
];

autoWatch = true;

browsers = ['Chrome'];
browsers = ['ChromeCanary'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
