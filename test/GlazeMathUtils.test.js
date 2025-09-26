import { describe, it, expect } from 'vitest';
import { clamp, lerp, randInt } from '../src/core/math/GlazeMathUtils.js';

describe('GlazeMathUtils', () => {
  it('clamp should restrict value between min and max', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('lerp should interpolate correctly', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
    expect(lerp(10, 20, 0.25)).toBe(12.5);
  });

  it('randInt should return number within range', () => {
    for (let i = 0; i < 10; i++) {
      const r = randInt(1, 5);
      expect(r).toBeGreaterThanOrEqual(1);
      expect(r).toBeLessThanOrEqual(5);
    }
  });
});
