import assert = require("assert");
import isWAV from "./isWAV";

describe('isWAV', () => {
  const TEST_CASES = [
    {
      input: '/src/audio/enter.mp3',
      expected: false
    },
    {
      input: '/src/audio/local.3gp',
      expected: false
    },
    {
      input: '/src/audio/backspace.wav',
      expected: true
    }
  ];

  TEST_CASES.forEach(item => {
    it(`Should ${item.input} is ${item.expected ? '.wav': 'NOT .wav'} file.`, () => {
      assert.strictEqual(isWAV(item.input), item.expected);
    });
  });

});