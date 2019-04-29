const Stuff = require('../db/stuffModel');
const stuffController = require('../controllers/stuffControllers');
jest.mock('../db/stuffModel');
const mockData = require('../__mocks__/fakeStuffAll');

describe('test stuffController update function', () => {
  it('update if id exists', async () => {
    const ctx = mockData.getRequestWithExistingID;

    const fakeDB = mockData.checkID;
    Stuff.findOneAndUpdate.mockImplementation(() => fakeDB[0]);
    await stuffController.update(ctx, () => { });
    expect(ctx.status).toEqual(204);
  });

  it('create new if id is not found', async () => {
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
        id: 'abcd'
      }
    };
    const fakeNewRecord = {
      id: 'abcd',
      picture: 'https://example.com/pic3',
      time: '2018-08-01T10:51:57.108Z',
      tags: ['tag1', 'tag2']
    };

    Stuff.findOneAndUpdate.mockImplementation(() => fakeNewRecord);
    await stuffController.update(ctx, () => { });
    expect(ctx.status).toEqual(204);
  });
});
