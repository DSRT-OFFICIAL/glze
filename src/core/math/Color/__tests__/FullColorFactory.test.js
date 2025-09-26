import { Color } from '../Color.js';
import {
  ColorFactory,
  lerpColors,
  mixColors,
  addColors,
  multiplyColors,
  invertColor
} from '../FullColorFactory.js';
import { BasicColors } from '../BasicGlazeColors.js';

describe('ColorFactory', () => {
  test('should clone Color instance', () => {
    const red = new Color(1, 0, 0);
    const clone = ColorFactory(red);
    expect(clone).not.toBe(red);
    expect(clone.toArray()).toEqual([1, 0, 0]);
  });

  test('should parse hex string', () => {
    const color = ColorFactory('#00ff00');
    expect(color.toArray()).toEqual([0, 1, 0]);
  });

  test('should accept number as hex', () => {
    const color = ColorFactory(0x0000ff);
    expect(color.toArray()).toEqual([0, 0, 1]);
  });

  test('should resolve basic named color', () => {
    const color = ColorFactory('red');
    expect(color.toArray()).toEqual(BasicColors.red.toArray());
  });

  test('should fallback to white for invalid input', () => {
    const color = ColorFactory('invalidColorName');
    expect(color.toArray()).toEqual([1, 1, 1]);
  });
});

describe('Color utilities', () => {
  const red = new Color(1, 0, 0);
  const blue = new Color(0, 0, 1);

  test('lerpColors blends correctly', () => {
    const purple = lerpColors(red, blue, 0.5);
    expect(purple.toArray().map(v => +v.toFixed(2))).toEqual([0.5, 0, 0.5]);
  });

  test('mixColors is alias of lerpColors', () => {
    const purple1 = mixColors(red, blue, 0.5);
    const purple2 = lerpColors(red, blue, 0.5);
    expect(purple1.toArray()).toEqual(purple2.toArray());
  });

  test('addColors adds component-wise', () => {
    const sum = addColors(red, blue);
    expect(sum.toArray()).toEqual([1, 0, 1]);
  });

  test('multiplyColors multiplies component-wise', () => {
    const mult = multiplyColors(red, blue);
    expect(mult.toArray()).toEqual([0, 0, 0]);
  });

  test('invertColor inverts correctly', () => {
    const inverted = invertColor(red);
    expect(inverted.toArray()).toEqual([0, 1, 1]);
  });
});
