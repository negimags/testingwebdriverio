const axios = require('axios');
const mockApiService = require("../services/vado_fetchvalues");
const mockApiService2 = require("../services/vado_login");


describe('Test Scenario: Get all values after logging in', () => {
  var token="";    
    it('Test Case2: Should login into the application', async () => {
      token=  await mockApiService2.mockApiGetTokenLoginTrue()
      await mockApiService.mockApiGetTokenLoginTrue(token)
      });
});