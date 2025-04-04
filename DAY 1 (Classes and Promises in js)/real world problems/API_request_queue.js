/*
4. Implement an API Request Queue Using Promises
💡 Scenario: You are building a dashboard that fetches data from multiple APIs, but to avoid API rate limits, you need to queue the requests.

Implement a function fetchWithQueue(urls), where urls is an array of API endpoints.

Fetch one URL at a time, wait for the previous request to finish before making the next request.

Use Promises to chain the requests properly.

🔧 Implement an API request queue using Promises.
*/

const axios = require('axios');
const fetchWithQueue = async (urls) => {
    const results = [];
    for (const url of urls) {
        try {
            const response = await axios.get(url);
            results.push(response.data);
        } catch (error) {
            console.error(`Error fetching ${url}:`, error.message);
            results.push(null); // Push null or handle the error as needed
        }
    }
    return results;
};