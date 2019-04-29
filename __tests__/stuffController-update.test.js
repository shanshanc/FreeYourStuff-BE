const Stuff = require('../db/stuffModel');
const stuffController = require('../controllers/stuffControllers');
jest.mock('../db/stuffModel');

describe('test stuffController update function', () => {
  it('update if finds an id', async () => {
    const ctx = {
      request: {
        method: 'GET',
        header: {
          'Content-Type': 'application/json'
        },
        body: {
          picture: 'https://example.com/pic1/newlink',
          time: '2018-08-01T10:51:57.108Z',
          tags: ['tag1', 'tag2']
        }
      },
      params: {
        id: '1234'
      }
    };

    const fakeDB = [
      {
        _id: '1234',
        picture: 'https://example.com/pic1'
      },
      {
        _id: '5678',
        picture: 'https://example.com/pic2'
      }
    ];

    Stuff.findOneAndUpdate.mockImplementation(() => fakeDB[0]);
    await stuffController.update(ctx, () => {});
    expect(ctx.status).toEqual(204);
  });
});
