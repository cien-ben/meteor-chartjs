Package.describe({
  summary: 'Simple HTML5 Charts using the <canvas> tag',
  git: 'https://github.com/cien-ben/meteor-chartjs.git'
});

Package.on_use(function (api) {
  api.add_files([
    'chart.js'
  ], 'client');
  api.export('Chart');
});
