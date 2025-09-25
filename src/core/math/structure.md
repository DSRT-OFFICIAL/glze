# core/math Structure

Modul `math/` berisi semua komponen matematika yang menjadi fondasi utama engine **glze**.  
Fokus: geometri, aljabar linear, interpolasi, kurva, statistik, hingga utilitas numerik.

---

## 📂 Interpolants/
- **LinearInterpolant.js** → Interpolasi linier antar titik.  
- **CubicInterpolant.js** → Interpolasi kubik, cocok untuk animasi smooth.  
- **QuaternionInterpolant.js** → Interpolasi rotasi (SLERP/lerp quaternion).  

---

## 📄 Transformations
- **Affine2D.js** → Transformasi 2D (skala, rotasi, translasi).  
- **Affine3D.js** → Transformasi 3D setara di ruang 3 dimensi.  

---

## 📄 Geometry & Bounding
- **Box2.js / Box3.js** → Kotak bounding 2D & 3D.  
- **BoundingVolume.js** → Struktur generik volume bounding.  
- **Sphere.js** → Bola 3D.  
- **Frustum.js / FrustumArray.js** → Bidang pandang kamera.  
- **AABB.js** → Axis-Aligned Bounding Box.  
- **OBB.js** → Oriented Bounding Box.  

---

## 📄 Vectors & Matrices
- **Vector2.js / Vector3.js / Vector4.js** → Vektor standar.  
- **Vector5.js / Vector6.js** → Vektor dimensi tinggi (AI/simulasi).  
- **Matrix3.js / Matrix4.js / MatrixNxM.js** → Matriks umum.  
- **Quaternion.js** → Rotasi 3D.  
- **DualQuaternion.js** → Gabungan translasi + rotasi (skinning tulang).  

---

## 📄 Curves & Shapes
- **Line3.js** → Representasi garis 3D.  
- **Triangle.js** → Segitiga dasar.  
- **Cylindrical.js / Spherical.js** → Koordinat silinder & bola.  
- **SphericalHarmonics3.js** → Representasi cahaya global.  
- **BezierCurve.js** → Kurva Bézier.  
- **CatmullRomCurve.js** → Kurva Catmull-Rom (path halus).  
- **NURBSCurve.js** → Kurva NURBS (geometri kompleks/industrial).  
- **ConvexHull.js** → Hull cembung (3D mesh simplifikasi).  

---

## 📄 Utilities
- **Color.js / ColorManagement.js** → Operasi warna & konversi.  
- **MathUtils.js** → Fungsi dasar (clamp, lerp, deg↔rad).  
- **RandomUtils.js** → Generator bilangan acak.  
- **Noise.js** → Perlin/Simplex Noise (terrain, efek).  
- **Intersection.js** → Fungsi perpotongan geometri.  
- **CollisionUtils.js** → Helper tambahan untuk tabrakan.  
- **Plane.js / Ray.js** → Representasi bidang & raycasting.  

---

## 📄 Advanced Math
- **Polynomial.js** → Persamaan polinomial.  
- **Statistics.js** → Statistik dasar (mean, variance, dsb).  
- **FFT.js** → Fast Fourier Transform (analisis sinyal/audio).  
- **Euler.js** → Rotasi berbasis sudut Euler.  

---

## 🧾 Catatan
- Modul `math/` digunakan di seluruh bagian engine: **geometry, renderer, physics, animation, AI, audio, dan metaverse**.  
- Penambahan modul baru harus konsisten: **bersifat fundamental & reusable**.
