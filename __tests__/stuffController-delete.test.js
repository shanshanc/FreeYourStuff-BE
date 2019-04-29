const Stuff = require('../db/stuffModel');
const stuffControllers = require('../controllers/stuffControllers');

jest.mock('../db/stuffModel');

describe('controller: delete', () => {
  test('should respond as expected', async () => {
    const ctx = {
      request: {
        method: 'DELETE',
        header: {
          'Content-Type': 'application/json'
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
    Stuff.prototype.remove.mockImplementation(() => {});
    await stuffControllers.delete(ctx, () => { });
    
    expect(ctx.status === 204);
    expect(ctx.status).toEqual(204);
  });
});
