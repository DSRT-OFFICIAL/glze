core/
├─ math/                  # Operasi dan tipe data matematika
│  ├─ Vector2.js           # Vector2
│  ├─ Vector3.js           # Vector3
│  ├─ Vector4.js           # Vector4
│  ├─ Matrix3.js           # Matrix3
│  ├─ Matrix4.js           # Matrix4
│  ├─ Quaternion.js        # Quaternion
│  ├─ Euler.js             # Euler angles
│  ├─ Color.js             # Color
│  └─ Spherical.js         # Spherical coordinates
│
├─ geometry/               # Bentuk geometri
│  ├─ BoxGeometry.js
│  ├─ SphereGeometry.js
│  ├─ PlaneGeometry.js
│  ├─ CylinderGeometry.js
│  ├─ TorusGeometry.js
│  ├─ ConeGeometry.js
│  ├─ CircleGeometry.js
│  └─ BufferGeometry.js
│
├─ materials/              # Material standar
│  ├─ MeshBasicMaterial.js
│  ├─ MeshLambertMaterial.js
│  ├─ MeshPhongMaterial.js
│  ├─ MeshStandardMaterial.js
│  ├─ MeshPhysicalMaterial.js
│  └─ NodeMaterial.js
│
├─ lights/                 # Cahaya
│  ├─ AmbientLight.js
│  ├─ DirectionalLight.js
│  ├─ PointLight.js
│  ├─ SpotLight.js
│  ├─ HemisphereLight.js
│  └─ RectAreaLight.js
│
├─ cameras/                # Kamera
│  ├─ Camera.js
│  ├─ PerspectiveCamera.js
│  └─ OrthographicCamera.js
│
├─ scene/                  # Scene dan objek
│  ├─ Scene.js
│  ├─ Object3D.js
│  ├─ Mesh.js
│  ├─ Line.js
│  ├─ Points.js
│  └─ Sprite.js
│
├─ renderer/               # Renderer
│  ├─ WebGLRenderer.js
│  ├─ WebGPURenderer.js
│  ├─ RenderTarget.js
│  └─ PostProcessing.js
│
├─ textures/               # Texture & Loader
│  ├─ Texture.js
│  ├─ CubeTexture.js
│  ├─ DataTexture.js
│  └─ loaders/
│     ├─ TextureLoader.js
│     ├─ CubeTextureLoader.js
│     └─ ImageLoader.js
│
├─ loaders/                # Loader umum
│  ├─ GLTFLoader.js
│  ├─ OBJLoader.js
│  ├─ FBXLoader.js
│  └─ DRACOLoader.js
│
├─ nodes/                  # Node system / shader graph
│  ├─ Node.js
│  ├─ NodeFunction.js
│  └─ WGSLNodeFunction.js
│
├─ animation/              # Animasi
│  ├─ AnimationClip.js
│  ├─ KeyframeTrack.js
│  ├─ VectorKeyframeTrack.js
│  ├─ QuaternionKeyframeTrack.js
│  └─ AnimationMixer.js
│
├─ helpers/                # Utils / helper
│  ├─ Ray.js
│  ├─ Raycaster.js
│  ├─ Frustum.js
│  ├─ Clock.js
│  └─ MathUtils.js
│
└─ events/                 # Event handling
|   └─ EventDispatcher.js
|
└─ examples/
└─ core/
   ├─ math/
   │  ├─ vector2_demo.html        <!-- new Vector2(1, 2) -->
   │  ├─ vector3_demo.html        <!-- new Vector3(0, 1, 0) -->
   │  ├─ vector4_demo.html        <!-- new Vector4(1, 0, 0, 1) -->
   │  ├─ matrix3_demo.html        <!-- Matrix3.identity() -->
   │  ├─ matrix4_demo.html        <!-- Matrix4.identity() -->
   │  ├─ quaternion_demo.html     <!-- new Quaternion() -->
   │  ├─ euler_demo.html          <!-- new Euler(0, Math.PI, 0) -->
   │  ├─ color_demo.html          <!-- new Color(1, 0, 0) -->
   │  └─ spherical_demo.html      <!-- new Spherical(1, Math.PI/2, 0) -->
   │
   ├─ geometry/
   │  ├─ box_geometry_demo.html
   │  ├─ sphere_geometry_demo.html
   │  ├─ plane_geometry_demo.html
   │  ├─ cylinder_geometry_demo.html
   │  ├─ torus_geometry_demo.html
   │  ├─ cone_geometry_demo.html
   │  ├─ circle_geometry_demo.html
   │  └─ buffer_geometry_demo.html
   │
   ├─ materials/
   │  ├─ mesh_basic_material_demo.html
   │  ├─ mesh_lambert_material_demo.html
   │  ├─ mesh_phong_material_demo.html
   │  ├─ mesh_standard_material_demo.html
   │  ├─ mesh_physical_material_demo.html
   │  └─ node_material_demo.html
   │
   ├─ lights/
   │  ├─ ambient_light_demo.html
   │  ├─ directional_light_demo.html
   │  ├─ point_light_demo.html
   │  ├─ spot_light_demo.html
   │  ├─ hemisphere_light_demo.html
   │  └─ rect_area_light_demo.html
   │
   ├─ cameras/
   │  ├─ perspective_camera_demo.html
   │  └─ orthographic_camera_demo.html
   │
   ├─ scene/
   │  ├─ scene_demo.html
   │  ├─ object3d_demo.html
   │  ├─ mesh_demo.html
   │  ├─ line_demo.html
   │  ├─ points_demo.html
   │  └─ sprite_demo.html
   │
   ├─ renderer/
   │  ├─ webgl_renderer_demo.html
   │  ├─ webgpu_renderer_demo.html
   │  ├─ render_target_demo.html
   │  └─ postprocessing_demo.html
   │
   ├─ textures/
   │  ├─ texture_demo.html
   │  ├─ cube_texture_demo.html
   │  ├─ data_texture_demo.html
   │  └─ loaders/
   │     ├─ texture_loader_demo.html
   │     ├─ cube_texture_loader_demo.html
   │     └─ image_loader_demo.html
   │
   ├─ loaders/
   │  ├─ gltf_loader_demo.html
   │  ├─ obj_loader_demo.html
   │  ├─ fbx_loader_demo.html
   │  └─ draco_loader_demo.html
   │
   ├─ nodes/
   │  ├─ node_demo.html
   │  ├─ node_function_demo.html
   │  └─ wgsl_node_function_demo.html
   │
   ├─ animation/
   │  ├─ animation_clip_demo.html
   │  ├─ keyframe_track_demo.html
   │  ├─ vector_keyframe_track_demo.html
   │  ├─ quaternion_keyframe_track_demo.html
   │  └─ animation_mixer_demo.html
   │
   ├─ helpers/
   │  ├─ ray_demo.html
   │  ├─ raycaster_demo.html
   │  ├─ frustum_demo.html
   │  ├─ clock_demo.html
   │  └─ math_utils_demo.html
   │
   └─ events/
      └─ event_dispatcher_demo.html
