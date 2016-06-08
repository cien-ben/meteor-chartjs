Package.describe({
  summary: 'Simple HTML5 Charts using the <canvas> tag',
  git: 'https://github.com/cien-ben/meteor-chartjs.git',
  version: "1.0.0"
});

Package.on_use(function (api) {
  api.add_files([
    'lib/chartjs.js'
  ], 'client');
  api.export('Chart');
});
