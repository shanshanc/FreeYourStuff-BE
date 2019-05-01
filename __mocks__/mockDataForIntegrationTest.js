// Create integration test
const postRequest = {
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  }
};

const randomId = Math.floor(Math.random() * 10000);

const bodyContainsPicture = {
  body: {
    picture: 'https://example.com/pic/newlink/img' + randomId.toString()
  }
};

module.exports.newMockItem = {
  request: Object.assign(bodyContainsPicture, postRequest)
};

module.exports.requestWithoutBody = {
  request: {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    }
  }
};

// Update integration test
module.exports.getRequest = {
  request: {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    }
  }
};
