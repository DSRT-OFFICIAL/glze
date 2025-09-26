# Glaze

**Glaze** adalah library modular JavaScript untuk **3D graphics, math utilities, color manipulation, animations**, dan lainnya.  
Terinspirasi dari Three.js, tapi dibuat lebih ringan, modern, dan modular.

---

## Table of Contents

- [Installation](#installation)  
- [Folder Structure](#folder-structure)  
- [Core Modules](#core-modules)  
  - [Math](#math)  
  - [Color](#color)  
- [Usage Examples](#usage-examples)  
- [Contributing](#contributing)  

---

## Installation

Dengan npm:

```bash
npm install glaze

Atau menggunakan ES module:

import { Vector3, Color } from 'glaze/core/math';


---

Folder Structure

glaze/src/
├── animation/
├── audio/
├── cameras/
├── core/
│   ├── math/
│   │   ├── primitives/
│   │   ├── shapes/
│   │   ├── interpolants/
│   │   ├── utils/
│   │   └── Color/
├── extras/
├── geometries/
├── helpers/
├── lights/
├── loaders/
├── nodes/
├── objects/
├── renderers/
├── scenes/
├── textures/
├── constants.js
├── utils.js
└── index.js


---

Core Modules

Math

Mathematical structures, operations, dan utilities.

Submodule	Classes / Utilities

Primitives	Vector2/3/4, Matrix2/3/4, Quaternion
Shapes	Box2/3, Sphere, Plane, Triangle, Frustum, FrustumArray, Spherical, Cylindrical, SphericalHarmonics3
Interpolants	Interpolant, LinearInterpolant, CubicInterpolant, DiscreteInterpolant, QuaternionLinearInterpolant
Utils	MathUtils, GlazeMathUtils


Example:

import { Vector3, Matrix4, GlazeMathUtils } from 'glaze/core/math';

const pos = new Vector3(1, 2, 3);
const dir = new Vector3(4, 5, 6);
pos.add(dir);


---

Color

Manipulasi warna dan palettes.

File	Description

Color.js	Core Color class
BasicGlazeColors.js	13 basic colors (red, green, blue, …)
ExtendedGlazeColors.js	Extended color palette
index.js	Central export


Color Utilities:

lerpColors(c1, c2, alpha)

mixColors(c1, c2, alpha)

addColors(c1, c2)

multiplyColors(c1, c2)

invertColor(c)


Example:

import { BasicColors, ExtendedColors, lerpColors } from 'glaze/src/core/math/Color';

const colorA = BasicColors.red;
const colorB = ExtendedColors.skyBlue;

const blended = lerpColors(colorA, colorB, 0.5);
console.log(blended.toHex());


---

Usage Examples

Vectors

import { Vector3 } from 'glaze/core/math/primitives';

const position = new Vector3(1, 2, 3);
position.add(new Vector3(4, 5, 6));
console.log(position); // Vector3 { x: 5, y: 7, z: 9 }

Color

import { BasicColors, ExtendedColors, mixColors } from 'glaze/core/math/Color';

const purple = mixColors(BasicColors.red, BasicColors.blue, 0.5);
console.log(purple.toHex()); // blended color


---

Contributing

1. Fork the repository


2. Run npm install


3. Add features or fix bugs


4. Submit a pull request
