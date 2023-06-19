const axios = require('axios');
const assert = require('assert');
const fs = require('fs');
const CircularJSON = require('circular-json');
const axiosRetry = require('axios-retry');

class MockApiService {
  constructor() {
    this.tokenData = '';
  }
  async mockApiGetTokenLoginTrue(token) {
    try {
      const rawdata = await fs.promises.readFile('test/testdata/urls.json');
      const config = JSON.parse(rawdata);
        const responsePromise = axios.get(config.getValues, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        // Wait for the response data to be available
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => {
            responsePromise
              .then(resolve)
              .catch(reject);
          }, 4000); // Adjust the delay as needed
        });
      try {
        const jsonString = CircularJSON.stringify(response);
        const jsonObj = JSON.parse(jsonString);
        if (jsonObj.data && jsonObj.data.data.rows && jsonObj.data.data.rows.length > 0) {
            const firstRow = jsonObj.data.data.rows[0];
            console.log(JSON.stringify(firstRow, null, 4));
        } else {
            console.log("No rows found.");
        }
    } catch (error) {
        console.log("Invalid JSON format:", error);
        throw new Error('Error occurred in mockApiGetMethod test case failed with error: ' + error.message);
    }
        assert.equal(response.status, 200);
    } catch (error) {
      console.error(error);
      throw new Error('Error occurred in mockApiGetMethod test case failed with error: ' + error.message);

    }
  }
}
module.exports = new MockApiService();