'use strict';

const buffer = require('../index.js');

describe('Buffer Module', () => {
  it('should return a buffer', () => {
    expect(Buffer.isBuffer(buffer)).toBeTruthy();
  });
});