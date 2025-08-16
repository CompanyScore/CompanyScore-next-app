import { expect } from 'chai';

describe('Basic Test Suite', () => {
  it('should pass a simple test', () => {
    expect(1 + 1).to.equal(2);
  });

  it('should handle string operations', () => {
    expect('hello').to.be.a('string');
    expect('hello').to.have.length(5);
  });

  it('should work with arrays', () => {
    const arr = [1, 2, 3];
    expect(arr).to.be.an('array');
    expect(arr).to.have.length(3);
    expect(arr).to.include(2);
  });
});
