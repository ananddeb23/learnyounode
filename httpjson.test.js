const httpjson = require('./httpjson');


describe('testing the type of  time functions ', () => {
  const obj = {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?iso=2018-01-28T07:08:05.259Z',
    query: { iso: '2018-01-28T07:08:05.259Z' },
    pathname: '/api/parsetime',
    path: '/api/parsetime?iso=2018-01-28T07:08:05.259Z',
    href: '/api/parsetime?iso=2018-01-28T07:08:05.259Z',
  };
  it('testing return type of getUnix', () => {
    expect(typeof (httpjson.getUnix(obj))).toBe('object');
  });
  it('testing return type of getUnix', () => {
    expect(typeof (httpjson.getUnix(obj))).toBe('object');
  });
});

describe('testing the return value of  time functions ', () => {
  const obj = {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?iso=2018-01-28T07:08:05.259Z',
    query: { iso: '2018-01-28T07:08:05.259Z' },
    pathname: '/api/parsetime',
    path: '/api/parsetime?iso=2018-01-28T07:08:05.259Z',
    href: '/api/parsetime?iso=2018-01-28T07:08:05.259Z',
  };
  it('testing return type of getUnix', () => {
    const res = { hour: 12, minute: 38, second: 5 };
    expect(httpjson.getUnix(obj)).toEqual(res);
  });
  it('testing return type of getUnix', () => {
    const res = { unixtime: 1517123285259 };
    expect(httpjson.getUnix(obj)).toBe(res);
  });
});
