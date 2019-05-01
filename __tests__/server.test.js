const server = require('../app');
const request = require('supertest');

describe('server working', () => {
  it('app should exist', async (done) => {
    expect(server).toBeDefined();
    done();
  });
});

describe('test paths', () => {
  // afterEach(() => {
  //   server.close();
  // });
  const agent = request.agent(server.listen());
  it('/getStuff endpoint should have status 200', () => {
    agent
      .get('getStuff')
      .set('Cookie', {})
      .then(res => {
        expect(res.status).toEqual(200);
      })
      .catch(err => console.log(err));
  });
});
