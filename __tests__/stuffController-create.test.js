const Stuff = require('../db/stuffModel');
const stuffControllers = require('../controllers/stuffControllers');

jest.mock('../db/stuffModel');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Stuff.mockClear();
});

describe('controller: create', () => {
  test('should respond as expected', async () => {
    const ctx = {
      request: {
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        }
      },
      body: {
        'tags': [
          'motor vehicle',
          'moped',
          'scooter'
        ],
        'picture': 'https://res.cloudinary.com/dh9xnvxbz/image/upload/c_fill,h_480,w_820/v1533120579/zrjn7dcll8t1wqazi71m.jpg',
        'location': {
          'lat': 41.3968884,
          'lng': 2.1989088
        },
        'address': 'Carrer de Ramon Turró, 148, 08005 Barcelona, Spain',
      }
    };

    console.log('body', ctx.body)

    const stuff = new Stuff(ctx.body);
    stuff.save.mockImplementation();
    await stuffControllers.create(ctx, () => { });
    expect(ctx.status === 200);
    expect(ctx.body).toEqual([
      { picture: 'https://example.com/pic1' },
      { picture: 'https://example.com/pic2' }
    ]);
  });
});
