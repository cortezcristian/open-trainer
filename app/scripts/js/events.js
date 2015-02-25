//Timeline
var timeTotal = 107941+10;

var t = window.t = new Timeline({length: timeTotal, frequency:10 });

var stdouts = [
    { time: 0, content: '  terminal-recorder by @cortezcristian\r\n'}
    , { time: 178, content: "]2;crisboot@crisboot-Aspire-S3-391  ~/[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~$ [m"}
    , { time: 2166, content: "m"}
    , { time: 2243, content: "k"}
    , { time: 2428, content: "d"}
    , { time: 2577, content: "i"}
    , { time: 2698, content: "r"}
    , { time: 2870, content: " "}
    , { time: 2969, content: "c"}
    , { time: 3219, content: "r"}
    , { time: 3388, content: "u"}
    , { time: 3539, content: "d"}
    , { time: 4407, content: "t"}
    , { time: 4529, content: "e"}
    , { time: 4674, content: "s"}
    , { time: 4817, content: "t"}
    , { time: 5537, content: " "}
    , { time: 6417, content: "&"}
    , { time: 6556, content: "&"}
    , { time: 6703, content: " "}
    , { time: 7047, content: "c"}
    , { time: 7114, content: "d"}
    , { time: 7235, content: " "}
    , { time: 7489, content: "c"}
    , { time: 7689, content: "r"}
    , { time: 7905, content: "u"}
    , { time: 8135, content: "d"}
    , { time: 8389, content: "t"}
    , { time: 8485, content: "e"}
    , { time: 8534, content: "s"}
    , { time: 8631, content: "t"}
    , { time: 9175, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  mkdir crudtest"}
    , { time: 9207, content: "]2;crisboot@crisboot-Aspire-S3-391  cd crudtest]2;crisboot@crisboot-Aspire-S3-391  crudtest/"}
    , { time: 9218, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~/crudtest$ [m"}
    , { time: 11311, content: "y"}
    , { time: 11429, content: "o"}
    , { time: 11617, content: " "}
    , { time: 11777, content: "e"}
    , { time: 12019, content: "x"}
    , { time: 12123, content: "p"}
    , { time: 12274, content: "r"}
    , { time: 12339, content: "e"}
    , { time: 12595, content: "s"}
    , { time: 12739, content: "s"}
    , { time: 14036, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  yo express"}
    , { time: 31742, content: "[[32m?[39m] Select a version to install: (Use arrow keys)\r\n[36m‣ Basic[39m \r\n  MVC "}
    , { time: 31742, content: "[?25l"}
    , { time: 33660, content: "[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a version to install: [36mBasic[39m\r\n[?25h"}
    , { time: 33661, content: "[?25h"}
    , { time: 33854, content: "[[32m?[39m] Select a view engine to use: (Use arrow keys)\r\n[36m‣ Jade[39m \r\n  Swig \r\n  EJS "}
    , { time: 33855, content: "[?25l"}
    , { time: 34770, content: "[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a view engine to use: \r\n  Jade \r\n[36m‣ Swig[39m \r\n  EJS "}
    , { time: 35103, content: "[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a view engine to use: \r\n[36m‣ Jade[39m \r\n  Swig \r\n  EJS "}
    , { time: 35406, content: "[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a view engine to use: [36mJade[39m\r\n[?25h[?25h[[32m?[39m] Select a css preprocessor to use (Sass Requires Ruby): (Use arrow keys)\r\n[36m‣ None[39m \r\n  Node-Sass \r\n  Sass \r\n  less [?25l"}
    , { time: 38068, content: "[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a css preprocessor to use (Sass Requires Ruby): [36mNone[39m\r\n[?25h[?25h[[32m?[39m] Select a build tool to use: (Use arrow keys)\r\n[36m‣ Grunt[39m \r\n  Gulp [?25l"}
    , { time: 39579, content: "[90D[2K[1A[90D[2K[1A[90D[2K[[32m?[39m] Select a build tool to use: [36mGrunt[39m\r\n[?25h[?25h"}
    , { time: 39759, content: "[32m   create[39m"}
    , { time: 39759, content: ".bowerrc\r\n"}
    , { time: 39759, content: " "}
    , { time: 39760, content: "[32m   create[39m"}
    , { time: 39761, content: " .gitignore\r\n"}
    , { time: 39781, content: "[32m   create[39m "}
    , { time: 39781, content: "bower.json\r\n"}
    , { time: 39796, content: "[32m   create[39m app.js\r\n"}
    , { time: 39796, content: "[32m   create[39m bin/www\r\n"}
    , { time: 39797, content: "[32m   create[39m"}
    , { time: 39797, content: " package.json\r\n"}
    , { time: 39797, content: "[32m   create[39m"}
    , { time: 39797, content: " routes/index.js\r\n"}
    , { time: 39798, content: "[32m   create[39m"}
    , { time: 39798, content: " routes/user.js\r\n"}
    , { time: 39798, content: "[32m   create[39m"}
    , { time: 39798, content: " views/error.jade\r\n"}
    , { time: 39798, content: "[32m   create[39m"}
    , { time: 39798, content: " views/index.jade\r\n"}
    , { time: 39799, content: "[32m   create[39m"}
    , { time: 39799, content: " views/layout.jade\r\n"}
    , { time: 39799, content: "[32m   create[39m"}
    , { time: 39799, content: " public/css/style.css\r\n"}
    , { time: 39800, content: "[32m   create[39m"}
    , { time: 39800, content: " Gruntfile.js\r\n"}
    , { time: 39806, content: "\r\n\r\n"}
    , { time: 39807, content: "I'm all done. Running [1m[33mbower install & npm install[39m[22m for you to install the required dependencies. If this fails, try running the command yourself.\r\n\r\n\r\n"}
    , { time: 48618, content: "[37m"}
    , { time: 48619, content: "[40m"}
    , { time: 48620, content: "npm[0m"}
    , { time: 48620, content: " [0m[32m[40m"}
    , { time: 48621, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/cookie-parser\r\n[0m"}
    , { time: 48680, content: "[37m"}
    , { time: 48680, content: "[40m"}
    , { time: 48680, content: "[0m [0m"}
    , { time: 48680, content: "[35mGET[0m https://registry.npmjs.org/body-parser\r\n"}
    , { time: 48680, content: "[0m"}
    , { time: 48680, content: "npm[0m [0m[32m[40m"}
    , { time: 48680, content: "http"}
    , { time: 48681, content: "[37m"}
    , { time: 48682, content: "[40mnpm[0m"}
    , { time: 48682, content: " [0m"}
    , { time: 48682, content: "[32m[40mhttp"}
    , { time: 48682, content: "[0m [0m[35m"}
    , { time: 48682, content: "GET"}
    , { time: 48682, content: "[0m https://registry.npmjs.org/grunt\r\n[0m"}
    , { time: 48685, content: "[37m"}
    , { time: 48685, content: "[40mnpm[0m [0m"}
    , { time: 48685, content: "[32m[40m"}
    , { time: 48685, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/morgan\r\n[0m"}
    , { time: 48687, content: "[37m"}
    , { time: 48687, content: "[40mnpm[0m "}
    , { time: 48687, content: "[0m[32m"}
    , { time: 48687, content: "[40mhttp[0m [0m"}
    , { time: 48687, content: "[35mGET[0m"}
    , { time: 48687, content: " https://registry.npmjs.org/grunt-develop\r\n[0m"}
    , { time: 48690, content: "[37m"}
    , { time: 48690, content: "[40mnpm[0m"}
    , { time: 48691, content: " [0m"}
    , { time: 48691, content: "[32m[40mhttp"}
    , { time: 48691, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/grunt-contrib-watch\r\n[0m"}
    , { time: 48693, content: "[37m"}
    , { time: 48693, content: "[40mnpm[0m [0m"}
    , { time: 48693, content: "[32m[40m"}
    , { time: 48693, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/time-grunt\r\n"}
    , { time: 48693, content: "[0m"}
    , { time: 48702, content: "[37m"}
    , { time: 48702, content: "[40m"}
    , { time: 48704, content: "npm"}
    , { time: 48704, content: "[0m [0m"}
    , { time: 48704, content: "[32m"}
    , { time: 48704, content: "[40m"}
    , { time: 48704, content: "http[0m "}
    , { time: 48704, content: "[0m"}
    , { time: 48704, content: "[35m"}
    , { time: 48705, content: "GET"}
    , { time: 48705, content: "[0m https://registry.npmjs.org/express\r\n"}
    , { time: 48705, content: "[0m"}
    , { time: 48707, content: "[37m"}
    , { time: 48707, content: "[40mnpm[0m"}
    , { time: 48707, content: " [0m[32m"}
    , { time: 48707, content: "[40mhttp[0m [0m[35mGET"}
    , { time: 48707, content: "[0m https://registry.npmjs.org/load-grunt-tasks\r\n"}
    , { time: 48707, content: "[0m"}
    , { time: 48718, content: "[37m"}
    , { time: 48718, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 48718, content: "http[0m [0m"}
    , { time: 48718, content: "[35mGET[0m https://registry.npmjs.org/request\r\n[0m"}
    , { time: 48976, content: "[37m"}
    , { time: 48977, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 48977, content: "[0m [0m"}
    , { time: 48977, content: "[35mGET[0m https://registry.npmjs.org/debug\r\n[0m"}
    , { time: 48979, content: "[37m"}
    , { time: 48979, content: "[40mnpm[0m "}
    , { time: 48979, content: "[0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/serve-favicon\r\n"}
    , { time: 48979, content: "[0m"}
    , { time: 48986, content: "[37m[40mnpm"}
    , { time: 48986, content: "[0m [0m[32m[40mhttp"}
    , { time: 48986, content: "[0m [0m"}
    , { time: 48986, content: "[35mGET[0m https://registry.npmjs.org/jade\r\n[0m"}
    , { time: 49497, content: "npm[0m [0m[32m"}
    , { time: 49497, content: "[37m[40m"}
    , { time: 49497, content: "[40mhttp"}
    , { time: 49497, content: "[0m"}
    , { time: 49498, content: "[0m [0m[35m304[0m https://registry.npmjs.org/grunt-develop\r\n"}
    , { time: 49501, content: "[40mnpm[0m"}
    , { time: 49501, content: " [0m[32m"}
    , { time: 49501, content: "[40mhttp[0m [0m[35m"}
    , { time: 49501, content: "304[0m https://registry.npmjs.org/morgan\r\n"}
    , { time: 49501, content: "[0m"}
    , { time: 49501, content: "[37m"}
    , { time: 49988, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/cookie-parser\r\n[0m"}
    , { time: 50042, content: "[40mnpm[0m [0m[32m"}
    , { time: 50042, content: "[37m"}
    , { time: 50042, content: "[40mhttp[0m"}
    , { time: 50042, content: " [0m[35m200[0m https://registry.npmjs.org/time-grunt\r\n[0m"}
    , { time: 50092, content: "[37m"}
    , { time: 50092, content: "[40mnpm[0m "}
    , { time: 50092, content: "[0m[32m[40mhttp[0m [0m[35m"}
    , { time: 50093, content: "GET[0m https://registry.npmjs.org/morgan/-/morgan-1.5.1.tgz\r\n[0m"}
    , { time: 50135, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/cookie-parser/-/cookie-parser-1.3.4.tgz\r\n[0m"}
    , { time: 50140, content: "[37m"}
    , { time: 50140, content: "[40mnpm[0m"}
    , { time: 50140, content: " [0m"}
    , { time: 50140, content: "[32m[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/grunt-contrib-watch\r\n[0m"}
    , { time: 50364, content: "[37m"}
    , { time: 50364, content: "[40mnpm[0m "}
    , { time: 50365, content: "[0m"}
    , { time: 50365, content: "[32m[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/body-parser\r\n"}
    , { time: 50366, content: "[0m"}
    , { time: 50397, content: "[37m"}
    , { time: 50397, content: "[40mnpm[0m "}
    , { time: 50398, content: "[0m"}
    , { time: 50398, content: "[32m[40mhttp"}
    , { time: 50398, content: "[0m "}
    , { time: 50398, content: "[0m"}
    , { time: 50398, content: "[35m"}
    , { time: 50398, content: "GET[0m"}
    , { time: 50398, content: " https://registry.npmjs.org/body-parser/-/body-parser-1.10.2.tgz\r\n"}
    , { time: 50398, content: "[0m"}
    , { time: 50472, content: "[37m"}
    , { time: 50472, content: "[40mnpm[0m"}
    , { time: 50472, content: " [0m"}
    , { time: 50472, content: "[32m[40mhttp[0m"}
    , { time: 50472, content: " [0m[35m200"}
    , { time: 50472, content: "[0m https://registry.npmjs.org/grunt\r\n[0m"}
    , { time: 50580, content: "[37m"}
    , { time: 50580, content: "[40mnpm[0m"}
    , { time: 50580, content: " [0m"}
    , { time: 50580, content: "[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/load-grunt-tasks\r\n[0m"}
    , { time: 50847, content: "[37m"}
    , { time: 50847, content: "[40m"}
    , { time: 50847, content: "npm"}
    , { time: 50847, content: "[0m "}
    , { time: 50848, content: "[0m[32m[40m"}
    , { time: 50848, content: "http[0m [0m[35m200[0m https://registry.npmjs.org/morgan/-/morgan-1.5.1.tgz\r\n[0m"}
    , { time: 50887, content: "[37m[40m"}
    , { time: 50887, content: "npm[0m [0m[32m[40m"}
    , { time: 50887, content: "http"}
    , { time: 50887, content: "[0m [0m"}
    , { time: 50887, content: "[35m200[0m https://registry.npmjs.org/serve-favicon\r\n[0m"}
    , { time: 50892, content: "[37m[40m"}
    , { time: 50893, content: "npm[0m [0m[32m[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/cookie-parser/-/cookie-parser-1.3.4.tgz\r\n[0m"}
    , { time: 51078, content: "[37m"}
    , { time: 51078, content: "[40mnpm[0m "}
    , { time: 51078, content: "[0m[32m"}
    , { time: 51078, content: "[40mhttp[0m [0m[35m"}
    , { time: 51078, content: "200[0m https://registry.npmjs.org/debug\r\n"}
    , { time: 51078, content: "[0m"}
    , { time: 51220, content: "[37m"}
    , { time: 51220, content: "[40mnpm[0m [0m"}
    , { time: 51220, content: "[32m[40m"}
    , { time: 51220, content: "http[0m [0m[35m"}
    , { time: 51220, content: "200[0m https://registry.npmjs.org/body-parser/-/body-parser-1.10.2.tgz\r\n"}
    , { time: 51220, content: "[0m"}
    , { time: 51474, content: "[37m"}
    , { time: 51475, content: "[40mnpm[0m "}
    , { time: 51475, content: "[0m[32m[40m"}
    , { time: 51475, content: "http[0m [0m"}
    , { time: 51476, content: "[35m200[0m"}
    , { time: 51476, content: " https://registry.npmjs.org/request\r\n[0m"}
    , { time: 51833, content: "[37m"}
    , { time: 51833, content: "[40mnpm[0m [0m[32m"}
    , { time: 51833, content: "[40mhttp[0m"}
    , { time: 51833, content: " [0m[35m200[0m https://registry.npmjs.org/jade\r\n[0m"}
    , { time: 52189, content: "[37m[40m"}
    , { time: 52189, content: "npm[0m [0m[32m[40m"}
    , { time: 52189, content: "http[0m"}
    , { time: 52189, content: " [0m[35m200[0m https://registry.npmjs.org/express\r\n[0m"}
    , { time: 52258, content: "[37m[40m"}
    , { time: 52259, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 52259, content: " [0m[35mGET[0m https://registry.npmjs.org/express/-/express-4.10.8.tgz\r\n[0m"}
    , { time: 52989, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/express/-/express-4.10.8.tgz\r\n[0m"}
    , { time: 54077, content: "[37m"}
    , { time: 54077, content: "[40mnpm"}
    , { time: 54077, content: "[0m "}
    , { time: 54077, content: "[0m[32m[40mhttp[0m "}
    , { time: 54078, content: "[0m[35m"}
    , { time: 54078, content: "GET[0m https://registry.npmjs.org/chalk\r\n[0m"}
    , { time: 54090, content: "[37m"}
    , { time: 54090, content: "[40mnpm[0m [0m[32m"}
    , { time: 54090, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/findup-sync\r\n"}
    , { time: 54090, content: "[0m"}
    , { time: 54093, content: "[37m"}
    , { time: 54093, content: "[40mnpm[0m [0m[32m"}
    , { time: 54094, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/date-time\r\n[0m"}
    , { time: 54098, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/multimatch\r\n[0m"}
    , { time: 54100, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 54101, content: "[35mGET[0m https://registry.npmjs.org/figures\r\n[0m"}
    , { time: 54101, content: "[37m"}
    , { time: 54101, content: " [0m"}
    , { time: 54107, content: "[37m"}
    , { time: 54107, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 54107, content: "[0m [0m"}
    , { time: 54107, content: "[35mGET[0m https://registry.npmjs.org/hooker\r\n[0m"}
    , { time: 54146, content: "[37m"}
    , { time: 54146, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 54146, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/text-table\r\n"}
    , { time: 54146, content: "[0m"}
    , { time: 54191, content: "[37m"}
    , { time: 54191, content: "[40mnpm[0m [0m[32m"}
    , { time: 54191, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/etag\r\n[0m"}
    , { time: 54276, content: "[37m"}
    , { time: 54276, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 54276, content: "[0m [0m[35mGET[0m"}
    , { time: 54276, content: " https://registry.npmjs.org/pretty-ms\r\n[0m"}
    , { time: 54302, content: "[37m"}
    , { time: 54302, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 54302, content: "http[0m [0m[35mGET"}
    , { time: 54303, content: "[0m"}
    , { time: 54303, content: " https://registry.npmjs.org/cookie-signature/1.0.6\r\n[0m"}
    , { time: 54316, content: "[37m"}
    , { time: 54316, content: "[40mnpm[0m [0m[32m"}
    , { time: 54317, content: "[40mhttp[0m [0m[35m"}
    , { time: 54317, content: "GET[0m https://registry.npmjs.org/fresh/0.2.4\r\n[0m"}
    , { time: 54318, content: "[37m"}
    , { time: 54318, content: "[40mnpm[0m"}
    , { time: 54318, content: " [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/ms/0.6.2\r\n"}
    , { time: 54318, content: "[0m"}
    , { time: 54321, content: "[37m"}
    , { time: 54321, content: "[40mnpm[0m"}
    , { time: 54321, content: " [0m[32m"}
    , { time: 54321, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 54321, content: " https://registry.npmjs.org/cookie/0.1.2\r\n[0m"}
    , { time: 54337, content: "[37m"}
    , { time: 54337, content: "[40mnpm[0m [0m[32m"}
    , { time: 54337, content: "[40mhttp[0m"}
    , { time: 54337, content: " [0m[35mGET[0m https://registry.npmjs.org/on-finished\r\n[0m"}
    , { time: 54496, content: "[37m"}
    , { time: 54497, content: "[40mnpm[0m [0m"}
    , { time: 54497, content: "[32m[40mhttp[0m"}
    , { time: 54497, content: " [0m[35mGET[0m https://registry.npmjs.org/iconv-lite/0.4.6\r\n[0m"}
    , { time: 54576, content: "[37m[40mnpm"}
    , { time: 54576, content: "[0m [0m[32m[40mhttp"}
    , { time: 54576, content: "[0m "}
    , { time: 54576, content: "[0m[35mGET[0m https://registry.npmjs.org/raw-body/1.3.2\r\n"}
    , { time: 54576, content: "[0m"}
    , { time: 54612, content: "[37m[40m"}
    , { time: 54612, content: "npm[0m [0m[32m[40m"}
    , { time: 54612, content: "http[0m"}
    , { time: 54612, content: " [0m[35m"}
    , { time: 54612, content: "GET[0m https://registry.npmjs.org/basic-auth/1.0.0\r\n[0m"}
    , { time: 54617, content: "[37m"}
    , { time: 54618, content: "[40mnpm[0m"}
    , { time: 54618, content: " [0m[32m[40mhttp[0m [0m[35mGET"}
    , { time: 54618, content: "[0m https://registry.npmjs.org/depd\r\n[0m"}
    , { time: 54620, content: "[37m"}
    , { time: 54620, content: "[40mnpm[0m"}
    , { time: 54620, content: " [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/bytes/1.0.0\r\n[0m"}
    , { time: 54718, content: "[37m"}
    , { time: 54718, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 54718, content: "http[0m [0m[35mGET"}
    , { time: 54718, content: "[0m https://registry.npmjs.org/tiny-lr-fork/0.0.5\r\n[0m"}
    , { time: 54735, content: "[37m[40m"}
    , { time: 54736, content: "npm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/gaze"}
    , { time: 54736, content: "\r\n[0m"}
    , { time: 54736, content: "[37m"}
    , { time: 54737, content: "[40mnpm[0m "}
    , { time: 54737, content: "[0m[32m[40mhttp"}
    , { time: 54737, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/media-typer/0.3.0\r\n[0m"}
    , { time: 54738, content: "[37m"}
    , { time: 54738, content: "[40mnpm[0m"}
    , { time: 54738, content: " [0m[32m"}
    , { time: 54738, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/type-is\r\n[0m"}
    , { time: 54753, content: "[37m[40m"}
    , { time: 54753, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 54753, content: " [0m[35m"}
    , { time: 54753, content: "GET[0m"}
    , { time: 54754, content: " https://registry.npmjs.org/async\r\n"}
    , { time: 54754, content: "[0m"}
    , { time: 54761, content: "[37m"}
    , { time: 54761, content: "[40mnpm[0m [0m[32m"}
    , { time: 54761, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/lodash\r\n[0m"}
    , { time: 54809, content: "[37m[40mnpm"}
    , { time: 54809, content: "[0m [0m[32m[40mhttp[0m [0m[35m"}
    , { time: 54809, content: "GET[0m"}
    , { time: 54809, content: " https://registry.npmjs.org/async\r\n[0m"}
    , { time: 54856, content: "[37m"}
    , { time: 54856, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 54856, content: "[0m [0m"}
    , { time: 54856, content: "[35m304[0m https://registry.npmjs.org/multimatch\r\n[0m"}
    , { time: 54918, content: "[37m[40mnpm"}
    , { time: 54918, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 54918, content: "[0m[35m"}
    , { time: 54918, content: "304[0m https://registry.npmjs.org/date-time\r\n[0m"}
    , { time: 55045, content: "[37m"}
    , { time: 55045, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 55045, content: "http[0m "}
    , { time: 55045, content: "[0m[35m304[0m https://registry.npmjs.org/hooker\r\n"}
    , { time: 55045, content: "[0m"}
    , { time: 55068, content: "[37m"}
    , { time: 55069, content: "[40mnpm[0m [0m[32m"}
    , { time: 55069, content: "[40mhttp[0m"}
    , { time: 55069, content: " [0m[35mGET[0m https://registry.npmjs.org/qs/2.3.3\r\n[0m"}
    , { time: 55072, content: "[40mnpm"}
    , { time: 55072, content: "[37m"}
    , { time: 55072, content: "[0m "}
    , { time: 55072, content: "[0m[32m[40mhttp"}
    , { time: 55072, content: "[0m "}
    , { time: 55072, content: "[0m[35mGET[0m"}
    , { time: 55072, content: " https://registry.npmjs.org/eventemitter2\r\n"}
    , { time: 55072, content: "[0m"}
    , { time: 55073, content: "[37m"}
    , { time: 55073, content: "[40m"}
    , { time: 55073, content: "npm[0m"}
    , { time: 55073, content: " [0m[32m[40m"}
    , { time: 55073, content: "http[0m"}
    , { time: 55073, content: " [0m"}
    , { time: 55073, content: "[35m"}
    , { time: 55073, content: "GET[0m https://registry.npmjs.org/findup-sync\r\n[0m"}
    , { time: 55075, content: "[37m"}
    , { time: 55075, content: "[40mnpm[0m"}
    , { time: 55076, content: " [0m[32m"}
    , { time: 55076, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 55076, content: " https://registry.npmjs.org/dateformat/1.0.2-1.2.3\r\n[0m"}
    , { time: 55080, content: "[37m"}
    , { time: 55080, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 55080, content: "[0m [0m"}
    , { time: 55081, content: "[35mGET[0m https://registry.npmjs.org/hooker\r\n[0m"}
    , { time: 55081, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/iconv-lite\r\n"}
    , { time: 55081, content: "[0m"}
    , { time: 55082, content: "[37m[40m"}
    , { time: 55082, content: "npm[0m [0m"}
    , { time: 55082, content: "[32m[40mhttp"}
    , { time: 55082, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/colors\r\n"}
    , { time: 55082, content: "[0m"}
    , { time: 55083, content: "[37m"}
    , { time: 55083, content: "[40mnpm[0m"}
    , { time: 55083, content: " [0m"}
    , { time: 55083, content: "[32m[40mhttp[0m [0m"}
    , { time: 55083, content: "[35mGET"}
    , { time: 55083, content: "[0m https://registry.npmjs.org/coffee-script\r\n[0m"}
    , { time: 55085, content: "[37m"}
    , { time: 55085, content: "[40mnpm[0m"}
    , { time: 55085, content: " [0m[32m"}
    , { time: 55085, content: "[40mhttp[0m [0m"}
    , { time: 55085, content: "[35mGET[0m"}
    , { time: 55085, content: " https://registry.npmjs.org/lodash\r\n[0m"}
    , { time: 55086, content: "[37m"}
    , { time: 55086, content: "[40mnpm"}
    , { time: 55086, content: "[0m [0m[32m"}
    , { time: 55086, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/rimraf\r\n[0m"}
    , { time: 55087, content: "[37m"}
    , { time: 55087, content: "[40mnpm"}
    , { time: 55087, content: "[0m [0m"}
    , { time: 55087, content: "[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/which\r\n[0m"}
    , { time: 55088, content: "[37m"}
    , { time: 55088, content: "[40mnpm"}
    , { time: 55088, content: "[0m [0m"}
    , { time: 55089, content: "[32m[40mhttp[0m"}
    , { time: 55089, content: " [0m[35m"}
    , { time: 55089, content: "GET[0m https://registry.npmjs.org/minimatch\r\n"}
    , { time: 55089, content: "[0m"}
    , { time: 55090, content: "[37m"}
    , { time: 55090, content: "[40mnpm"}
    , { time: 55090, content: "[0m [0m"}
    , { time: 55090, content: "[0m https://registry.npmjs.org/underscore.string\r\n[0m"}
    , { time: 55090, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 55091, content: "[37m"}
    , { time: 55091, content: "[40mnpm"}
    , { time: 55091, content: "[0m [0m"}
    , { time: 55091, content: "[32m[40mhttp[0m [0m"}
    , { time: 55091, content: "[35mGET"}
    , { time: 55091, content: "[0m https://registry.npmjs.org/getobject\r\n[0m"}
    , { time: 55093, content: "[37m"}
    , { time: 55093, content: "[40mnpm[0m "}
    , { time: 55093, content: "[0m[32m"}
    , { time: 55093, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 55093, content: " https://registry.npmjs.org/grunt-legacy-util\r\n[0m"}
    , { time: 55095, content: "[37m"}
    , { time: 55095, content: "[40mnpm[0m [0m[32m"}
    , { time: 55095, content: "[40mhttp[0m [0m[35m200[0m"}
    , { time: 55095, content: " https://registry.npmjs.org/chalk\r\n[0m"}
    , { time: 55097, content: "[37m"}
    , { time: 55097, content: "[40mnpm[0m [0m"}
    , { time: 55097, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 55097, content: "GET[0m https://registry.npmjs.org/grunt-legacy-log\r\n[0m"}
    , { time: 55100, content: "[37m"}
    , { time: 55100, content: "[40mnpm[0m "}
    , { time: 55100, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 55100, content: "[35mGET[0m"}
    , { time: 55100, content: " https://registry.npmjs.org/exit\r\n[0m"}
    , { time: 55111, content: "[37m"}
    , { time: 55111, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m"}
    , { time: 55111, content: " https://registry.npmjs.org/nopt\r\n[0m"}
    , { time: 55113, content: "npm[0m [0m[32m[40m"}
    , { time: 55113, content: "http[0m "}
    , { time: 55113, content: "[37m[40m"}
    , { time: 55113, content: "[0m[35mGET[0m https://registry.npmjs.org/js-yaml\r\n"}
    , { time: 55113, content: "[0m"}
    , { time: 55115, content: "[37m"}
    , { time: 55115, content: "[40mnpm[0m"}
    , { time: 55115, content: " [0m[32m"}
    , { time: 55115, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 55115, content: " https://registry.npmjs.org/glob\r\n[0m"}
    , { time: 55178, content: "[37m"}
    , { time: 55178, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 55178, content: "[0m [0m[35m304[0m"}
    , { time: 55178, content: " https://registry.npmjs.org/text-table\r\n[0m"}
    , { time: 55213, content: "[37m[40mnpm"}
    , { time: 55213, content: "[0m [0m[32m[40mhttp[0m"}
    , { time: 55213, content: " [0m[35m"}
    , { time: 55213, content: "200[0m https://registry.npmjs.org/findup-sync\r\n[0m"}
    , { time: 55214, content: "[37m"}
    , { time: 55214, content: "[40mnpm[0m"}
    , { time: 55214, content: " [0m"}
    , { time: 55214, content: "[32m[40mhttp[0m [0m[35m304"}
    , { time: 55214, content: "[0m https://registry.npmjs.org/figures\r\n"}
    , { time: 55214, content: "[0m"}
    , { time: 55307, content: "[37m[40m"}
    , { time: 55307, content: "npm[0m [0m"}
    , { time: 55308, content: "[32m"}
    , { time: 55308, content: "[40mhttp"}
    , { time: 55308, content: "[0m "}
    , { time: 55308, content: "[0m[35m200[0m"}
    , { time: 55308, content: " https://registry.npmjs.org/pretty-ms\r\n"}
    , { time: 55308, content: "[0m"}
    , { time: 55310, content: "[37m"}
    , { time: 55310, content: "[40mnpm[0m "}
    , { time: 55310, content: "[0m[32m"}
    , { time: 55310, content: "[40mhttp[0m [0m"}
    , { time: 55310, content: "[35m304[0m"}
    , { time: 55310, content: " https://registry.npmjs.org/etag\r\n[0m"}
    , { time: 55367, content: "[37m"}
    , { time: 55367, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 55367, content: "[0m [0m[35m"}
    , { time: 55367, content: "200[0m https://registry.npmjs.org/cookie-signature/1.0.6\r\n[0m"}
    , { time: 55460, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/fresh/0.2.4\r\n[0m"}
    , { time: 55497, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/ms/0.6.2\r\n[0m"}
    , { time: 55520, content: "[37m"}
    , { time: 55520, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 55521, content: "http[0m "}
    , { time: 55521, content: "[0m[35m200[0m"}
    , { time: 55521, content: " https://registry.npmjs.org/cookie/0.1.2\r\n[0m"}
    , { time: 55574, content: "[37m[40mnpm"}
    , { time: 55574, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 55574, content: "[0m[35m304"}
    , { time: 55574, content: "[0m https://registry.npmjs.org/on-finished\r\n[0m"}
    , { time: 55613, content: "[37m[40mnpm"}
    , { time: 55613, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 55613, content: "[0m[35m200"}
    , { time: 55613, content: "[0m https://registry.npmjs.org/iconv-lite/0.4.6\r\n[0m"}
    , { time: 55653, content: "[37m"}
    , { time: 55653, content: "[40mnpm[0m [0m"}
    , { time: 55653, content: "[32m[40m"}
    , { time: 55653, content: "http[0m [0m"}
    , { time: 55653, content: "[35mGET"}
    , { time: 55653, content: "[0m https://registry.npmjs.org/bl\r\n"}
    , { time: 55653, content: "[0m"}
    , { time: 55656, content: "[37m"}
    , { time: 55656, content: "[40mnpm[0m "}
    , { time: 55656, content: "[0m[32m"}
    , { time: 55656, content: "[40mhttp[0m"}
    , { time: 55657, content: " [0m[35m"}
    , { time: 55657, content: "GET[0m"}
    , { time: 55657, content: " https://registry.npmjs.org/form-data\r\n"}
    , { time: 55657, content: "[0m"}
    , { time: 55673, content: "[37m"}
    , { time: 55673, content: "[40mnpm[0m "}
    , { time: 55673, content: "[0m[32m[40m"}
    , { time: 55673, content: "http[0m [0m[35m200[0m https://registry.npmjs.org/raw-body/1.3.2"}
    , { time: 55673, content: "\r\n[0m"}
    , { time: 55682, content: "[37m[40mnpm"}
    , { time: 55682, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 55682, content: "[0m[35mGET[0m https://registry.npmjs.org/forever-agent\r\n[0m"}
    , { time: 55683, content: "[37m"}
    , { time: 55683, content: "[40mnpm[0m"}
    , { time: 55683, content: " [0m"}
    , { time: 55683, content: "[32m[40mhttp[0m [0m[35mGET[0m"}
    , { time: 55683, content: " https://registry.npmjs.org/json-stringify-safe\r\n[0m"}
    , { time: 55694, content: "[37m"}
    , { time: 55694, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 55694, content: "http[0m [0m[35mGET"}
    , { time: 55694, content: "[0m https://registry.npmjs.org/caseless\r\n[0m"}
    , { time: 55695, content: "[37m"}
    , { time: 55695, content: "[40mnpm[0m"}
    , { time: 55695, content: " [0m[32m"}
    , { time: 55695, content: "[40mhttp[0m [0m[35m304"}
    , { time: 55695, content: "[0m https://registry.npmjs.org/basic-auth/1.0.0\r\n"}
    , { time: 55695, content: "[0m"}
    , { time: 55712, content: "[37m[40mnpm"}
    , { time: 55712, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 55712, content: "[0m[35mGET[0m https://registry.npmjs.org/tunnel-agent\r\n"}
    , { time: 55712, content: "[0m"}
    , { time: 55713, content: "[37m"}
    , { time: 55713, content: "[40mnpm[0m"}
    , { time: 55713, content: " [0m[32m"}
    , { time: 55713, content: "[40mhttp[0m [0m[35mGET"}
    , { time: 55713, content: "[0m https://registry.npmjs.org/http-signature\r\n[0m"}
    , { time: 55716, content: "[37m[40m"}
    , { time: 55716, content: "npm"}
    , { time: 55716, content: "[0m "}
    , { time: 55716, content: "[0m[32m[40m"}
    , { time: 55716, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/node-uuid\r\n"}
    , { time: 55716, content: "[0m"}
    , { time: 55717, content: "[37m"}
    , { time: 55717, content: "[40mnpm[0m"}
    , { time: 55717, content: " [0m[32m"}
    , { time: 55717, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/mime-types"}
    , { time: 55717, content: "\r\n[0m"}
    , { time: 55718, content: "[37m"}
    , { time: 55718, content: "[40mnpm[0m"}
    , { time: 55718, content: " [0m[32m"}
    , { time: 55718, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/oauth-sign\r\n"}
    , { time: 55718, content: "[0m"}
    , { time: 55719, content: "[37m"}
    , { time: 55719, content: "[40mnpm[0m"}
    , { time: 55719, content: " [0m[32m"}
    , { time: 55719, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 55719, content: " https://registry.npmjs.org/aws-sign2\r\n[0m"}
    , { time: 55721, content: "[37m"}
    , { time: 55721, content: "[40mnpm[0m"}
    , { time: 55721, content: " [0m[32m"}
    , { time: 55721, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/tough-cookie\r\n"}
    , { time: 55721, content: "[0m"}
    , { time: 55722, content: "[37m"}
    , { time: 55722, content: "[40mnpm[0m"}
    , { time: 55722, content: " [0m[32m"}
    , { time: 55722, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 55722, content: " https://registry.npmjs.org/combined-stream\r\n[0m"}
    , { time: 55726, content: "[37m"}
    , { time: 55726, content: "[40mnpm[0m [0m[32m"}
    , { time: 55726, content: "[40mhttp[0m [0m[35m"}
    , { time: 55726, content: "GET[0m https://registry.npmjs.org/stringstream\r\n[0m"}
    , { time: 55755, content: "[37m[40m"}
    , { time: 55755, content: "[35mGET[0m https://registry.npmjs.org/qs\r\n[0m"}
    , { time: 55755, content: "npm[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 55837, content: "[37m[40mnpm"}
    , { time: 55837, content: "[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 55837, content: "[35mGET[0m https://registry.npmjs.org/cookie/-/cookie-0.1.2.tgz\r\n[0m"}
    , { time: 55839, content: "[37m"}
    , { time: 55839, content: "[40mnpm[0m "}
    , { time: 55839, content: "[0m[32m[40m"}
    , { time: 55839, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.6.tgz\r\n"}
    , { time: 55839, content: "[0m"}
    , { time: 55847, content: "[37m[40m"}
    , { time: 55847, content: "npm[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 55847, content: "[35mGET[0m https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz\r\n[0m"}
    , { time: 55851, content: "[37m[40m"}
    , { time: 55851, content: "npm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m"}
    , { time: 55851, content: " https://registry.npmjs.org/pretty-ms/-/pretty-ms-1.0.1.tgz\r\n[0m"}
    , { time: 55854, content: "[37m[40m"}
    , { time: 55854, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 55854, content: " [0m[35m"}
    , { time: 55854, content: "304[0m https://registry.npmjs.org/bytes/1.0.0\r\n[0m"}
    , { time: 55855, content: "[37m"}
    , { time: 55855, content: "[40mnpm"}
    , { time: 55855, content: "[0m "}
    , { time: 55855, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 55855, content: "[35mGET[0m"}
    , { time: 55855, content: " https://registry.npmjs.org/raw-body/-/raw-body-1.3.2.tgz\r\n[0m"}
    , { time: 55858, content: "[37m[40m"}
    , { time: 55858, content: "npm[0m [0m[32m"}
    , { time: 55858, content: "[40mhttp[0m [0m[35mGET"}
    , { time: 55858, content: "[0m https://registry.npmjs.org/on-finished/-/on-finished-2.2.0.tgz\r\n[0m"}
    , { time: 55871, content: "[37m[40m"}
    , { time: 55871, content: "npm[0m [0m[32m[40mhttp[0m "}
    , { time: 55871, content: "[0m[35m304"}
    , { time: 55871, content: "[0m https://registry.npmjs.org/tiny-lr-fork/0.0.5\r\n[0m"}
    , { time: 55892, content: "[37m[40mnpm"}
    , { time: 55892, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 55892, content: "[0m[35m304"}
    , { time: 55892, content: "[0m https://registry.npmjs.org/media-typer/0.3.0\r\n[0m"}
    , { time: 56043, content: "[37m[40m"}
    , { time: 56043, content: "npm[0m [0m[32m"}
    , { time: 56043, content: "[40mhttp[0m "}
    , { time: 56043, content: "[0m[35m304[0m https://registry.npmjs.org/type-is\r\n[0m"}
    , { time: 56058, content: "[37m[40mnpm"}
    , { time: 56058, content: "[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 56058, content: "[35m304[0m"}
    , { time: 56058, content: " https://registry.npmjs.org/depd\r\n[0m"}
    , { time: 56097, content: "[37m"}
    , { time: 56097, content: "[40mnpm[0m "}
    , { time: 56097, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 56098, content: "[35mGET[0m https://registry.npmjs.org/finalhandler/0.3.3\r\n"}
    , { time: 56098, content: "[0m"}
    , { time: 56158, content: "[37m"}
    , { time: 56159, content: "[40mnpm[0m [0m"}
    , { time: 56159, content: "[32m[40m"}
    , { time: 56159, content: "http[0m [0m[35mGET[0m"}
    , { time: 56159, content: " https://registry.npmjs.org/methods/1.1.1\r\n[0m"}
    , { time: 56350, content: "[37m[40mnpm"}
    , { time: 56350, content: "[0m [0m[32m[40mhttp"}
    , { time: 56350, content: "[0m "}
    , { time: 56350, content: "[0m[35m304[0m https://registry.npmjs.org/qs/2.3.3\r\n"}
    , { time: 56350, content: "[0m"}
    , { time: 56587, content: "[37m"}
    , { time: 56587, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 56587, content: "[0m [0m"}
    , { time: 56587, content: "[35m200[0m https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz\r\n[0m"}
    , { time: 56624, content: "[37m[40m"}
    , { time: 56624, content: "npm[0m [0m[32m[40m"}
    , { time: 56624, content: "[35m200[0m"}
    , { time: 56624, content: "http"}
    , { time: 56624, content: "[0m [0m"}
    , { time: 56624, content: " https://registry.npmjs.org/gaze\r\n[0m"}
    , { time: 56624, content: "[37m[40m"}
    , { time: 56624, content: "npm[0m [0m[32m[40m"}
    , { time: 56624, content: "http"}
    , { time: 56624, content: "[0m [0m"}
    , { time: 56624, content: "[35m200[0m"}
    , { time: 56624, content: " https://registry.npmjs.org/pretty-ms/-/pretty-ms-1.0.1.tgz\r\n"}
    , { time: 56624, content: "[0m"}
    , { time: 56639, content: "[37m"}
    , { time: 56639, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 56639, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/hawk/1.1.1\r\n[0m"}
    , { time: 56644, content: "[37m"}
    , { time: 56644, content: "[40mnpm[0m [0m"}
    , { time: 56644, content: "[32m[40mhttp[0m"}
    , { time: 56644, content: " [0m[35m200"}
    , { time: 56644, content: "[0m https://registry.npmjs.org/cookie/-/cookie-0.1.2.tgz\r\n[0m"}
    , { time: 56645, content: "[40mnpm[0m "}
    , { time: 56645, content: "[37m"}
    , { time: 56645, content: "[0m[32m[40m"}
    , { time: 56646, content: "http[0m [0m[35m200[0m https://registry.npmjs.org/raw-body/-/raw-body-1.3.2.tgz\r\n"}
    , { time: 56646, content: "[0m"}
    , { time: 56646, content: "[37m"}
    , { time: 56646, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.6.tgz\r\n"}
    , { time: 56646, content: "[0m"}
    , { time: 56699, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/path-to-regexp/0.1.3\r\n[0m[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/vary\r\n[0m[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/parseurl\r\n[0m[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/utils-merge/1.0.0\r\n[0m[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/content-disposition/0.5.0\r\n[0m[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/range-parser\r\n[0m[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/send/0.10.1\r\n[0m"}
    , { time: 56702, content: "[37m"}
    , { time: 56702, content: "[40mnpm[0m [0m[32m"}
    , { time: 56702, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 56702, content: " https://registry.npmjs.org/proxy-addr\r\n[0m"}
    , { time: 56703, content: "[37m"}
    , { time: 56703, content: "[40mnpm"}
    , { time: 56703, content: "[0m [0m"}
    , { time: 56704, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 56704, content: "[0m https://registry.npmjs.org/escape-html/1.0.1\r\n[0m"}
    , { time: 56705, content: "[37m"}
    , { time: 56705, content: "[40mnpm[0m "}
    , { time: 56705, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 56705, content: "[35mGET[0m"}
    , { time: 56705, content: " https://registry.npmjs.org/cookie-signature/1.0.5\r\n[0m"}
    , { time: 56712, content: "[37m"}
    , { time: 56712, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 56712, content: "[0m [0m"}
    , { time: 56712, content: "[35mGET[0m https://registry.npmjs.org/accepts\r\n[0m"}
    , { time: 56714, content: "[37m"}
    , { time: 56714, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 56714, content: "http[0m "}
    , { time: 56714, content: "[0m[35mGET[0m https://registry.npmjs.org/serve-static\r\n[0m"}
    , { time: 56719, content: "[37m"}
    , { time: 56719, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 56719, content: "[0m https://registry.npmjs.org/merge-descriptors/0.0.2\r\n[0m"}
    , { time: 56719, content: "http[0m [0m[35mGET"}
    , { time: 56740, content: "[37m"}
    , { time: 56740, content: "[40mnpm[0m [0m"}
    , { time: 56740, content: "[32m"}
    , { time: 56740, content: "[40mhttp[0m "}
    , { time: 56740, content: "[0m[35m"}
    , { time: 56740, content: "200"}
    , { time: 56740, content: "[0m https://registry.npmjs.org/lodash\r\n"}
    , { time: 56740, content: "[0m"}
    , { time: 56772, content: "[37m"}
    , { time: 56773, content: "[40mnpm[0m [0m[32m"}
    , { time: 56773, content: "[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/on-finished/-/on-finished-2.2.0.tgz\r\n[0m"}
    , { time: 56862, content: "[37m"}
    , { time: 56862, content: "[40mnpm[0m [0m[32m"}
    , { time: 56862, content: "[40mhttp[0m [0m[35m"}
    , { time: 56862, content: "200[0m https://registry.npmjs.org/async\r\n[0m"}
    , { time: 56893, content: "[37m"}
    , { time: 56893, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 56893, content: "[0m [0m"}
    , { time: 56893, content: "[35m200[0m https://registry.npmjs.org/findup-sync\r\n[0m"}
    , { time: 56944, content: "[37m[40mnpm"}
    , { time: 56944, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 56944, content: "[0m[35m200"}
    , { time: 56944, content: "[0m https://registry.npmjs.org/eventemitter2"}
    , { time: 56944, content: "\r\n[0m"}
    , { time: 57001, content: "[37m[40m"}
    , { time: 57001, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 57001, content: " [0m"}
    , { time: 57001, content: "[35m200[0m https://registry.npmjs.org/async\r\n[0m"}
    , { time: 57045, content: "[37m"}
    , { time: 57045, content: "[40mnpm[0m [0m"}
    , { time: 57045, content: "[32m"}
    , { time: 57046, content: "[40mhttp[0m "}
    , { time: 57046, content: "[0m[35m200"}
    , { time: 57046, content: "[0m"}
    , { time: 57046, content: " https://registry.npmjs.org/dateformat/1.0.2-1.2.3\r\n"}
    , { time: 57046, content: "[0m"}
    , { time: 57069, content: "[37m"}
    , { time: 57069, content: "[40mnpm[0m [0m[32m"}
    , { time: 57069, content: "[40mhttp[0m"}
    , { time: 57069, content: " [0m[35m304[0m"}
    , { time: 57069, content: " https://registry.npmjs.org/hooker\r\n[0m"}
    , { time: 57171, content: "[37m[40mnpm"}
    , { time: 57171, content: "[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 57171, content: "[35m200[0m https://registry.npmjs.org/colors\r\n[0m"}
    , { time: 57228, content: "[37m[40mnpm"}
    , { time: 57228, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 57228, content: "[0m[35mGET[0m"}
    , { time: 57228, content: " https://registry.npmjs.org/dateformat/-/dateformat-1.0.2-1.2.3.tgz\r\n[0m"}
    , { time: 57322, content: "[37m"}
    , { time: 57322, content: "[40mnpm[0m [0m[32m"}
    , { time: 57322, content: "[40mhttp"}
    , { time: 57322, content: "[0m [0m[35m200"}
    , { time: 57322, content: "[0m https://registry.npmjs.org/iconv-lite\r\n"}
    , { time: 57322, content: "[0m"}
    , { time: 57403, content: "[37m[40m"}
    , { time: 57403, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 57403, content: " [0m[35m"}
    , { time: 57403, content: "200[0m https://registry.npmjs.org/coffee-script\r\n[0m"}
    , { time: 57447, content: "[37m[40mnpm"}
    , { time: 57447, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 57448, content: "[0m[35m200"}
    , { time: 57448, content: "[0m https://registry.npmjs.org/rimraf\r\n[0m"}
    , { time: 57481, content: "[37m"}
    , { time: 57481, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 57481, content: "[0m[35mGET"}
    , { time: 57481, content: "[0m https://registry.npmjs.org/minimatch\r\n[0m"}
    , { time: 57489, content: "[37m"}
    , { time: 57489, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 57489, content: "http[0m"}
    , { time: 57489, content: " [0m[35m304[0m https://registry.npmjs.org/which\r\n[0m"}
    , { time: 57528, content: "[37m[40m"}
    , { time: 57528, content: "npm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/array-differ\r\n[0m"}
    , { time: 57529, content: "[37m"}
    , { time: 57529, content: "[40mnpm[0m "}
    , { time: 57529, content: "[0m[32m[40m"}
    , { time: 57529, content: "http[0m [0m"}
    , { time: 57529, content: "[35mGET[0m"}
    , { time: 57529, content: " https://registry.npmjs.org/array-union\r\n[0m"}
    , { time: 57598, content: "[37m"}
    , { time: 57598, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 57598, content: "http[0m [0m[35m"}
    , { time: 57598, content: "304[0m https://registry.npmjs.org/minimatch\r\n"}
    , { time: 57598, content: "[0m"}
    , { time: 57632, content: "[37m"}
    , { time: 57632, content: "[40mnpm[0m [0m"}
    , { time: 57632, content: "[32m[40m"}
    , { time: 57632, content: "http[0m [0m[35m304[0m"}
    , { time: 57632, content: " https://registry.npmjs.org/getobject\r\n[0m"}
    , { time: 57778, content: "[37m"}
    , { time: 57778, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 57778, content: " [0m[35mGET[0m https://registry.npmjs.org/glob\r\n"}
    , { time: 57778, content: "[0m"}
    , { time: 57813, content: "[37m[40m"}
    , { time: 57813, content: "npm[0m [0m[32m[40m"}
    , { time: 57813, content: "http[0m [0m"}
    , { time: 57813, content: "[35m304[0m https://registry.npmjs.org/grunt-legacy-util\r\n[0m"}
    , { time: 57820, content: "[37m[40m"}
    , { time: 57820, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 57820, content: " [0m[35m"}
    , { time: 57820, content: "304[0m https://registry.npmjs.org/exit\r\n[0m"}
    , { time: 57863, content: "[37m"}
    , { time: 57863, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 57863, content: "http[0m "}
    , { time: 57863, content: "[0m[35mGET[0m https://registry.npmjs.org/crc/3.2.1\r\n[0m"}
    , { time: 57891, content: "[37m[40m"}
    , { time: 57892, content: "npm[0m [0m[32m[40mhttp"}
    , { time: 57892, content: "[0m [0m[35m304[0m https://registry.npmjs.org/grunt-legacy-log\r\n"}
    , { time: 57892, content: "[0m"}
    , { time: 57917, content: "[37m"}
    , { time: 57918, content: "[40mnpm[0m [0m[32m"}
    , { time: 57918, content: "[40mhttp[0m [0m[35m200"}
    , { time: 57918, content: "[0m https://registry.npmjs.org/lodash\r\n[0m"}
    , { time: 57947, content: "[37m"}
    , { time: 57947, content: "[40mnpm[0m [0m"}
    , { time: 57947, content: "[32m[40mhttp[0m"}
    , { time: 57947, content: " [0m[35m200[0m https://registry.npmjs.org/underscore.string\r\n[0m"}
    , { time: 57985, content: "[37m"}
    , { time: 57986, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 57986, content: "[0m [0m"}
    , { time: 57986, content: "[35mGET[0m https://registry.npmjs.org/globule\r\n[0m"}
    , { time: 57999, content: "[37m"}
    , { time: 57999, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 57999, content: "[35m200[0m https://registry.npmjs.org/dateformat/-/dateformat-1.0.2-1.2.3.tgz\r\n[0m"}
    , { time: 58012, content: "[37m"}
    , { time: 58012, content: "[40mnpm[0m [0m"}
    , { time: 58012, content: "[32m[40m"}
    , { time: 58012, content: "http[0m [0m[35m304[0m"}
    , { time: 58012, content: " https://registry.npmjs.org/nopt\r\n[0m"}
    , { time: 58236, content: "[37m"}
    , { time: 58236, content: "[0m"}
    , { time: 58236, content: "[40mnpm[0m "}
    , { time: 58236, content: "[32m[40mhttp[0m "}
    , { time: 58236, content: "[0m[35m200"}
    , { time: 58236, content: "[0m https://registry.npmjs.org/js-yaml\r\n[0m"}
    , { time: 58320, content: "[37m[40mnpm"}
    , { time: 58320, content: "[0m [0m[32m[40mhttp"}
    , { time: 58320, content: "[0m [0m"}
    , { time: 58320, content: "[35m200[0m https://registry.npmjs.org/bl\r\n[0m"}
    , { time: 58322, content: "[37m"}
    , { time: 58322, content: "[40mnpm"}
    , { time: 58322, content: "[0m"}
    , { time: 58322, content: " [0m[32m[40m"}
    , { time: 58322, content: " [0m"}
    , { time: 58322, content: "[35m"}
    , { time: 58322, content: "304[0m"}
    , { time: 58322, content: "http[0m"}
    , { time: 58322, content: " https://registry.npmjs.org/forever-agent\r\n[0m"}
    , { time: 58391, content: "[37m"}
    , { time: 58391, content: " https://registry.npmjs.org/glob\r\n[0m"}
    , { time: 58391, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m200[0m"}
    , { time: 58483, content: "[37m"}
    , { time: 58483, content: "[40mnpm[0m "}
    , { time: 58483, content: "[0m[32m[40mhttp[0m [0m[35mGET[0m"}
    , { time: 58483, content: " https://registry.npmjs.org/parse-ms\r\n[0m"}
    , { time: 58488, content: "[37m"}
    , { time: 58488, content: "[40mnpm[0m [0m[32m"}
    , { time: 58488, content: "[40mhttp[0m"}
    , { time: 58488, content: " [0m[35mGET[0m https://registry.npmjs.org/strip-ansi\r\n[0m"}
    , { time: 58489, content: "[37m"}
    , { time: 58489, content: "[40mnpm[0m"}
    , { time: 58489, content: " [0m[32m"}
    , { time: 58489, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/ansi-styles\r\n[0m"}
    , { time: 58491, content: "[37m"}
    , { time: 58491, content: "[40mnpm[0m"}
    , { time: 58491, content: " [0m[32m"}
    , { time: 58491, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 58491, content: " https://registry.npmjs.org/supports-color\r\n[0m"}
    , { time: 58500, content: "[37m"}
    , { time: 58500, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 58500, content: "http[0m [0m[35m304[0m https://registry.npmjs.org/form-data\r\n[0m"}
    , { time: 58504, content: "[37m"}
    , { time: 58504, content: "[40mnpm[0m [0m"}
    , { time: 58504, content: "[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/escape-string-regexp\r\n[0m"}
    , { time: 58505, content: "[37m"}
    , { time: 58505, content: "[40mnpm[0m [0m"}
    , { time: 58505, content: "[32m[40mhttp"}
    , { time: 58506, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/has-ansi\r\n[0m"}
    , { time: 58516, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/get-stdin\r\n[0m"}
    , { time: 58518, content: "[37m[40m"}
    , { time: 58518, content: "npm[0m [0m[32m[40mhttp[0m [0m[35m"}
    , { time: 58518, content: "200[0m https://registry.npmjs.org/json-stringify-safe\r\n[0m"}
    , { time: 58519, content: "[37m"}
    , { time: 58519, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 58520, content: "http[0m [0m[35m304[0m"}
    , { time: 58520, content: " https://registry.npmjs.org/tunnel-agent\r\n[0m"}
    , { time: 58585, content: "[37m[40mnpm"}
    , { time: 58585, content: "[0m [0m[32m[40mhttp"}
    , { time: 58585, content: "[0m [0m"}
    , { time: 58585, content: "[35m304[0m https://registry.npmjs.org/http-signature\r\n[0m"}
    , { time: 58586, content: "[37m"}
    , { time: 58586, content: "[40mnpm"}
    , { time: 58586, content: "[0m "}
    , { time: 58586, content: "[0m[32m[40mhttp[0m"}
    , { time: 58586, content: " [0m[35m304"}
    , { time: 58586, content: "[0m https://registry.npmjs.org/caseless\r\n[0m"}
    , { time: 58780, content: "[37m"}
    , { time: 58780, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 58780, content: "http[0m [0m[35m"}
    , { time: 58780, content: "304[0m https://registry.npmjs.org/mime-types\r\n"}
    , { time: 58780, content: "[0m"}
    , { time: 58784, content: "[37m"}
    , { time: 58785, content: "[40mnpm[0m "}
    , { time: 58785, content: "[0m[32m"}
    , { time: 58785, content: "[40mhttp[0m [0m[35m"}
    , { time: 58785, content: "304[0m https://registry.npmjs.org/aws-sign2\r\n[0m"}
    , { time: 58804, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/oauth-sign\r\n[0m"}
    , { time: 58823, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/tough-cookie\r\n[0m"}
    , { time: 58867, content: "[37m"}
    , { time: 58867, content: "[40mnpm[0m [0m[32m"}
    , { time: 58868, content: "[40m"}
    , { time: 58868, content: "http[0m [0m[35m"}
    , { time: 58868, content: "200[0m https://registry.npmjs.org/node-uuid\r\n"}
    , { time: 58868, content: "[0m"}
    , { time: 58995, content: "[37m"}
    , { time: 58996, content: "[40mnpm[0m "}
    , { time: 58996, content: "[0m[32m"}
    , { time: 58996, content: "[40mhttp[0m [0m"}
    , { time: 58996, content: "[35m304[0m"}
    , { time: 58996, content: " https://registry.npmjs.org/qs\r\n[0m"}
    , { time: 59006, content: "[37m"}
    , { time: 59006, content: "[40mnpm[0m "}
    , { time: 59006, content: "[0m[32m[40mhttp[0m"}
    , { time: 59006, content: " [0m"}
    , { time: 59006, content: "[35m304[0m https://registry.npmjs.org/combined-stream\r\n[0m"}
    , { time: 59025, content: "[37m"}
    , { time: 59025, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 59025, content: "http[0m [0m[35m200[0m https://registry.npmjs.org/finalhandler/0.3.3\r\n[0m"}
    , { time: 59052, content: "[37m[40mnpm"}
    , { time: 59052, content: "[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 59052, content: "[35m304[0m"}
    , { time: 59052, content: " https://registry.npmjs.org/stringstream\r\n[0m"}
    , { time: 59064, content: "[37m[40mnpm[0m"}
    , { time: 59064, content: " [0m[32m[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/methods/1.1.1\r\n[0m"}
    , { time: 59153, content: "[40mnpm[0m "}
    , { time: 59153, content: "[0m"}
    , { time: 59153, content: "[32m[40mhttp[0m"}
    , { time: 59153, content: " [0m[35m"}
    , { time: 59153, content: " https://registry.npmjs.org/finalhandler/-/finalhandler-0.3.3.tgz\r\n"}
    , { time: 59153, content: "[37m"}
    , { time: 59153, content: "[0m"}
    , { time: 59154, content: "GET[0m"}
    , { time: 59185, content: "[37m"}
    , { time: 59186, content: "[40mnpm[0m [0m"}
    , { time: 59186, content: "[32m[40mhttp[0m [0m"}
    , { time: 59186, content: "[35mGET"}
    , { time: 59186, content: "[0m https://registry.npmjs.org/methods/-/methods-1.1.1.tgz\r\n[0m"}
    , { time: 59195, content: "[37m"}
    , { time: 59195, content: "[40mnpm[0m [0m[32m"}
    , { time: 59195, content: "[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/hawk/1.1.1\r\n[0m"}
    , { time: 59196, content: "[37m"}
    , { time: 59196, content: "[40mnpm[0m"}
    , { time: 59196, content: " [0m[32m"}
    , { time: 59196, content: "[40mhttp[0m [0m[35m304[0m"}
    , { time: 59196, content: " https://registry.npmjs.org/path-to-regexp/0.1.3\r\n[0m"}
    , { time: 59216, content: "[37m"}
    , { time: 59216, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 59216, content: "[0m[35m304"}
    , { time: 59217, content: "[0m https://registry.npmjs.org/vary\r\n[0m"}
    , { time: 59242, content: "[37m[40mnpm[0m"}
    , { time: 59242, content: " [0m[32m[40mhttp[0m [0m"}
    , { time: 59242, content: "[35m304[0m https://registry.npmjs.org/parseurl"}
    , { time: 59242, content: "\r\n[0m"}
    , { time: 59328, content: "[37m[40mnpm"}
    , { time: 59328, content: "[0m [0m[32m[40mhttp[0m"}
    , { time: 59328, content: " [0m[35m"}
    , { time: 59328, content: "304[0m https://registry.npmjs.org/utils-merge/1.0.0\r\n[0m"}
    , { time: 59381, content: "[37m[40mnpm"}
    , { time: 59381, content: "[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 59381, content: "[35m304[0m"}
    , { time: 59381, content: " https://registry.npmjs.org/range-parser\r\n[0m"}
    , { time: 59393, content: "[37m"}
    , { time: 59393, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 59393, content: "[0m[35m200"}
    , { time: 59393, content: "[0m https://registry.npmjs.org/content-disposition/0.5.0\r\n[0m"}
    , { time: 59420, content: "[37m[40m"}
    , { time: 59420, content: "npm[0m [0m"}
    , { time: 59420, content: "[32m[40m"}
    , { time: 59420, content: "http[0m [0m[35m200"}
    , { time: 59420, content: "[0m https://registry.npmjs.org/send/0.10.1\r\n"}
    , { time: 59420, content: "[0m"}
    , { time: 59522, content: "[37m"}
    , { time: 59522, content: "[40mnpm[0m "}
    , { time: 59522, content: "[0m[32m"}
    , { time: 59522, content: "[40mhttp[0m "}
    , { time: 59522, content: "[0m[35m304"}
    , { time: 59522, content: "[0m https://registry.npmjs.org/proxy-addr\r\n"}
    , { time: 59522, content: "[0m"}
    , { time: 59570, content: "[37m"}
    , { time: 59570, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 59570, content: "[0m[35m200[0m https://registry.npmjs.org/cookie-signature/1.0.5\r\n[0m"}
    , { time: 59591, content: "[37m"}
    , { time: 59591, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 59591, content: "http[0m"}
    , { time: 59591, content: " [0m[35m304[0m https://registry.npmjs.org/escape-html/1.0.1\r\n[0m"}
    , { time: 59616, content: "[37m"}
    , { time: 59616, content: "[40mnpm[0m [0m"}
    , { time: 59616, content: "[32m[40mhttp"}
    , { time: 59616, content: "[0m [0m[35mGET[0m"}
    , { time: 59616, content: " https://registry.npmjs.org/ee-first/1.1.0\r\n[0m"}
    , { time: 59789, content: "[37m"}
    , { time: 59789, content: "[40mnpm[0m [0m"}
    , { time: 59789, content: "[32m[40m"}
    , { time: 59789, content: "http[0m [0m[35m304"}
    , { time: 59789, content: "[0m https://registry.npmjs.org/minimatch\r\n[0m"}
    , { time: 59827, content: "[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.0.tgz\r\n[0m[37m[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/serve-static\r\n[0m"}
    , { time: 59828, content: "[37m"}
    , { time: 59828, content: "[40mnpm[0m"}
    , { time: 59828, content: " [0m[32m"}
    , { time: 59828, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 59828, content: " https://registry.npmjs.org/send/-/send-0.10.1.tgz\r\n[0m"}
    , { time: 59856, content: "[37m[40mnpm"}
    , { time: 59856, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 59856, content: "[0m[35m304[0m"}
    , { time: 59856, content: " https://registry.npmjs.org/array-differ\r\n[0m"}
    , { time: 59877, content: "[37m"}
    , { time: 59877, content: "[40mnpm[0m"}
    , { time: 59877, content: " [0m[32m[40mhttp[0m [0m[35mGET"}
    , { time: 59877, content: "[0m https://registry.npmjs.org/noptify\r\n"}
    , { time: 59877, content: "[0m"}
    , { time: 59882, content: "[37m"}
    , { time: 59882, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 59882, content: "http[0m"}
    , { time: 59883, content: " [0m[35m200[0m https://registry.npmjs.org/finalhandler/-/finalhandler-0.3.3.tgz\r\n"}
    , { time: 59883, content: "[0m"}
    , { time: 59911, content: "[37m"}
    , { time: 59911, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 59911, content: "[0m"}
    , { time: 59911, content: "[0m [0m[35m200[0m https://registry.npmjs.org/methods/-/methods-1.1.1.tgz\r\n"}
    , { time: 59916, content: "[37m"}
    , { time: 59916, content: "[40mnpm[0m [0m[32m"}
    , { time: 59916, content: "[40mhttp"}
    , { time: 59916, content: "[0m [0m[35m200[0m https://registry.npmjs.org/accepts\r\n"}
    , { time: 59916, content: "[0m"}
    , { time: 59976, content: "[37m"}
    , { time: 59976, content: "[40mnpm[0m [0m"}
    , { time: 59977, content: "[32m[40mhttp[0m [0m"}
    , { time: 59977, content: "[35m304"}
    , { time: 59977, content: "[0m https://registry.npmjs.org/array-union\r\n[0m"}
    , { time: 59984, content: "[37m"}
    , { time: 59984, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 59984, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/faye-websocket\r\n[0m"}
    , { time: 59986, content: "[37m"}
    , { time: 59986, content: "[40mnpm[0m"}
    , { time: 59986, content: " [0m"}
    , { time: 59986, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 59986, content: "[0m https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.5.tgz\r\n"}
    , { time: 59986, content: "[0m"}
    , { time: 60047, content: "[37m"}
    , { time: 60047, content: "[40mnpm[0m [0m"}
    , { time: 60047, content: "[32m"}
    , { time: 60047, content: "[40mhttp[0m [0m[35m304"}
    , { time: 60047, content: "[0m https://registry.npmjs.org/crc/3.2.1\r\n[0m"}
    , { time: 60069, content: "[37m"}
    , { time: 60069, content: "[40mnpm[0m [0m"}
    , { time: 60069, content: "[32m[40m"}
    , { time: 60069, content: "http[0m [0m"}
    , { time: 60069, content: "[35m200[0m"}
    , { time: 60069, content: " https://registry.npmjs.org/merge-descriptors/0.0.2\r\n"}
    , { time: 60069, content: "[0m"}
    , { time: 60114, content: "[37m[40m"}
    , { time: 60115, content: "npm[0m [0m[32m[40mhttp[0m "}
    , { time: 60115, content: "[0m[35m304"}
    , { time: 60115, content: "[0m https://registry.npmjs.org/globule\r\n[0m"}
    , { time: 60248, content: "[37m[40mnpm"}
    , { time: 60248, content: "[0m [0m[32m[40mhttp[0m"}
    , { time: 60248, content: " [0m[35m304[0m https://registry.npmjs.org/strip-ansi\r\n[0m"}
    , { time: 60251, content: "[37m[40m"}
    , { time: 60251, content: "npm[0m [0m[32m"}
    , { time: 60251, content: "[40mhttp[0m "}
    , { time: 60251, content: "[0m[35m200[0m https://registry.npmjs.org/parse-ms\r\n[0m"}
    , { time: 60308, content: "[37m[40mnpm"}
    , { time: 60308, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 60308, content: "[0m[35m200[0m"}
    , { time: 60308, content: " https://registry.npmjs.org/ansi-styles\r\n[0m"}
    , { time: 60325, content: "[37m"}
    , { time: 60325, content: "[40mnpm[0m [0m"}
    , { time: 60325, content: "[32m"}
    , { time: 60325, content: "[40mhttp[0m [0m"}
    , { time: 60326, content: "[35m200[0m"}
    , { time: 60326, content: " https://registry.npmjs.org/supports-color\r\n"}
    , { time: 60326, content: "[0m"}
    , { time: 60422, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 60423, content: " [0m"}
    , { time: 60423, content: "[35m200[0m https://registry.npmjs.org/glob\r\n[0m"}
    , { time: 60423, content: "[37m"}
    , { time: 60458, content: "[37m"}
    , { time: 60458, content: "[40mnpm[0m [0m[32m"}
    , { time: 60458, content: "[40mhttp"}
    , { time: 60458, content: "[0m [0m[35mGET"}
    , { time: 60458, content: "[0m https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-0.0.2.tgz\r\n"}
    , { time: 60458, content: "[0m"}
    , { time: 60532, content: "[37m[40mnpm[0m"}
    , { time: 60532, content: " [0m[32m[40mhttp"}
    , { time: 60532, content: "[0m "}
    , { time: 60532, content: "[0m[35m200[0m https://registry.npmjs.org/has-ansi\r\n[0m"}
    , { time: 60541, content: "[37m"}
    , { time: 60541, content: "[40mnpm[0m"}
    , { time: 60541, content: " [0m[32m[40mhttp"}
    , { time: 60541, content: "[0m "}
    , { time: 60541, content: "[0m[35m200[0m https://registry.npmjs.org/escape-string-regexp\r\n"}
    , { time: 60541, content: "[0m"}
    , { time: 60542, content: "[37m"}
    , { time: 60542, content: "[40mnpm[0m [0m"}
    , { time: 60543, content: "[32m[40mhttp[0m [0m[35m"}
    , { time: 60543, content: "304[0m https://registry.npmjs.org/ee-first/1.1.0\r\n"}
    , { time: 60543, content: "[0m"}
    , { time: 60579, content: "[37m"}
    , { time: 60579, content: "[40mnpm[0m [0m[32m"}
    , { time: 60579, content: "[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/get-stdin\r\n"}
    , { time: 60579, content: "[0m"}
    , { time: 60602, content: "[37m[40mnpm"}
    , { time: 60602, content: "[0m [0m[32m[40mhttp"}
    , { time: 60602, content: "[0m"}
    , { time: 60602, content: " [0m[35m200[0m"}
    , { time: 60602, content: " https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.0.tgz\r\n[0m"}
    , { time: 60613, content: "[37m"}
    , { time: 60613, content: "[40mnpm[0m [0m[32m"}
    , { time: 60613, content: "[40mhttp[0m [0m[35m"}
    , { time: 60613, content: "200[0m https://registry.npmjs.org/send/-/send-0.10.1.tgz\r\n[0m"}
    , { time: 60633, content: "[37m"}
    , { time: 60633, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 60633, content: "[0m [0m"}
    , { time: 60633, content: "[35m304[0m https://registry.npmjs.org/noptify\r\n[0m"}
    , { time: 60789, content: "[37m"}
    , { time: 60789, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 60789, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.3.tgz\r\n"}
    , { time: 60789, content: "[0m"}
    , { time: 60813, content: "[37m"}
    , { time: 60813, content: "[40mnpm[0m [0m"}
    , { time: 60813, content: "[32m[40m"}
    , { time: 60813, content: "http[0m [0m[35m200"}
    , { time: 60813, content: "[0m https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.5.tgz\r\n[0m"}
    , { time: 60834, content: "[37m[40mnpm"}
    , { time: 60835, content: "[0m [0m[32m[40mhttp[0m"}
    , { time: 60835, content: " [0m[35mGET[0m https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz\r\n[0m"}
    , { time: 60965, content: "npm[0m [0m[32m[40mhttp"}
    , { time: 60965, content: "[0m [0m[35m200[0m https://registry.npmjs.org/faye-websocket\r\n[0m"}
    , { time: 60965, content: "[37m[40m"}
    , { time: 61197, content: "[37m"}
    , { time: 61197, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 61197, content: "http[0m"}
    , { time: 61198, content: " [0m[35mGET[0m"}
    , { time: 61198, content: " https://registry.npmjs.org/array-uniq\r\n[0m"}
    , { time: 61209, content: "[37m"}
    , { time: 61209, content: "[40mnpm[0m [0m"}
    , { time: 61209, content: "[32m[40mhttp[0m [0m[35m200"}
    , { time: 61209, content: "[0m https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-0.0.2.tgz\r\n"}
    , { time: 61209, content: "[0m"}
    , { time: 61293, content: "[37m"}
    , { time: 61293, content: "[40mnpm[0m [0m[32m"}
    , { time: 61293, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/delayed-stream/0.0.5"}
    , { time: 61293, content: "\r\n[0m"}
    , { time: 61580, content: "[37m"}
    , { time: 61580, content: "[40mnpm[0m [0m"}
    , { time: 61580, content: "[32m[40mhttp[0m "}
    , { time: 61580, content: "[0m[35m200"}
    , { time: 61580, content: "[0m https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.3.tgz\r\n[0m"}
    , { time: 61601, content: "[37m"}
    , { time: 61601, content: "[40mnpm[0m [0m"}
    , { time: 61601, content: "[32m[40mhttp[0m [0m"}
    , { time: 61601, content: "[35m200"}
    , { time: 61601, content: "[0m https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz\r\n[0m"}
    , { time: 61756, content: "[37m"}
    , { time: 61756, content: "[40mnpm[0m [0m"}
    , { time: 61756, content: "[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/readable-stream\r\n"}
    , { time: 61756, content: "[0m"}
    , { time: 62076, content: "[37m"}
    , { time: 62076, content: "[40mnpm[0m [0m"}
    , { time: 62076, content: "[32m[40mhttp[0m [0m"}
    , { time: 62076, content: "[35m304[0m https://registry.npmjs.org/delayed-stream/0.0.5\r\n[0m"}
    , { time: 62080, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 62080, content: "[37m"}
    , { time: 62080, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/mkdirp\r\n"}
    , { time: 62080, content: "[0m"}
    , { time: 62082, content: "[37m"}
    , { time: 62082, content: "[40mnpm[0m "}
    , { time: 62082, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 62082, content: "[35mGET[0m"}
    , { time: 62082, content: " https://registry.npmjs.org/constantinople\r\n[0m"}
    , { time: 62084, content: "[37m"}
    , { time: 62084, content: "[40mnpm[0m "}
    , { time: 62084, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 62084, content: "[35mGET[0m"}
    , { time: 62084, content: " https://registry.npmjs.org/void-elements\r\n[0m"}
    , { time: 62086, content: "[37m"}
    , { time: 62086, content: "[40mnpm[0m"}
    , { time: 62087, content: " [0m"}
    , { time: 62087, content: "[32m[40mhttp[0m"}
    , { time: 62087, content: " [0m[35mGET"}
    , { time: 62087, content: "[0m https://registry.npmjs.org/with\r\n"}
    , { time: 62087, content: "[0m"}
    , { time: 62093, content: "[37m"}
    , { time: 62093, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 62093, content: "http[0m [0m[35mGET[0m"}
    , { time: 62093, content: " https://registry.npmjs.org/transformers/2.1.0\r\n[0m"}
    , { time: 62095, content: "[37m"}
    , { time: 62095, content: "[40mnpm[0m"}
    , { time: 62095, content: " [0m[32m"}
    , { time: 62095, content: "[40mhttp[0m [0m[35mGET[0m"}
    , { time: 62095, content: " https://registry.npmjs.org/commander\r\n[0m"}
    , { time: 62095, content: "[37m"}
    , { time: 62095, content: "[40mnpm"}
    , { time: 62096, content: "[0m "}
    , { time: 62096, content: "[0m[32m"}
    , { time: 62096, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/character-parser/1.2.1\r\n"}
    , { time: 62096, content: "[0m"}
    , { time: 62116, content: "[37m"}
    , { time: 62116, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 62116, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/assert-plus\r\n"}
    , { time: 62116, content: "[0m"}
    , { time: 62122, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 62122, content: "[37m"}
    , { time: 62122, content: "http[0m "}
    , { time: 62122, content: "[0m[35mGET[0m https://registry.npmjs.org/asn1/0.1.11\r\n[0m"}
    , { time: 62187, content: "[37m"}
    , { time: 62187, content: "[40mnpm[0m [0m[32m"}
    , { time: 62187, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/ctype/0.5.3\r\n[0m"}
    , { time: 62276, content: "[37m[40m"}
    , { time: 62276, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 62276, content: " [0m[35m304[0m https://registry.npmjs.org/array-uniq\r\n[0m"}
    , { time: 62283, content: "[37m"}
    , { time: 62283, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 62284, content: "[0m[35mGET[0m https://registry.npmjs.org/abbrev\r\n[0m"}
    , { time: 62479, content: "[37m"}
    , { time: 62479, content: "[40mnpm[0m "}
    , { time: 62479, content: "[0m[32m[40mhttp[0m [0m[35m304[0m"}
    , { time: 62479, content: " https://registry.npmjs.org/with\r\n[0m"}
    , { time: 62501, content: "[37m"}
    , { time: 62501, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 62502, content: "[35m304[0m"}
    , { time: 62502, content: " https://registry.npmjs.org/readable-stream\r\n[0m"}
    , { time: 62537, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 62537, content: "[0m [0m"}
    , { time: 62538, content: "[35mGET[0m https://registry.npmjs.org/mime-db\r\n"}
    , { time: 62538, content: "[0m"}
    , { time: 62538, content: "[37m"}
    , { time: 62609, content: "[37m"}
    , { time: 62609, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET"}
    , { time: 62609, content: "[0m https://registry.npmjs.org/with/-/with-4.0.1.tgz\r\n[0m"}
    , { time: 62670, content: "[37m"}
    , { time: 62670, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 62670, content: "http[0m [0m[35mGET[0m"}
    , { time: 62670, content: " https://registry.npmjs.org/sigmund\r\n[0m"}
    , { time: 62673, content: "[37m"}
    , { time: 62673, content: "[40mnpm[0m [0m"}
    , { time: 62673, content: "[32m[40mhttp[0m [0m"}
    , { time: 62673, content: "[35m304[0m https://registry.npmjs.org/transformers/2.1.0\r\n"}
    , { time: 62673, content: "[0m"}
    , { time: 62769, content: "[40mnpm[0m [0m[32m"}
    , { time: 62769, content: "[0m [0m[35m"}
    , { time: 62769, content: "GET[0m https://registry.npmjs.org/lru-cache\r\n"}
    , { time: 62769, content: "[0m"}
    , { time: 62769, content: "[40mhttp"}
    , { time: 62769, content: "[37m"}
    , { time: 62913, content: "[37m"}
    , { time: 62913, content: "[40mnpm[0m [0m[32m"}
    , { time: 62913, content: "[40mhttp"}
    , { time: 62913, content: "[0m [0m[35m304[0m"}
    , { time: 62913, content: " https://registry.npmjs.org/void-elements\r\n[0m"}
    , { time: 62947, content: "[37m"}
    , { time: 62947, content: "[40mnpm[0m [0m[32m"}
    , { time: 62947, content: "[40mhttp[0m [0m[35m200[0m https://registry.npmjs.org/character-parser/1.2.1\r\n"}
    , { time: 62948, content: "[0m"}
    , { time: 62962, content: "[37m"}
    , { time: 62962, content: "[40mnpm[0m "}
    , { time: 62962, content: "[0m[32m[40mhttp[0m [0m[35m"}
    , { time: 62962, content: "GET[0m https://registry.npmjs.org/character-parser/-/character-parser-1.2.1.tgz\r\n[0m"}
    , { time: 63089, content: "[37m"}
    , { time: 63089, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 63089, content: "http[0m "}
    , { time: 63089, content: "[0m[35m200[0m"}
    , { time: 63089, content: " https://registry.npmjs.org/commander\r\n[0m"}
    , { time: 63108, content: "[37m[40m"}
    , { time: 63108, content: "npm[0m [0m[32m[40m"}
    , { time: 63108, content: "http[0m"}
    , { time: 63108, content: " [0m[35m200[0m https://registry.npmjs.org/mkdirp\r\n[0m"}
    , { time: 63148, content: "[37m"}
    , { time: 63148, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 63148, content: "http[0m [0m[35m304[0m"}
    , { time: 63148, content: " https://registry.npmjs.org/assert-plus\r\n"}
    , { time: 63148, content: "[0m"}
    , { time: 63173, content: "[37m"}
    , { time: 63173, content: "[40mnpm[0m [0m[32m"}
    , { time: 63173, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/inherits"}
    , { time: 63173, content: "\r\n[0m"}
    , { time: 63175, content: "[37m"}
    , { time: 63175, content: "[40mnpm[0m"}
    , { time: 63175, content: " [0m[32m[40mhttp"}
    , { time: 63175, content: "[0m [0m"}
    , { time: 63175, content: "[35m304[0m https://registry.npmjs.org/asn1/0.1.11\r\n[0m"}
    , { time: 63195, content: "[37m"}
    , { time: 63195, content: " [0m[35m"}
    , { time: 63195, content: "304[0m https://registry.npmjs.org/constantinople\r\n[0m"}
    , { time: 63195, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 63238, content: "[37m"}
    , { time: 63238, content: "[40mnpm[0m [0m[32m"}
    , { time: 63238, content: "[40mhttp"}
    , { time: 63238, content: "[0m [0m[35m"}
    , { time: 63238, content: "GET[0m https://registry.npmjs.org/inherits\r\n"}
    , { time: 63238, content: "[0m"}
    , { time: 63276, content: "[40mnpm[0m [0m[32m"}
    , { time: 63276, content: "[40m"}
    , { time: 63276, content: "http[0m [0m"}
    , { time: 63276, content: "[35mGET[0m"}
    , { time: 63276, content: " https://registry.npmjs.org/graceful-fs\r\n"}
    , { time: 63276, content: "[37m"}
    , { time: 63276, content: "[0m"}
    , { time: 63342, content: "[37m[40mnpm"}
    , { time: 63342, content: "[0m [0m[32m[40mhttp[0m"}
    , { time: 63342, content: " "}
    , { time: 63342, content: "[0m[35m304[0m https://registry.npmjs.org/mime-db\r\n[0m"}
    , { time: 63391, content: "[37m[40mnpm"}
    , { time: 63391, content: "[0m [0m[32m[40mhttp"}
    , { time: 63391, content: "[0m "}
    , { time: 63391, content: "[0m[35m304[0m https://registry.npmjs.org/lru-cache\r\n[0m"}
    , { time: 63393, content: "[37m"}
    , { time: 63393, content: "[40mnpm"}
    , { time: 63393, content: "[0m "}
    , { time: 63393, content: "[0m[32m[40mhttp[0m"}
    , { time: 63394, content: " [0m"}
    , { time: 63394, content: "[35m"}
    , { time: 63394, content: "200[0m https://registry.npmjs.org/with/-/with-4.0.1.tgz\r\n[0m"}
    , { time: 63433, content: "[37m[40mnpm"}
    , { time: 63433, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 63433, content: "[0m[35m"}
    , { time: 63433, content: "304[0m https://registry.npmjs.org/sigmund\r\n[0m"}
    , { time: 63484, content: "[37m"}
    , { time: 63484, content: "[40mnpm[0m [0m[32m"}
    , { time: 63484, content: "[40mhttp[0m"}
    , { time: 63484, content: " [0m[35mGET[0m https://registry.npmjs.org/ansi-regex\r\n"}
    , { time: 63484, content: "[0m"}
    , { time: 63485, content: "[37m"}
    , { time: 63485, content: "[40mnpm"}
    , { time: 63485, content: "[0m [0m[32m[40m"}
    , { time: 63485, content: "http[0m"}
    , { time: 63486, content: " [0m[35mGET[0m"}
    , { time: 63487, content: " https://registry.npmjs.org/ansi-regex\r\n[0m"}
    , { time: 63620, content: "[37m"}
    , { time: 63620, content: "[40mnpm[0m [0m"}
    , { time: 63621, content: "[32m[40mhttp[0m"}
    , { time: 63621, content: " [0m"}
    , { time: 63621, content: "[35m200[0m"}
    , { time: 63621, content: " https://registry.npmjs.org/inherits\r\n[0m"}
    , { time: 63624, content: "[37m"}
    , { time: 63624, content: "[40mnpm[0m [0m"}
    , { time: 63624, content: "[32m[40mhttp[0m [0m"}
    , { time: 63624, content: "[35m304"}
    , { time: 63624, content: "[0m https://registry.npmjs.org/ctype/0.5.3\r\n"}
    , { time: 63624, content: "[0m"}
    , { time: 63649, content: "[37m"}
    , { time: 63649, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 63649, content: "http[0m"}
    , { time: 63649, content: " [0m[35m304[0m https://registry.npmjs.org/abbrev\r\n[0m"}
    , { time: 63655, content: "[37m"}
    , { time: 63655, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 63655, content: "http[0m "}
    , { time: 63655, content: "[0m[35m200[0m https://registry.npmjs.org/inherits\r\n[0m"}
    , { time: 63702, content: "[37m[40mnpm"}
    , { time: 63702, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 63702, content: "[0m[35m304"}
    , { time: 63703, content: "[0m https://registry.npmjs.org/graceful-fs\r\n[0m"}
    , { time: 63705, content: "[37m"}
    , { time: 63705, content: "[40mnpm[0m"}
    , { time: 63705, content: " [0m[32m"}
    , { time: 63705, content: "[40mhttp[0m [0m[35m200[0m"}
    , { time: 63705, content: " https://registry.npmjs.org/character-parser/-/character-parser-1.2.1.tgz\r\n[0m"}
    , { time: 63823, content: "[37m[40m"}
    , { time: 63823, content: "npm[0m [0m[32m[40mhttp"}
    , { time: 63823, content: "[0m [0m[35m200[0m"}
    , { time: 63823, content: " https://registry.npmjs.org/ansi-regex\r\n[0m"}
    , { time: 64166, content: "[37m[40m"}
    , { time: 64166, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 64166, content: " [0m[35m"}
    , { time: 64166, content: "200[0m https://registry.npmjs.org/ansi-regex\r\n[0m"}
    , { time: 64239, content: "[37m"}
    , { time: 64239, content: "[40mnpm[0m [0m"}
    , { time: 64239, content: "[32m[40mhttp[0m [0m"}
    , { time: 64239, content: "[35mGET"}
    , { time: 64240, content: "[0m https://registry.npmjs.org/negotiator/0.4.9\r\n[0m"}
    , { time: 64243, content: "[37m"}
    , { time: 64243, content: "[40mnpm[0m [0m"}
    , { time: 64243, content: "[32m[40mhttp[0m "}
    , { time: 64243, content: "[0m[35m"}
    , { time: 64244, content: "GET[0m https://registry.npmjs.org/forwarded\r\n[0m"}
    , { time: 64322, content: "[37m"}
    , { time: 64322, content: "[40mnpm[0m [0m"}
    , { time: 64322, content: "[32m[40mhttp[0m [0m"}
    , { time: 64322, content: "[35mGET[0m https://registry.npmjs.org/ipaddr.js/0.1.8\r\n[0m"}
    , { time: 64376, content: "[37m"}
    , { time: 64377, content: "[40mnpm[0m [0m[32m[40mhttp[0m"}
    , { time: 64377, content: " [0m[35mGET[0m https://registry.npmjs.org/destroy/1.0.3\r\n[0m"}
    , { time: 64409, content: "[37m[40m"}
    , { time: 64409, content: "npm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/mime/1.2.11\r\n[0m"}
    , { time: 64520, content: "[37m[40mnpm"}
    , { time: 64520, content: "GET[0m https://registry.npmjs.org/string_decoder\r\n[0m"}
    , { time: 64520, content: "[0m [0m[32m[40mhttp[0m [0m[35m"}
    , { time: 64558, content: "[37m"}
    , { time: 64558, content: "[40mnpm[0m [0m"}
    , { time: 64558, content: "[32m[40mhttp[0m [0m"}
    , { time: 64558, content: "[35mGET[0m https://registry.npmjs.org/core-util-is\r\n[0m"}
    , { time: 64591, content: "[37m"}
    , { time: 64592, content: "[40mnpm[0m [0m"}
    , { time: 64592, content: "[32m[40mhttp[0m "}
    , { time: 64592, content: "[0m[35mGET[0m https://registry.npmjs.org/isarray/0.0.1\r\n"}
    , { time: 64592, content: "[0m"}
    , { time: 64616, content: "[37m"}
    , { time: 64616, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/esprima\r\n"}
    , { time: 64616, content: "[0m"}
    , { time: 64646, content: "[37m"}
    , { time: 64646, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/argparse\r\n"}
    , { time: 64646, content: "[0m"}
    , { time: 64736, content: "[37m[40m"}
    , { time: 64736, content: "npm[0m [0m[32m[40mhttp"}
    , { time: 64736, content: "[0m "}
    , { time: 64736, content: "[0m[35mGET[0m https://registry.npmjs.org/punycode\r\n"}
    , { time: 64736, content: "[0m"}
    , { time: 64886, content: "[40mnpm[0m [0m[32m"}
    , { time: 64886, content: "[37m"}
    , { time: 64887, content: "[40mhttp[0m [0m[35mGET[0m https://registry.npmjs.org/cryptiles"}
    , { time: 64887, content: "\r\n[0m"}
    , { time: 64890, content: "[37m[40mnpm[0m"}
    , { time: 64890, content: " [0m[32m[40mhttp[0m"}
    , { time: 64890, content: " [0m[35mGET[0m https://registry.npmjs.org/sntp\r\n[0m"}
    , { time: 64924, content: "[37m"}
    , { time: 64924, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 64924, content: "http[0m [0m"}
    , { time: 64924, content: "[35mGET[0m https://registry.npmjs.org/hoek\r\n[0m"}
    , { time: 64934, content: "[37m"}
    , { time: 64934, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 64934, content: "http[0m "}
    , { time: 64934, content: "[0m[35mGET[0m https://registry.npmjs.org/boom\r\n[0m"}
    , { time: 65008, content: "[37m[40m"}
    , { time: 65008, content: "npm[0m [0m[32m[40mhttp"}
    , { time: 65008, content: "[0m [0m[35m304[0m https://registry.npmjs.org/forwarded\r\n"}
    , { time: 65008, content: "[0m"}
    , { time: 65022, content: "[37m"}
    , { time: 65022, content: "[40mnpm[0m [0m[32m[40mhttp[0m [0m[35m200[0m"}
    , { time: 65022, content: " https://registry.npmjs.org/negotiator/0.4.9\r\n[0m"}
    , { time: 65034, content: "[37m"}
    , { time: 65034, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 65034, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/negotiator/-/negotiator-0.4.9.tgz\r\n"}
    , { time: 65034, content: "[0m"}
    , { time: 65131, content: "[37m"}
    , { time: 65131, content: "[40mnpm[0m "}
    , { time: 65131, content: "[0m[32m"}
    , { time: 65131, content: "[40mhttp[0m "}
    , { time: 65131, content: "[0m[35mGET"}
    , { time: 65131, content: "[0m https://registry.npmjs.org/acorn\r\n"}
    , { time: 65131, content: "[0m"}
    , { time: 65149, content: "[37m"}
    , { time: 65149, content: "[40mnpm[0m [0m"}
    , { time: 65149, content: "[32m[40m"}
    , { time: 65149, content: "http[0m [0m"}
    , { time: 65149, content: "[35m304"}
    , { time: 65149, content: "[0m https://registry.npmjs.org/ipaddr.js/0.1.8"}
    , { time: 65149, content: "\r\n"}
    , { time: 65149, content: "[0m"}
    , { time: 65155, content: "[37m"}
    , { time: 65155, content: "[40mnpm[0m "}
    , { time: 65155, content: "[0m[32m[40mhttp[0m"}
    , { time: 65155, content: " [0m"}
    , { time: 65155, content: "[35mGET[0m https://registry.npmjs.org/acorn-globals\r\n[0m"}
    , { time: 65156, content: "[40mnpm[0m"}
    , { time: 65157, content: " [0m"}
    , { time: 65157, content: "[32m[40mhttp[0m [0m[35mGET"}
    , { time: 65157, content: "[37m"}
    , { time: 65157, content: "[0m https://registry.npmjs.org/acorn-globals\r\n[0m"}
    , { time: 65185, content: "[37m"}
    , { time: 65185, content: "[40mnpm[0m [0m[32m"}
    , { time: 65185, content: "[40mhttp[0m"}
    , { time: 65185, content: " [0m"}
    , { time: 65185, content: "[35m304[0m https://registry.npmjs.org/destroy/1.0.3\r\n"}
    , { time: 65185, content: "[0m"}
    , { time: 65273, content: "[37m[40m"}
    , { time: 65273, content: "[0m [0m[35m304[0m https://registry.npmjs.org/string_decoder\r\n"}
    , { time: 65273, content: "npm[0m [0m[32m[40mhttp"}
    , { time: 65273, content: "[0m"}
    , { time: 65278, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 65278, content: " [0m[35m"}
    , { time: 65278, content: "200[0m https://registry.npmjs.org/mime/1.2.11\r\n[0m"}
    , { time: 65278, content: "[37m[40m"}
    , { time: 65307, content: "[37m[40m"}
    , { time: 65307, content: "npm[0m [0m[32m[40mhttp[0m [0m"}
    , { time: 65307, content: "[35mGET[0m https://registry.npmjs.org/css"}
    , { time: 65307, content: "\r\n[0m"}
    , { time: 65332, content: "[37m"}
    , { time: 65332, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 65332, content: "[0m[35mGET[0m https://registry.npmjs.org/uglify-js\r\n[0m"}
    , { time: 65335, content: "[37m"}
    , { time: 65335, content: "[40mnpm[0m [0m[32m"}
    , { time: 65335, content: "[40mhttp[0m "}
    , { time: 65335, content: "[0m[35mGET[0m https://registry.npmjs.org/mime/-/mime-1.2.11.tgz\r\n[0m"}
    , { time: 65351, content: "[37m"}
    , { time: 65351, content: "[40mnpm[0m "}
    , { time: 65351, content: "[0m[32m[40mhttp[0m [0m"}
    , { time: 65351, content: "[35m304"}
    , { time: 65352, content: "[0m https://registry.npmjs.org/isarray/0.0.1\r\n[0m"}
    , { time: 65353, content: "[37m"}
    , { time: 65353, content: "[40mnpm[0m"}
    , { time: 65353, content: " [0m"}
    , { time: 65353, content: "[32m[40mhttp[0m [0m"}
    , { time: 65353, content: "[35mGET[0m https://registry.npmjs.org/promise\r\n[0m"}
    , { time: 65428, content: "[37m"}
    , { time: 65428, content: "[40mnpm[0m [0m"}
    , { time: 65428, content: "[32m[40mhttp[0m [0m"}
    , { time: 65428, content: "[35m304"}
    , { time: 65429, content: "[0m https://registry.npmjs.org/esprima\r\n[0m"}
    , { time: 65477, content: "[37m"}
    , { time: 65477, content: "[40mnpm[0m [0m[32m"}
    , { time: 65477, content: "[40mhttp"}
    , { time: 65477, content: "[0m [0m[35m304"}
    , { time: 65477, content: "[0m https://registry.npmjs.org/punycode\r\n[0m"}
    , { time: 65480, content: "[37m"}
    , { time: 65480, content: "[40mnpm[0m [0m"}
    , { time: 65480, content: "[32m[40mhttp[0m"}
    , { time: 65480, content: " [0m[35mGET[0m https://registry.npmjs.org/minimist/0.0.8"}
    , { time: 65480, content: "\r\n[0m"}
    , { time: 65554, content: "[37m"}
    , { time: 65554, content: "[40mnpm[0m [0m[32m"}
    , { time: 65554, content: "[40mhttp[0m [0m[35m304"}
    , { time: 65554, content: "[0m https://registry.npmjs.org/core-util-is\r\n[0m"}
    , { time: 65592, content: "[37m"}
    , { time: 65592, content: "[40mnpm[0m [0m"}
    , { time: 65592, content: "[32m[40mhttp[0m [0m"}
    , { time: 65592, content: "[35m304[0m"}
    , { time: 65592, content: " https://registry.npmjs.org/cryptiles\r\n[0m"}
    , { time: 65688, content: "[37m"}
    , { time: 65688, content: "[40mnpm[0m [0m[32m[40mhttp[0m "}
    , { time: 65688, content: "[0m[35m304[0m https://registry.npmjs.org/hoek\r\n[0m"}
    , { time: 65700, content: "[37m"}
    , { time: 65700, content: "[40mnpm[0m [0m[32m"}
    , { time: 65700, content: "[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/sntp\r\n"}
    , { time: 65700, content: "[0m"}
    , { time: 65795, content: "[37m"}
    , { time: 65795, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 65795, content: "http[0m [0m[35m200[0m https://registry.npmjs.org/negotiator/-/negotiator-0.4.9.tgz\r\n[0m"}
    , { time: 65823, content: "[37m"}
    , { time: 65823, content: "[40mnpm[0m "}
    , { time: 65823, content: "[0m[32m[40m"}
    , { time: 65823, content: "http[0m "}
    , { time: 65823, content: "[0m[35m200[0m https://registry.npmjs.org/argparse\r\n"}
    , { time: 65823, content: "[0m"}
    , { time: 65898, content: "[37m"}
    , { time: 65898, content: "[40mnpm[0m [0m"}
    , { time: 65898, content: "[32m[40m"}
    , { time: 65898, content: "http[0m [0m[35m200"}
    , { time: 65898, content: "[0m https://registry.npmjs.org/acorn-globals\r\n"}
    , { time: 65898, content: "[0m"}
    , { time: 65901, content: "[37m"}
    , { time: 65901, content: "[40mnpm[0m"}
    , { time: 65902, content: " "}
    , { time: 65902, content: "[0m[32m"}
    , { time: 65902, content: "[40mhttp"}
    , { time: 65902, content: "[0m [0m[35m"}
    , { time: 65902, content: "GET[0m https://registry.npmjs.org/acorn-globals/-/acorn-globals-1.0.2.tgz\r\n[0m"}
    , { time: 66088, content: "[37m[40mnpm"}
    , { time: 66088, content: "[0m [0m[32m[40mhttp[0m"}
    , { time: 66088, content: " [0m[35m200[0m"}
    , { time: 66088, content: " https://registry.npmjs.org/mime/-/mime-1.2.11.tgz\r\n[0m"}
    , { time: 66167, content: "[37m"}
    , { time: 66167, content: "[40mnpm[0m "}
    , { time: 66168, content: "[0m[32m"}
    , { time: 66168, content: "[40mhttp[0m"}
    , { time: 66168, content: " [0m[35m200[0m https://registry.npmjs.org/boom\r\n"}
    , { time: 66168, content: "[0m"}
    , { time: 66253, content: "[37m"}
    , { time: 66253, content: "[40mnpm[0m [0m[32m"}
    , { time: 66253, content: "[40mhttp[0m [0m"}
    , { time: 66253, content: "[35m200"}
    , { time: 66253, content: "[0m https://registry.npmjs.org/acorn-globals\r\n"}
    , { time: 66253, content: "[0m"}
    , { time: 66296, content: "[37m"}
    , { time: 66296, content: "[40mnpm[0m [0m[32m"}
    , { time: 66296, content: "[40mhttp[0m [0m"}
    , { time: 66296, content: "[35m200[0m"}
    , { time: 66296, content: " https://registry.npmjs.org/css\r\n[0m"}
    , { time: 66326, content: "[37m"}
    , { time: 66326, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 66326, content: "http[0m [0m[35m"}
    , { time: 66326, content: "GET[0m https://registry.npmjs.org/underscore"}
    , { time: 66326, content: "\r\n[0m"}
    , { time: 66411, content: "[37m"}
    , { time: 66411, content: "[40mnpm[0m [0m"}
    , { time: 66411, content: "[32m[40mhttp[0m [0m"}
    , { time: 66411, content: "[35m200"}
    , { time: 66411, content: "[0m https://registry.npmjs.org/acorn\r\n[0m"}
    , { time: 66418, content: "[37m"}
    , { time: 66418, content: "[40mhttp"}
    , { time: 66418, content: "[0m [0m[35mGET[0m https://registry.npmjs.org/acorn/-/acorn-0.11.0.tgz"}
    , { time: 66418, content: "[40mnpm[0m [0m[32m"}
    , { time: 66418, content: "\r\n[0m"}
    , { time: 66458, content: "[37m"}
    , { time: 66458, content: "[40mnpm[0m [0m[32m"}
    , { time: 66458, content: "[40mhttp[0m [0m[35m200"}
    , { time: 66458, content: "[0m https://registry.npmjs.org/minimist/0.0.8\r\n[0m"}
    , { time: 66461, content: "[37m"}
    , { time: 66461, content: "[40mnpm[0m [0m"}
    , { time: 66461, content: "[32m[40mhttp[0m "}
    , { time: 66461, content: "[0m[35m"}
    , { time: 66461, content: "GET[0m https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz\r\n[0m"}
    , { time: 66559, content: "[37m"}
    , { time: 66560, content: "[40mnpm[0m [0m"}
    , { time: 66560, content: "[32m[40mhttp[0m"}
    , { time: 66560, content: " [0m[35m200[0m"}
    , { time: 66560, content: " https://registry.npmjs.org/promise\r\n[0m"}
    , { time: 66635, content: "[37m[40m"}
    , { time: 66635, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 66635, content: " [0m[35m200[0m https://registry.npmjs.org/acorn-globals/-/acorn-globals-1.0.2.tgz\r\n[0m"}
    , { time: 66698, content: "[37m"}
    , { time: 66698, content: "[40mnpm[0m [0m[32m[40mhttp"}
    , { time: 66698, content: "[0m "}
    , { time: 66698, content: "[0m[35m200[0m https://registry.npmjs.org/uglify-js\r\n[0m"}
    , { time: 66886, content: "[37m[40mnpm[0m "}
    , { time: 66886, content: "[0m[32m[40mhttp[0m [0m[35mGET[0m"}
    , { time: 66886, content: " https://registry.npmjs.org/css-stringify/1.0.5\r\n[0m"}
    , { time: 66897, content: "[37m"}
    , { time: 66897, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 66897, content: "http[0m "}
    , { time: 66897, content: "[0m[35mGET"}
    , { time: 66897, content: "[0m https://registry.npmjs.org/css-parse/1.0.4\r\n[0m"}
    , { time: 66909, content: "[37m"}
    , { time: 66909, content: "[40mnpm[0m [0m[32m[40m"}
    , { time: 66909, content: "http[0m [0m[35mGET[0m https://registry.npmjs.org/is-promise\r\n"}
    , { time: 66909, content: "[0m"}
    , { time: 66952, content: "[37m"}
    , { time: 66952, content: "[40mnpm[0m "}
    , { time: 66952, content: "[0m[32m[40mhttp[0m [0m[35mGET"}
    , { time: 66952, content: "[0m https://registry.npmjs.org/source-map\r\n[0m"}
    , { time: 66960, content: "[37m[40mnpm"}
    , { time: 66960, content: "[0m [0m[32m[40mhttp[0m "}
    , { time: 66960, content: "[0m[35mGET[0m https://registry.npmjs.org/optimist\r\n"}
    , { time: 66960, content: "[0m"}
    , { time: 67171, content: "[37m"}
    , { time: 67171, content: "[40mnpm[0m [0m"}
    , { time: 67171, content: "[32m[40m"}
    , { time: 67171, content: "http[0m [0m[35m"}
    , { time: 67171, content: "200[0m https://registry.npmjs.org/acorn/-/acorn-0.11.0.tgz\r\n"}
    , { time: 67172, content: "[0m"}
    , { time: 67189, content: "[37m"}
    , { time: 67190, content: "[40mnpm[0m [0m"}
    , { time: 67190, content: "[32m[40m"}
    , { time: 67190, content: "http[0m [0m[35m200[0m"}
    , { time: 67190, content: " https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz\r\n"}
    , { time: 67190, content: "[0m"}
    , { time: 67526, content: "[37m"}
    , { time: 67526, content: "[40mnpm[0m [0m[32m"}
    , { time: 67526, content: "[40mhttp[0m "}
    , { time: 67526, content: "[0m[35m200[0m"}
    , { time: 67526, content: " https://registry.npmjs.org/underscore\r\n[0m"}
    , { time: 67665, content: "[37m"}
    , { time: 67665, content: "[40mnpm[0m "}
    , { time: 67666, content: "[0m[32m"}
    , { time: 67666, content: "[40mhttp[0m [0m[35m"}
    , { time: 67666, content: "304[0m"}
    , { time: 67666, content: " https://registry.npmjs.org/css-parse/1.0.4\r\n[0m"}
    , { time: 67732, content: "[37m"}
    , { time: 67732, content: "[40mnpm[0m"}
    , { time: 67732, content: " [0m[32m[40mhttp[0m [0m[35m304[0m https://registry.npmjs.org/optimist\r\n[0m"}
    , { time: 67743, content: "[37m"}
    , { time: 67743, content: "[40mnpm[0m [0m[32m"}
    , { time: 67743, content: "[40mhttp[0m "}
    , { time: 67743, content: "[0m[35m304[0m https://registry.npmjs.org/is-promise\r\n[0m"}
    , { time: 67757, content: "[37m[40m"}
    , { time: 67757, content: "npm[0m [0m[32m[40mhttp[0m [0m[35m"}
    , { time: 67757, content: "304[0m https://registry.npmjs.org/source-map\r\n"}
    , { time: 67757, content: "[0m"}
    , { time: 68000, content: "[37m[40m"}
    , { time: 68000, content: "npm[0m [0m[32m[40mhttp"}
    , { time: 68001, content: "[0m [0m[35m304"}
    , { time: 68001, content: "[0m https://registry.npmjs.org/css-stringify/1.0.5\r\n[0m"}
    , { time: 68068, content: "[37m[40m"}
    , { time: 68068, content: "npm[0m [0m[32m[40mhttp[0m"}
    , { time: 68068, content: " [0m[35m"}
    , { time: 68068, content: "GET[0m https://registry.npmjs.org/wordwrap\r\n[0m"}
    , { time: 68130, content: "[37m"}
    , { time: 68131, content: "[40mnpm[0m [0m"}
    , { time: 68131, content: "[32m"}
    , { time: 68131, content: "[40mhttp[0m [0m"}
    , { time: 68131, content: "[35m"}
    , { time: 68131, content: "GET[0m https://registry.npmjs.org/amdefine\r\n"}
    , { time: 68132, content: "[0m"}
    , { time: 69183, content: "[37m"}
    , { time: 69183, content: "[40mnpm"}
    , { time: 69183, content: "[0m "}
    , { time: 69184, content: "[0m[32m[40mhttp[0m"}
    , { time: 69184, content: " [0m[35m304[0m"}
    , { time: 69184, content: " https://registry.npmjs.org/wordwrap\r\n[0m"}
    , { time: 69279, content: "[37m[40m"}
    , { time: 69279, content: "npm[0m [0m[32m[40m"}
    , { time: 69279, content: "http[0m"}
    , { time: 69279, content: " [0m[35m304[0m https://registry.npmjs.org/amdefine\r\n[0m"}
    , { time: 73186, content: "grunt-develop@0.4.0 node_modules/grunt-develop\r\n\r\ndebug@2.1.1 node_modules/debug\r\n└── ms@0.6.2\r\n\r\n"}
    , { time: 73186, content: "cookie-parser@1.3.4 node_modules/cookie-parser\r\n├── cookie-signature@1.0.6\r\n└── cookie@0.1.2\r\n\r\nmorgan@1.5.1 node_modules/morgan\r\n├── basic-auth@1.0.0\r\n├── depd@1.0.0\r\n└── on-finished@2.2.0 (ee-first@1.1.0)\r\n\r\nserve-favicon@2.1.7 node_modules/serve-favicon\r\n├── fresh@0.2.4\r\n├── ms@0.6.2\r\n└── etag@1.5.1 (crc@3.2.1)\r\n\r\ntime-grunt@1.0.0 node_modules/time-grunt\r\n├── date-time@1.0.0\r\n├── figures@1.3.5\r\n├── text-table@0.2.0\r\n├── hooker@0.2.3\r\n├── pretty-ms@1.0.1 (parse-ms@1.0.0, get-stdin@4.0.1)\r\n└── chalk@0.5.1 (escape-string-regexp@1.0.3, ansi-styles@1.1.0, supports-color@0.2.0, has-ansi@0.1.0, strip-ansi@0.3.0)\r\n\r\ngrunt-contrib-watch@0.6.1 node_modules/grunt-contrib-watch\r\n├── async@0.2.10\r\n├── tiny-lr-fork@0.0.5 (debug@0.7.4, faye-websocket@0.4.4, noptify@0.0.3, qs@0.5.6)\r\n"}
    , { time: 73186, content: "├── gaze@0.5.1 (globule@0.1.0)\r\n└── lodash@2.4.1\r\n\r\nrequest@2.51.0 node_modules/request\r\n├── caseless@0.8.0\r\n├── json-stringify-safe@5.0.0\r\n├── forever-agent@0.5.2\r\n├── aws-sign2@0.5.0\r\n├── stringstream@0.0.4\r\n├── oauth-sign@0.5.0\r\n├── tunnel-agent@0.4.0"}
    , { time: 73186, content: "\r\n├── node-uuid@1.4.2\r\n├── qs@2.3.3\r\n├── mime-types@1.0.2\r\n├── combined-stream@0.0.7 (delayed-stream@0.0.5)\r\n├── form-data@0.2.0 (async@0.9.0, mime-types@2.0.9)\r\n├── http-signature@0.10.1 (assert-plus@0.1.5, asn1@0.1.11, ctype@0.5.3)\r\n├── tough-cookie@0.12.1 (punycode@1.3.2)\r\n├── bl@0.9.4 (readable-stream@1.0.33)\r\n└── hawk@1.1.1 (cryptiles@0.2.2, sntp@0.2.4, boom@0.4.2, hoek@0.9.1)\r\n\r\nbody-parser@1.10.2 node_modules/body-parser\r\n├── bytes@1.0.0\r\n├── media-typer@0.3.0\r\n├── raw-body@1.3.2\r\n├── depd@1.0.0\r\n├── on-finished@2.2.0 (ee-first@1.1.0)\r\n├── qs@2.3.3\r\n├── iconv-lite@0.4.6\r\n└── type-is@1.5.7 (mime-types@2.0.9)\r\n\r\nexpress@4.10.8 node_modules/express\r\n├── utils-merge@1.0.0\r\n├── merge-descriptors@0.0.2\r\n├── methods@1.1.1\r\n├── fresh@0.2.4\r\n├── cookie@0.1.2\r\n├── escape-html@1.0.1\r\n├── range-parser@1.0.2"}
    , { time: 73187, content: "\r\n├── cookie-signature@1.0.5\r\n├── finalhandler@0.3.3\r\n├── vary@1.0.0\r\n├── media-typer@0.3.0\r\n├── parseurl@1.3.0\r\n├── serve-static@1.7.2\r\n├── content-disposition@0.5.0\r\n├── path-to-regexp@0.1.3\r\n├── depd@1.0.0\r\n├── on-finished@2.2.0 (ee-first@1.1.0)\r\n├── qs@2.3.3\r\n"}
    , { time: 73187, content: "├── etag@1.5.1 (crc@3.2.1)\r\n├── proxy-addr@1.0.6 (forwarded@0.1.0, ipaddr.js@0.1.8)\r\n├── type-is@1.5.7 (mime-types@2.0.9)\r\n├── accepts@1.1.4 (negotiator@0.4.9, mime-types@2.0.9)\r\n└── send@0.10.1 (destroy@1.0.3, ms@0.6.2, on-finished@2.1.1, mime@1.2.11)\r\n\r\nload-grunt-tasks@1.0.0 node_modules/load-grunt-tasks\r\n├── multimatch@1.0.1 (array-differ@1.0.0, array-union@1.0.1, minimatch@1.0.0)\r\n└── findup-sync@0.1.3 (glob@3.2.11, lodash@2.4.1)\r\n\r\ngrunt@0.4.5 node_modules/grunt\r\n├── which@1.0.8\r\n├── dateformat@1.0.2-1.2.3\r\n├── eventemitter2@0.4.14\r\n├── getobject@0.1.0\r\n├── colors@0.6.2\r\n├── rimraf@2.2.8\r\n├── hooker@0.2.3\r\n├── async@0.1.22\r\n├── grunt-legacy-util@0.2.0\r\n├── exit@0.1.2\r\n├── nopt@1.0.10 (abbrev@1.0.5)\r\n├── glob@3.1.21 (inherits@1.0.0, graceful-fs@1.2.3)\r\n├── lodash@0.9.2\r\n"}
    , { time: 73187, content: "├── minimatch@0.2.14 (sigmund@1.0.0, lru-cache@2.5.0)\r\n├── coffee-script@1.3.3\r\n├── underscore.string@2.2.1\r\n├── iconv-lite@0.2.11\r\n├── grunt-legacy-log@0.1.1 (underscore.string@2.3.3, lodash@2.4.1)\r\n├── findup-sync@0.1.3 (glob@3.2.11, lodash@2.4.1)\r\n└── js-yaml@2.0.5 (esprima@1.0.4, argparse@0.1.16)\r\n\r\njade@1.8.2 node_modules/jade\r\n├── character-parser@1.2.1\r\n├── void-elements@1.0.0\r\n├── commander@2.5.1\r\n├── mkdirp@0.5.0 (minimist@0.0.8)\r\n├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)\r\n├── with@4.0.1 (acorn-globals@1.0.2, acorn@0.11.0)\r\n└── constantinople@3.0.1 (acorn-globals@1.0.2)\r\n"}
    , { time: 73229, content: "]2;crisboot@crisboot-Aspire-S3-391  crudtest/"}
    , { time: 73267, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~/crudtest$ [m"}
    , { time: 78734, content: "t"}
    , { time: 78834, content: "r"}
    , { time: 79196, content: "e"}
    , { time: 79364, content: "e"}
    , { time: 79623, content: " "}
    , { time: 80336, content: "-"}
    , { time: 80667, content: "L"}
    , { time: 80827, content: " "}
    , { time: 81057, content: "1"}
    , { time: 81701, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  tree -L 1"}
    , { time: 81795, content: "[01;34m.[00m\r\n"}
    , { time: 81795, content: "├── [01;34mnode_modules[00m\r\n├── package.json\r\n├── [01;34mpublic[00m\r\n├── [01;34mroutes[00m\r\n└── [01;34mviews[00m\r\n\r\n5 directories, 4 files\r\n"}
    , { time: 81796, content: "├── app.js\r\n├── [01;34mbin[00m\r\n├── bower.json\r\n├── Gruntfile.js\r\n"}
    , { time: 81796, content: "]2;crisboot@crisboot-Aspire-S3-391  crudtest/"}
    , { time: 81808, content: "[m  [34mcrisboot[32m@crisboot-Aspire-S3-391 [m[1m[36m~/crudtest$ [m"}
    , { time: 95166, content: "n"}
    , { time: 95400, content: "p"}
    , { time: 95589, content: "m"}
    , { time: 95715, content: " "}
    , { time: 95886, content: "s"}
    , { time: 96067, content: "t"}
    , { time: 96153, content: "a"}
    , { time: 96297, content: "r"}
    , { time: 96456, content: "t"}
    , { time: 97852, content: "\r\n]2;crisboot@crisboot-Aspire-S3-391  npm start"}
    , { time: 98112, content: "\r\n> crudtest@0.0.1 start /home/crisboot/crudtest\r\n> node ./bin/www\r\n\r\n"}
    , { time: 107777, content: "[0mGET / [32m200 [0m173.204 ms - 305[0m\r\n"}
    , { time: 107941, content: "[0mGET /css/style.css [32m200 [0m4.929 ms - 110[0m\r\n"}
];

var terminalText = "";

//Markers
var m1, c = "", regexRollback;

for(var i=0; i<stdouts.length; i++) {
    m1 = {
        time: stdouts[i]['time'],
        content: stdouts[i]['content'],
        forward: function(){
          console.log("do action Time: "+this.time);
          term.write(this.content);
          terminalText += this.content;
        },    
        backward: function(){ 
          console.log("Undo action Time: "+this.time);
          c = this.content.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          regexRollback = new RegExp(c+'$');
          terminalText = terminalText.replace(regexRollback,'');
          term.reset();
          term.write(terminalText);
        }
    }

    t.markers.push(m1);
}

//t.play();
