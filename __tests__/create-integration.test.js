// when to call config? i call it in both test and app.js for now
require('../config');
const { newMockItem, requestWithoutBody } = require('../__mocks__/mockDataForIntegrationTest');
const stuffControllers = require('../controllers/stuffControllers');
const Stuff = require('../db/stuffModel');

const ctx = newMockItem;

describe('⛵️ Create function', () => {
  it('should have status 200 and ctx body contains new data', async () => {
    await stuffControllers.create(ctx, () => {});
    expect(ctx.status === 200);
    expect(ctx.body).toHaveProperty('picture', newMockItem.request.body.picture);
  });

  it('should have new data in db', () => {
    // look for the record in database
    // is it a good practice to call Model Stuff and findOne in test?
    const promise = Stuff.findOne({picture: newMockItem.request.body.picture}).exec();
    promise.then(doc => {
      expect(doc.picture).toBeTruthy();
    });
  });

  it('should not create if data exists', async () => {
    await stuffControllers.create(ctx, () => {});
    expect(ctx.status === 500);
  });

  it('should not create if picture link is not given', async () => {
    const ctx = Object.assign({}, requestWithoutBody);
    await stuffControllers.create(ctx, () => {});
    expect(ctx.status === 500);
  });
});

/* Delete
- it will throw error if try to delete a nonexsiting picture
how to test if throw an error?
*/
describe('⛵️ Delete function', () => {
  // it('should throw error if tries to delete a nonexsiting picture', async () => {
  //   const ctx = Object.assign({
  //     params: {
  //       id: 'fakeid123456789'
  //     }
  //   }, requestWithoutBody);
  //   await stuffControllers.delete(ctx, () => {});
  //   expect(ctx.status === 500);
  // });
});
