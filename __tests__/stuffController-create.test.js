const Stuff = require('../db/stuffModel');
const stuffControllers = require('../controllers/stuffControllers');

jest.mock('../db/stuffModel');

// beforeEach(() => {
//   // Clear all instances and calls to constructor and all methods:
//   Stuff.mockClear();
// });

describe('controller: create', () => {
  test('should respond as expected', async () => {

    const address = 'Carrer de Ramon Turró, 148, 08005 Barcelona, Spain';
    const ctx = {
      request: {
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
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
          address
        }
      }
    };
    const mockStuff = {
      address
    };
    const mockSave = {
      save: () => new Promise(resolve => resolve(mockStuff))
    };
    Stuff.mockImplementation(() => mockSave);

    await stuffControllers.create(ctx, () => {});
    expect(ctx.status === 200);
    expect(ctx.body.address).toEqual(mockStuff.address);
  });
});
