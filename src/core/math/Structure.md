#Glaze#

Glaze is a modular JavaScript library for 3D graphics, math utilities, color manipulation, animations, and more. It is inspired by Three.js but designed with its own lightweight and modern structure.


---

Table of Contents

1. Installation


2. Folder Structure


3. Core Modules

Math

Color

Primitives

Shapes

Interpolants

Utils



4. Examples


5. Contributing




---

Installation

npm install glaze

Or use via ES module:

import { Vector3, Color } from 'glaze/core/math';


---

Folder Structure

glaze/
├── animation/
├── audio/
├── cameras/
├── core/
│   ├── math/
│   │   ├── primitives/
│   │   ├── shapes/
│   │   ├── interpolants/
│   │   ├── Color/
│   │   └── utils/
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

Contains all mathematical structures, operations, and utilities.

Submodules:

primitives/ → Vector2/3/4, Matrix2/3/4, Quaternion

shapes/ → Box2/3, Sphere, Plane, Triangle, Frustum, FrustumArray, Spherical, Cylindrical, SphericalHarmonics3

interpolants/ → Interpolant, LinearInterpolant, CubicInterpolant, DiscreteInterpolant, QuaternionLinearInterpolant

utils/ → MathUtils, GlazeMathUtils


Example import:

import { Vector3, Matrix4, GlazeMathUtils } from 'glaze/core/math';


---

Color

Provides color manipulation tools and palettes.

Files:

Color.js → Core Color class

BasicGlazeColors.js → 13 base colors (red, green, blue, etc.)

ExtendedGlazeColors.js → Extended color palette

index.js → Central export


Utilities:

lerpColors(c1, c2, alpha)

mixColors(c1, c2, alpha)

addColors(c1, c2)

multiplyColors(c1, c2)

invertColor(c)


Example:

import { BasicColors, mixColors } from 'glaze/core/math/Color';

const purple = mixColors(BasicColors.red, BasicColors.blue, 0.5);


---

Usage Examples

Vectors

import { Vector3 } from 'glaze/core/math/primitives';

const position = new Vector3(1, 2, 3);
position.add(new Vector3(4, 5, 6));
console.log(position); // Vector3 { x: 5, y: 7, z: 9 }

Color

import { BasicColors, ExtendedColors, lerpColors } from 'glaze/core/math/Color';

const colorA = BasicColors.red;
const colorB = ExtendedColors.skyBlue;

const blended = lerpColors(colorA, colorB, 0.5);
console.log(blended.toHex());


---

Contributing

Fork the repository

Run npm install

Add features or fix bugs

Submit a pull request
