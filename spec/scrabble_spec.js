var Scrabble = require("../scrabble.js");

describe('Hello World', function() {
  var scrabble = new Scrabble();

  it('says hello world', function() {
    expect(scrabble.helloWorld()).toEqual('hello world!');
  });

  it('a = 1', function() {
    expect(scrabble.point['a']).toEqual(1);
  });

  it('z = 10', function() {
    expect(scrabble.point['z']).toEqual(10);
  });

  it('cat equals 5 points', function() {
    expect(scrabble.score('cat')).toEqual(5);
  });

  it('zebra equals 16 points', function() {
    expect(scrabble.score('zebra')).toEqual(16);
  });

  it('can give highest score for array', function() {
    expect(scrabble.highestScoreFrom(['zebra', 'cat'])).toEqual('zebra');
  });

  it('is case insensitive', function() {
    expect(scrabble.score('ZEBRA')).toEqual(16);
  });

  it('is case insensitive for arrays too', function() {
    expect(scrabble.highestScoreFrom(['ZEBRA', 'CAT'])).toEqual('zebra');
  });

  it('sorts array in desc order', function() {
    expect(scrabble.highestScoreFrom(['go', 'ZEBRA', 'CAT', 'good'])).toEqual('zebra');
  });

  it('adds extra 50 pts for using 7 tiles', function() {
    expect(scrabble.highestScoreFrom(['go', 'ZEBRA', 'CAT', 'elephan'])).toEqual('elephan');
  });

  xit('7 tiles plays win even over shorter words', function() {
    expect(scrabble.highestScoreFrom(['go', 'ZEBRA', 'CAT', 'aaaaaaa', 'zzzzzz'])).toEqual('aaaaaaa');
  });
});
