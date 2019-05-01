const Stuff = require('../db/stuffModel');
const stuffController = require('../controllers/stuffControllers');
jest.mock('../db/stuffModel');
const mockData = require('../__mocks__/fakeStuffAll');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('test stuffController update function', () => {
  it('update if id exists', async () => {
    const ctx = mockData.getRequestWithExistingID;
    Stuff.findOneAndUpdate.mockImplementation(() => jest.fn());
    await stuffController.update(ctx, () => { });
    expect(ctx.status).toEqual(204);
  });

  it('create new if id is not found', async () => {
    const ctx = mockData.newStuff;
    
    await stuffController.update(ctx, () => {});
    expect(ctx.status).toEqual(204);
    expect(Stuff.findOneAndUpdate).toHaveBeenCalledWith(
      {_id: ctx.params.id},
      {$set: {
        picture: 'https://example.com/pic1/newlink',
        tags: ['tag1', 'tag2'],
        time: '2018-08-01T10:51:57.108Z'
      }},
      {new: true}
    );
  });
});
