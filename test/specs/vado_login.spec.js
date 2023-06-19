const axios = require('axios');
const mockApiService = require("../services/vado_login");


describe('Test Scenario: API Get for all the declined users from Vado', () => {
  var token="";
  it('Test Case: Should not login into the application and give 500', async () => {
    token=  await mockApiService.mockApiGetTokenLogin()
    });

    it('Test Case2: Should login into the application', async () => {
      token=  await mockApiService.mockApiGetTokenLoginTrue()
      console.log("The value is: " + token)
      });
});