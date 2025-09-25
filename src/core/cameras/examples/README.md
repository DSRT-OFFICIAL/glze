# 📷 Camera Examples – glze

This folder contains usage examples and interactive demos for the **core/cameras** module.  
Each file demonstrates how to create, configure, and use different camera types and control schemes.

---

## 📂 Categories

### 🔹 Cameras

- **PerspectiveCamera.js** – Example of a perspective camera setup.
- **OrthographicCamera.js** – Example of orthographic camera usage.
- **CubeCamera.js** – Example for environment mapping or reflections.

### 🔹 Controls

- **FirstPersonControls.js** – Example of first-person navigation.
- **OrbitControls.js** – Example of orbiting around a target.
- **TrackballControls.js** – Example of trackball-style camera control.

### 🔹 Combined Demos

- **camera_mix.js** – Demonstrates switching between cameras and controls.
- **camera_follow.js** – Example of camera following an object in the scene.

---

## ⚡ Usage

1. Include the camera module you want to test:

```js
import { PerspectiveCamera } from '../Camera.js';
import { OrbitControls } from '../OrbitControls.js';

2. Initialize a camera and scene:



const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new OrbitControls( camera, renderer.domElement );

3. Animate and render:



function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}
animate();


---

> Each example is designed to be self-contained, easy to run, and customizable for your own projects.
