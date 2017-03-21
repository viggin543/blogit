import path from 'path';
export default [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
      { test: /\.html$/, include: path.join(__dirname, 'src'), loader: 'babel' },
      { test: /(\.css)$/, loaders: ['style', 'css'] },//this loads bootstrup . notice we dont specify search path .. 
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(jpg|png|svg)$/, loader: 'file-loader', options: { name: '[path][name].[hash].[ext]' } }
    ];