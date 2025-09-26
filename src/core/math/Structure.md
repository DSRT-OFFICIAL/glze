# Glaze - Math Module Structure

This document outlines the folder and file structure for the `math` module in Glaze.

---

## Folder Structure

glaze/src/core/math/ ├── Primitives/ │   ├── Vector2.js │   ├── Vector3.js │   ├── Vector4.js │   ├── Matrix2.js │   ├── Matrix3.js │   ├── Matrix4.js │   ├── Quaternion.js │   └── index.js         // Exports all primitives ├── Shapes/ │   ├── Box2.js │   ├── Box3.js │   ├── Sphere.js │   ├── Plane.js │   ├── Triangle.js │   ├── Frustum.js │   ├── FrustumArray.js │   ├── Spherical.js │   ├── Cylindrical.js │   ├── SphericalHarmonics3.js │   └── index.js         // Exports all shapes ├── Interpolant/ │   ├── Interpolant.js │   ├── LinearInterpolant.js │   ├── CubicInterpolant.js │   ├── DiscreteInterpolant.js │   ├── QuaternionLinearInterpolant.js │   └── index.js         // Exports all interpolants ├── Utils/ │   ├── MathUtils.js │   ├── GlazeMathUtils.js │   └── index.js         // Exports all utils ├── Color/ │   ├── Color.js │   ├── BasicGlazeColors.js │   ├── ExtendedGlazeColors.js │   └── index.js         // Exports Color + Basic + Extended └── index.js             // Central export for entire math module

---

## Details

### Primitives
- Vector2, Vector3, Vector4
- Matrix2, Matrix3, Matrix4
- Quaternion

### Shapes
- Box2, Box3
- Sphere, Plane, Triangle
- Frustum, FrustumArray
- Spherical, Cylindrical
- SphericalHarmonics3

### Interpolants
- Interpolant
- LinearInterpolant
- CubicInterpolant
- DiscreteInterpolant
- QuaternionLinearInterpolant

### Utils
- MathUtils: standard math helpers
- GlazeMathUtils: Glaze-specific math utilities
- Additional utilities for random, easing, conversions, etc.

### Color
- Color class
- BasicGlazeColors: 13 core colors
- ExtendedGlazeColors: full extended palette
- Utilities: lerp, mix, add, multiply, invert

---

## Import Example

```js
import * as GlazeMath from './core/math';

// Vectors
const position = new GlazeMath.Vector3(1, 2, 3);

// Colors
const red = GlazeMath.BasicColors.red;
const mixed = GlazeMath.lerpColors(red, GlazeMath.ExtendedColors.lightBlue, 0.5);

// Interpolants
const linear = new GlazeMath.LinearInterpolant([0,1],[0,10]);


---

Notes

Each subfolder has its own index.js for easy aggregation.

math/index.js centralizes all exports for convenience.

Utilities and color helpers are separated for clarity.

