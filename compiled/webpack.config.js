const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './compiled/public/src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/src/index.html',
    filename: 'index.html'
  }), new CopyWebpackPlugin({
    patterns: [{ from: './assets', to: 'assets' }]
  })],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader'
      }
    }]
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbIkh0bWxXZWJwYWNrUGx1Z2luIiwicmVxdWlyZSIsIkNvcHlXZWJwYWNrUGx1Z2luIiwicGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnRyeSIsIm91dHB1dCIsImZpbGVuYW1lIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsIm5vZGUiLCJmcyIsIm5ldCIsInRscyIsInBsdWdpbnMiLCJ0ZW1wbGF0ZSIsInBhdHRlcm5zIiwiZnJvbSIsInRvIiwicnVsZXMiLCJ0ZXN0IiwidXNlIiwiZXhjbHVkZSIsImxvYWRlciJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsb0JBQW9CQyxRQUFRLHFCQUFSLENBQTFCO0FBQ0EsTUFBTUMsb0JBQW9CRCxRQUFRLHFCQUFSLENBQTFCO0FBQ0EsTUFBTUUsT0FBT0YsUUFBUSxNQUFSLENBQWI7O0FBRUFHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsU0FBTyxnQ0FEUTtBQUVmQyxVQUFRO0FBQ05DLGNBQVUsa0JBREo7QUFFTkwsVUFBTUEsS0FBS00sT0FBTCxDQUFhQyxTQUFiLEVBQXdCLGFBQXhCO0FBRkEsR0FGTztBQU1mQyxRQUFNO0FBQ0pDLFFBQUksT0FEQTtBQUVKQyxTQUFLLE9BRkQ7QUFHSkMsU0FBSztBQUhELEdBTlM7QUFXZkMsV0FBUyxDQUNQLElBQUlmLGlCQUFKLENBQXNCO0FBQ3BCZ0IsY0FBVSx5QkFEVTtBQUVwQlIsY0FBVTtBQUZVLEdBQXRCLENBRE8sRUFLUCxJQUFJTixpQkFBSixDQUFzQjtBQUNwQmUsY0FBVSxDQUNOLEVBQUNDLE1BQU0sVUFBUCxFQUFtQkMsSUFBSSxRQUF2QixFQURNO0FBRFUsR0FBdEIsQ0FMTyxDQVhNO0FBc0JmZixVQUFRO0FBQ05nQixXQUFPLENBQ0w7QUFDRUMsWUFBTSxRQURSO0FBRUVDLFdBQUssQ0FBQyxjQUFELEVBQWlCLFlBQWpCO0FBRlAsS0FESyxFQUtMO0FBQ0VELFlBQU0sYUFEUjtBQUVFRSxlQUFTLGNBRlg7QUFHRUQsV0FBSztBQUNIRSxnQkFBUTtBQURMO0FBSFAsS0FMSyxFQVlMO0FBQ0VILFlBQU0sU0FEUjtBQUVFQyxXQUFLO0FBQ0hFLGdCQUFRO0FBREw7QUFGUCxLQVpLO0FBREQ7QUF0Qk8sQ0FBakIiLCJmaWxlIjoid2VicGFjay5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIdG1sV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoXCJodG1sLXdlYnBhY2stcGx1Z2luXCIpO1xuY29uc3QgQ29weVdlYnBhY2tQbHVnaW4gPSByZXF1aXJlKCdjb3B5LXdlYnBhY2stcGx1Z2luJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeTogJy4vY29tcGlsZWQvcHVibGljL3NyYy9pbmRleC5qcycsXG4gIG91dHB1dDoge1xuICAgIGZpbGVuYW1lOiAnW25hbWVdLmJ1bmRsZS5qcycsXG4gICAgcGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYy9kaXN0JyksXG4gIH0sXG4gIG5vZGU6IHtcbiAgICBmczogJ2VtcHR5JyxcbiAgICBuZXQ6ICdlbXB0eScsXG4gICAgdGxzOiAnZW1wdHknXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBuZXcgSHRtbFdlYnBhY2tQbHVnaW4oe1xuICAgICAgdGVtcGxhdGU6ICcuL3B1YmxpYy9zcmMvaW5kZXguaHRtbCcsXG4gICAgICBmaWxlbmFtZTogJ2luZGV4Lmh0bWwnXG4gICAgfSksXG4gICAgbmV3IENvcHlXZWJwYWNrUGx1Z2luKHtcbiAgICAgIHBhdHRlcm5zOiBbXG4gICAgICAgICAge2Zyb206ICcuL2Fzc2V0cycsIHRvOiAnYXNzZXRzJ31cbiAgICAgIF1cbiAgICB9KVxuICBdLFxuICBtb2R1bGU6IHtcbiAgICBydWxlczogW1xuICAgICAge1xuICAgICAgICB0ZXN0OiAvXFwuY3NzJC8sXG4gICAgICAgIHVzZTogWydzdHlsZS1sb2FkZXInLCAnY3NzLWxvYWRlciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGVzdDogL1xcLihqc3xqc3gpJC8sXG4gICAgICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvLFxuICAgICAgICB1c2U6IHtcbiAgICAgICAgICBsb2FkZXI6ICdiYWJlbC1sb2FkZXInXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC5odG1sJC8sXG4gICAgICAgIHVzZToge1xuICAgICAgICAgIGxvYWRlcjogJ2h0bWwtbG9hZGVyJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG59Il19