const Stuff = require('../db/stuffModel');
const stuffControllers = require('../controllers/stuffControllers');
const mockData = require('../__mocks__/fakeStuffAll');

jest.mock('../db/stuffModel');

describe('controller: getAll', () => {
  test('should respond as expected', async () => {
    const ctx = mockData.getRequest;
    await stuffControllers.getAll(ctx, () => { });
    expect(ctx.status === 200);
  });

  test('should respond with correct content', async () => {
    const ctx = mockData.getRequest;

    Stuff.find.mockImplementation(() => mockData.photoArray);

    await stuffControllers.getAll(ctx, () => { });
    expect(ctx.body).toEqual(mockData.photoArray);
  });
});
