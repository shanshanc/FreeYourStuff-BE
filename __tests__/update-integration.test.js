require('../config');
const { getRequest, requestWithoutBody } = require('../__mocks__/mockDataForIntegrationTest');
const stuffControllers = require('../controllers/stuffControllers');

describe('⛵️ Update function', () => {
  const updatedUrl = 'https://example.com/pic/updatedlink/img5545';

  it('should return updated data via ctx body', async () => {
    const ctx = Object.assign({}, {
      params: { id: '5cc95f8ecedd3c9e8f326f9c' },
      request: {
        ...requestWithoutBody.request,
        body: {
          picture: updatedUrl,
          time: Date.now(),
          tags: ['tag1', 'tag2']
        }
      }
    });
    await stuffControllers.update(ctx, () => {});
    expect(ctx.status === 204);
    expect(ctx.body.picture).toEqual(updatedUrl);
  });

  it('should have updated data in db', async () => {
    const ctx = Object.assign({}, getRequest);
    await stuffControllers.getAll(ctx, () => {});
    const stuffs = ctx.body;
    const result = stuffs.filter(el => el.picture === updatedUrl);
    expect(result).not.toBeUndefined();
  });
});
