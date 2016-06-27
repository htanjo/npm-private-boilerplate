/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
'use strict';

const moduleName = require('../lib');
const expect = require('chai').expect;

describe('<moduleName>', () => {
  it('returns true', () => {
    expect(moduleName).to.be.true;
  });
});
