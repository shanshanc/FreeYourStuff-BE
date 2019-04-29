module.exports.fakeStuff = [{
  'time': '2018-08-01T10:49:32.423Z',
  'tags': [
    'motor vehicle',
    'moped',
    'scooter'
  ],
  'updated': 0,
  '_id': '5b6190529b48300014ce2cfa',
  'picture': 'https://res.cloudinary.com/dh9xnvxbz/image/upload/c_fill,h_480,w_820/v1533120579/zrjn7dcll8t1wqazi71m.jpg',
  'location': {
    'lat': 41.3968884,
    'lng': 2.1989088
  },
  'address': 'Carrer de Ramon Turró, 148, 08005 Barcelona, Spain',
  '__v': 0
},
{
  'time': '2018-08-01T10:51:57.108Z',
  'tags': [
    'balcony',
    'herb',
    'flower'
  ],
  'updated': 0,
  '_id': '5b6190e39b48300014ce2cfb',
  'picture': 'https://res.cloudinary.com/dh9xnvxbz/image/upload/c_fill,h_480,w_820/v1533120723/glifcafe5hmvyz6jkd7e.jpg',
  'location': {
    'lat': 41.3972085,
    'lng': 2.1995018
  },
  'address': 'Carrer de la Ciutat de Granada, 29, 08005 Barcelona, Spain',
  '__v': 0
}
]

module.exports.dataWithoutIDs = {
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
};

module.exports.photoArray = [
  { picture: 'https://example.com/pic1' },
  { picture: 'https://example.com/pic2' }
];

module.exports.postRequest = {
  request: {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: this.dataWithoutIDs
  }
};

module.exports.getRequest = {
  request: {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    }
  }
};

module.exports.getRequestWithExistingID = {
  request: {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    body: {
      picture: 'https://example.com/pic1/newlink',
      time: '2018-08-01T10:51:57.108Z',
      tags: ['tag1', 'tag2']
    }
  },
  params: {
    id: '1234'
  }
};

module.exports.checkID = [
  {
    _id: '1234',
    picture: 'https://example.com/pic1'
  },
  {
    _id: '5678',
    picture: 'https://example.com/pic2'
  }
];

const ctx = {
  request: {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    body: {
      picture: 'https://example.com/pic1/newlink',
      time: '2018-08-01T10:51:57.108Z',
      tags: ['tag1', 'tag2']
    }
  }
}

const newId = {
  params: {
    id: 'abcd'
  }
};

module.exports.newStuff = Object.assign(newId, ctx);
