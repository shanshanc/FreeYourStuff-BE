const Stuff = require('../db/stuffModel');
const stuffControllers = require('../controllers/stuffControllers');

jest.mock('../db/stuffModel');

describe('controller: getAll', () => {
  test('should respond as expected', async () => {
    const ctx = {
      request: {
        method: 'GET',
        header: {
          'Content-Type': 'application/json'
        }
      }
    };
    await stuffControllers.getAll(ctx, () => {});
    expect(ctx.status === 200);
  });

  test('should respond with correct content', async () => {
    const ctx = {
      request: {
        method: 'GET',
        header: {
          'Content-Type': 'application/json'
        }
      },
      body: {}
    };

    Stuff.find.mockImplementation(() => [
      {picture: 'https://example.com/pic1'},
      {picture: 'https://example.com/pic2'}
    ]);

    await stuffControllers.getAll(ctx, () => {});
    expect(ctx.body).toEqual([
      {picture: 'https://example.com/pic1'},
      {picture: 'https://example.com/pic2'}
    ]);
  });
});
