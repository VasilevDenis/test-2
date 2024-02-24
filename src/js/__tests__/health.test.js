import characterHealth from '../health';

describe('Testing characterHealth function with test.each()', () => {
  test.each([
    [{ name: 'мечник', health: 10 }, 'critical'],
    [{ name: 'маг', health: 40 }, 'wounded'],
    [{ name: 'лучник', health: 80 }, 'healthy'],
    // Add more test cases as needed
  ])('Health status of %s should be %s', (character, expectedStatus) => {
    expect(characterHealth(character)).toBe(expectedStatus);
  });
});
