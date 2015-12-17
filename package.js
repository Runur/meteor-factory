Package.describe({
  name: 'dburles:factory',
  summary: 'Factories for Meteor',
  version: '0.3.11',
  git: 'https://github.com/versolearning/meteor-factory.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'minimongo',
    'underscore',
    'ejson',
    'random'
  ]);
  api.add_files('factory.js');
  api.export('Factory');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'dburles:factory', 'underscore']);
  api.add_files('factory_tests.js', 'server');
});
