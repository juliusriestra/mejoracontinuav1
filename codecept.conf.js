const steps= require("./src/features");

exports.config = {
  output: './report',
  helpers: {
    Puppeteer: {
      url: 'http://sb2qa.somosbelcorp.com/',
      //fullPageScreenshots: true,
      windowSize: "1500x700",
      //show:true,
      chrome: {
        args: [
              //'--use-fake-ui-for-media-stream',
              //'--disable-web-security',
              //'--use-fake-device-for-media-stream',
              //'--allow-file-access-from-files',
              //'--allow-running-insecure-content',
              '--window-size=1920,1080'
        ]
    }
      
    },
    Mochawesome: {  
      uniqueScreenshotNames: true
                }
  },
  include: {},
  mocha: {
    reporterOptions: {
      reportDir: "./report/",
      reportFilename: 'SomosBelcorp',
      reportTitle: 'SomosBelcorp',
      ts:'',
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/features/**/**/*.feature',
    steps: [
          ...steps
         ]
  },
  plugins: {
    allure: {},
    screenshotOnFail: { //captura de error
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'Test'
}

//console.log(module.exports.config)