const stuffControllers = require('../controllers/stuffControllers')

const Stuff = require('../db/stuffModel')

test('testing critical functionality', async () => {
  // console.log('testing')
  // mock ../models/User.js
  // 1. Setup
  //    Create mock req, res
  //    const res = { status: jest.fn(), send: jest.fn() }
  //    const fakeUser = { id: 4 };
  //    User.find = jest.fn(() => fakeUser);
  //    const expected = [{ _id: fakeUser._id }, fakeUser]
  // 2. Action
  //    const result = controller.me(req, res)
  // 3. Assertions
  //    expect(res.status.mock.calls).toEqual([[200]]);
  //    expect(result.send).toHaveBeenCalledWith(fakeUser);
  //    expect(User.find.mock.calls).toEqual(expected);

  // Setup
  const req = {}
  const res = { status: jest.fn(), send: jest.fn() }
  const fakeStuff = {picture: 'https://example.com'}
  Stuff.find = await jest.fn(() => fakeStuff)
  const expectedResult = fakeStuff

  // // Action
  const result = await Stuff.find(req, res)

  // // Assertion
  expect(result).toEqual(expectedResult)

}
)
