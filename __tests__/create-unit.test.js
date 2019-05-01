const Stuff = require('../db/stuffModel');
const stuffControllers = require('../controllers/stuffControllers');
const mockData = require('../__mocks__/fakeStuffAll');

jest.mock('../db/stuffModel');

describe('controller: create', () => {
  test('should respond as expected', async () => {
    const ctx = mockData.postRequest;
    const mockStuff = mockData.dataWithoutIDs;
    const mockSave = {
      save: () => new Promise(resolve => resolve(mockStuff))
    };
    Stuff.mockImplementation(() => mockSave);

    await stuffControllers.create(ctx, () => { });
    expect(ctx.status === 200);
    expect(ctx.body.address).toEqual(mockStuff.address);
  });
});
