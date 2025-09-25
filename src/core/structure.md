glaze/
├─ src/
│  ├─ core/                     # Level A – Inti (Library Grafis)
│  │  ├─ math/
│  │  │  ├─ Box2.js
│  │  │  ├─ Box3.js
│  │  │  ├─ Color.js
│  │  │  ├─ ColorManagement.js
│  │  │  ├─ Cylindrical.js
│  │  │  ├─ Euler.js
│  │  │  ├─ Frustum.js
│  │  │  ├─ FrustumArray.js
│  │  │  ├─ Interpolation.js
│  │  │  ├─ Interpolants/
│  │  │  │  ├─ CubicInterpolant.js
│  │  │  │  ├─ DiscreteInterpolant.js
│  │  │  │  ├─ LinearInterpolant.js
│  │  │  │  └─ QuaternionLinearInterpolant.js
│  │  │  ├─ Line3.js
│  │  │  ├─ MathUtils.js
│  │  │  ├─ Noise.js
│  │  │  ├─ RandomUtils.js
│  │  │  ├─ Matrix3.js
│  │  │  ├─ Matrix4.js
│  │  │  ├─ Plane.js
│  │  │  ├─ Quaternion.js
│  │  │  ├─ QuaternionUtils.js
│  │  │  ├─ Ray.js
│  │  │  ├─ Sphere.js
│  │  │  ├─ Spherical.js
│  │  │  ├─ SphericalHarmonics3.js
│  │  │  ├─ Triangle.js
│  │  │  ├─ Vector2.js
│  │  │  ├─ Vector3.js
│  │  │  ├─ Vector4.js
│  │  │  ├─ Vector5.js
│  │  │  ├─ Vector6.js
│  │  │  ├─ BoundingVolume.js
│  │  │  ├─ ConvexHull.js
│  │  │  └─ Intersection.js
│  │  │
│  │  ├─ geometry/
│  │  │  ├─ BoxGeometry.js
│  │  │  ├─ SphereGeometry.js
│  │  │  ├─ PlaneGeometry.js
│  │  │  ├─ CylinderGeometry.js
│  │  │  ├─ TorusGeometry.js
│  │  │  └─ ExtrudeGeometry.js
│  │  │
│  │  ├─ materials/
│  │  │  ├─ MeshStandardMaterial.js
│  │  │  ├─ MeshPhongMaterial.js
│  │  │  ├─ NodeMaterial.js
│  │  │  └─ GradientMaterial.js
│  │  │
│  │  ├─ lights/
│  │  │  ├─ PointLight.js
│  │  │  ├─ DirectionalLight.js
│  │  │  ├─ HemisphereLight.js
│  │  │  ├─ SpotLight.js
│  │  │  ├─ RectAreaLight.js
│  │  │  └─ AmbientLight.js
│  │  │
│  │  ├─ cameras/
│  │  │  ├─ PerspectiveCamera.js
│  │  │  ├─ OrthographicCamera.js
│  │  │  ├─ CubeCamera.js
│  │  │  └─ CameraUtils.js
│  │  │
│  │  ├─ scene/
│  │  │  ├─ Scene.js
│  │  │  ├─ Layer.js
│  │  │  └─ Fog.js
│  │  │
│  │  ├─ renderer/
│  │  │  ├─ WebGLRenderer.js
│  │  │  ├─ WebGPURenderer.js
│  │  │  ├─ RendererUtils.js
│  │  │  └─ PostProcessing.js
│  │  │
│  │  ├─ textures/
│  │  │  ├─ Texture.js
│  │  │  ├─ CubeTexture.js
│  │  │  └─ DepthTexture.js
│  │  │
│  │  ├─ loader/
│  │  │  ├─ TextureLoader.js
│  │  │  ├─ GLTFLoader.js
│  │  │  └─ OBJLoader.js
│  │  │
│  │  └─ nodes/
│  │     ├─ Node.js
│  │     ├─ NodeFunction.js
│  │     └─ WGSLNodeFunction.js
│  │
│  │  └─ examples/                 # Contoh Level A Core
│  │     ├─ math/
│  │     │  ├─ vector_demo.html
│  │     │  ├─ matrix_demo.html
│  │     │  └─ color_demo.html
│  │     ├─ geometry/
│  │     │  ├─ box_demo.html
│  │     │  ├─ sphere_demo.html
│  │     │  └─ plane_demo.html
│  │     ├─ materials/
│  │     │  ├─ standard_material_demo.html
│  │     │  ├─ phong_material_demo.html
│  │     │  └─ node_material_demo.html
│  │     ├─ lights/
│  │     │  ├─ point_light_demo.html
│  │     │  ├─ directional_light_demo.html
│  │     │  └─ hemisphere_light_demo.html
│  │     ├─ cameras/
│  │     │  ├─ perspective_camera_demo.html
│  │     │  └─ orthographic_camera_demo.html
│  │     ├─ scene/
│  │     │  └─ scene_demo.html
│  │     └─ renderer/
│  │        ├─ webgl_renderer_demo.html
│  │        └─ webgpu_renderer_demo.html
