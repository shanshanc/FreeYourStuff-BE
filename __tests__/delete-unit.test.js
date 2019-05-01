const Stuff = require('../db/stuffModel');
const stuffControllers = require('../controllers/stuffControllers');
const data = require('../__mocks__/mockDataToDelete');

jest.mock('../db/stuffModel');

describe('controller: delete', () => {
  test('should respond as expected', async () => {
    const ctx = Object.values(data)[0];

    Stuff.prototype.remove.mockImplementation((args) => jest.fn());
    await stuffControllers.delete(ctx, () => {});
    expect(ctx.status).toEqual(204);
    expect(Stuff.remove).toHaveBeenCalledTimes(1);
    expect(Stuff.remove).toHaveBeenCalledWith({_id: ctx.params.id});
  });
});
