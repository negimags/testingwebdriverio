const axios = require('axios');
const assert = require('assert');
const fs = require('fs');
const axiosRetry = require('axios-retry');

class MockApiService {
  constructor() {
    this.tokenData = '';
  }
  async mockApiGetTokenLogin() {
    var email="", password="", produrltrue="";
    try {
      const rawdata = await fs.promises.readFile('test/testdata/logincredentials.json');
      const config = JSON.parse(rawdata);
      // Access the login credentials
       email = config.loginCredentials.emailwrong;
       password = config.loginCredentials.password;
       produrltrue = config.produrltrue;
    } catch (error) {
      console.error('Error reading config file:', error);
      throw new Error('Error occurred in mockApiGetMethod: ' + error.message);
    }
    let response;
    try {
      
       response = await axios.post(produrltrue, {
        email: email,
        password: password
      });
      await expect(response.success).not.toEqual(true);
      console.log('The token is and did it reach here:');
    } catch (error) {
      console.error(error);
      expect(error.message).toContain('Request failed with status code 500');
    }
  }
  async mockApiGetTokenLoginTrue() {
    var email="", password="", produrltrue="";
    try {
      const rawdata = await fs.promises.readFile('test/testdata/logincredentials.json');
      const config = JSON.parse(rawdata);
      // Access the login credentials
       email = config.loginCredentials.email;
       password = config.loginCredentials.password;
       produrltrue = config.produrltrue;
    } catch (error) {
      console.error('Error reading config file:', error);
      throw new Error('Error occurred in mockApiGetMethod: ' + error.message);
    }
    try {
      const response = await axios.post(produrltrue, {
        email: email,
        password: password
      });
      expect(response.status).toEqual(200)
      // Access the accessToken from the response object
      const accessToken = response.data.accessToken;
      // Now you can use the accessToken variable for further processing
      console.log('The token is: ' + accessToken);
      this.tokenData = accessToken;
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
      throw new Error('Error occurred in mockApiGetMethod: ' + error.message);
    }
    return this.tokenData;
  }
}
module.exports = new MockApiService();