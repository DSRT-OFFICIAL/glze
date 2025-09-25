# core/math Structure

The `math/` module contains all mathematical components forming the foundation of the **glze** engine.  
Focus areas: geometry, linear algebra, interpolation, curves, statistics, and numerical utilities.

---

## 📂 Interpolants/
- **LinearInterpolant.js** → Linear interpolation between points.  
- **CubicInterpolant.js** → Cubic interpolation, ideal for smooth animation.  
- **QuaternionInterpolant.js** → Rotation interpolation (SLERP/lerp for quaternions).  

---

## 📄 Transformations
- **Affine2D.js** → 2D transformations (scale, rotate, translate).  
- **Affine3D.js** → 3D transformations in 3D space.  

---

## 📄 Geometry & Bounding
- **Box2.js / Box3.js** → 2D & 3D bounding boxes.  
- **BoundingVolume.js** → Generic bounding volume structure.  
- **Sphere.js** → 3D sphere.  
- **Frustum.js / FrustumArray.js** → Camera frustum.  
- **AABB.js** → Axis-Aligned Bounding Box.  
- **OBB.js** → Oriented Bounding Box.  

---

## 📄 Vectors & Matrices
- **Vector2.js / Vector3.js / Vector4.js** → Standard vectors.  
- **Vector5.js / Vector6.js** → Higher-dimensional vectors (AI/simulation).  
- **Matrix3.js / Matrix4.js / MatrixNxM.js** → General matrices.  
- **Quaternion.js** → 3D rotation.  
- **DualQuaternion.js** → Combined translation + rotation (skeletal skinning).  

---

## 📄 Curves & Shapes
- **Line3.js** → 3D line representation.  
- **Triangle.js** → Basic triangle.  
- **Cylindrical.js / Spherical.js** → Cylindrical & spherical coordinates.  
- **SphericalHarmonics3.js** → Global lighting representation.  
- **BezierCurve.js** → Bézier curves.  
- **CatmullRomCurve.js** → Catmull-Rom curves (smooth paths).  
- **NURBSCurve.js** → NURBS curves (complex/industrial geometry).  
- **ConvexHull.js** → Convex hull (mesh simplification).  

---

## 📄 Utilities
- **Color.js / ColorManagement.js** → Color operations & conversions.  
- **MathUtils.js** → Core functions (clamp, lerp, deg↔rad).  
- **RandomUtils.js** → Random number generators.  
- **Noise.js** → Perlin/Simplex Noise (terrain, effects).  
- **Intersection.js** → Geometric intersection functions.  
- **CollisionUtils.js** → Extra collision helpers.  
- **Plane.js / Ray.js** → Plane & raycasting representation.  

---

## 📄 Advanced Math
- **Polynomial.js** → Polynomial equations.  
- **Statistics.js** → Basic statistics (mean, variance, etc).  
- **FFT.js** → Fast Fourier Transform (signal/audio analysis).  
- **Euler.js** → Euler angle rotation.  

---

## 🧾 Notes
- The `math/` module is used throughout the engine: **geometry, renderer, physics, animation, AI, audio, and metaverse**.  
- New modules must remain consistent: **fundamental & reusable building blocks**.
