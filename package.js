Package.describe({
  name: 'benstrum:chartjs',
  summary: 'Simple HTML5 Charts using the <canvas> tag',
  git: 'https://github.com/cien-ben/meteor-chartjs.git',
  version: "1.0.0",
  documentation: null
});

Package.on_use(function (api) {
  api.add_files([
    'lib/chart.min.js'
  ], 'client');
  api.export('Chart');
});
