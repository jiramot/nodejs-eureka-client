'use strict'

const Eureka = require('eureka-js-client').Eureka;

const client = new Eureka({
  instance: {
    app: 'NODE-JS-EUREKA-CLIENT-EXAMPLE',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:8080/info',
    port: {
      '$': 8080,
      '@enabled': 'true',
    },
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/',
  }
});
client.logger.level('debug');
client.start(function(error){
  console.log('start')
  console.log(error || 'complete');
});
