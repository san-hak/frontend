import * as THREE from "three";
import { GLTFLoader } from "../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";

const $result = document.getElementById('result');

const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(0, 0, 0)");

const camera = new THREE.PerspectiveCamera(50, $result.clientWidth / $result.clientHeight, 0.1, 1000);

camera.position.set(0, 0, 3);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ canvas: $result, antialias: true });
renderer.setSize($result.clientWidth, $result.clientHeight);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 3, -3);
scene.add(light);

const light2 = new THREE.DirectionalLight(0xffffff);
light2.position.set(0, 3, 3);
scene.add(light2);

const light3 = new THREE.DirectionalLight(0xffffff);
light3.position.set(0, -100, 0);
scene.add(light3);

// 목 틀어짐
const geometry2 = new THREE.SphereGeometry( 0.05 ); 
const material2 = new THREE.MeshBasicMaterial({ color: "rgb(255, 0, 0)", transparent: true, opacity: 0.7 }); 
const sphere2 = new THREE.Mesh( geometry2, material2 );
scene.add( sphere2 );
sphere2.position.set( 0, 0.6, -0.065 );

// 왼쪽 어깨 내려감
const geometry4 = new THREE.SphereGeometry( 0.075 ); 
const material4 = new THREE.MeshBasicMaterial({ color: "rgb(255, 0, 0)", transparent: true, opacity: 0.7 }); 
const sphere4 = new THREE.Mesh( geometry4, material4 );
scene.add( sphere4 );
sphere4.position.set( -0.05, 0.53, -0.04 );

// 오른쪽 어깨 내려감
const geometry = new THREE.SphereGeometry( 0.075 ); 
const material = new THREE.MeshBasicMaterial({ color: "rgb(255, 0, 0)", transparent: true, opacity: 0.7 }); 
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
sphere.position.set( 0.05, 0.53, -0.04 );

// 왼쪽 어깨 말림
const geometry1 = new THREE.SphereGeometry( 0.075 ); 
const material1 = new THREE.MeshBasicMaterial({ color: "rgb(255, 0, 0)", transparent: true, opacity: 0.7 }); 
const sphere1 = new THREE.Mesh( geometry1, material1 );
scene.add( sphere1 );
sphere1.position.set( -0.15, 0.53, -0.04 );

// 오른쪽 어깨 말림
const geometry5 = new THREE.SphereGeometry( 0.075 ); 
const material5 = new THREE.MeshBasicMaterial({ color: "rgb(255, 0, 0)", transparent: true, opacity: 0.7 }); 
const sphere5 = new THREE.Mesh( geometry5, material5 );
scene.add( sphere5 );
sphere5.position.set( 0.15, 0.53, -0.04 );

// 왼쪽 다리가 왼쪽보다 짧음
const geometry7 = new THREE.SphereGeometry( 0.075 ); 
const material7 = new THREE.MeshBasicMaterial({ color: "rgb(255, 0, 0)", transparent: true, opacity: 0.7 }); 
const sphere7 = new THREE.Mesh( geometry7, material7 );
scene.add( sphere7 );
sphere7.position.set( -0.15, 0, -0.02 );

// 오른쪽 다리가 왼쪽보다 짧음
const geometry3 = new THREE.SphereGeometry( 0.075 ); 
const material3 = new THREE.MeshBasicMaterial({ color: "rgb(255, 0, 0)", transparent: true, opacity: 0.7 }); 
const sphere3 = new THREE.Mesh( geometry3, material3 );
scene.add( sphere3 );
sphere3.position.set( 0.15, 0, -0.02 );

const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableZoom = false;
// controls.enablePan = false;
controls.maxPolarAngle = 1.5;
controls.minPolarAngle = 1.5;

const loader = new GLTFLoader();
loader.load('../../src/models/MDA_man.glb', (gltf) => {
    console.log(gltf);
    const model = gltf.scene;
    scene.add(model);
    model.position.y = -1;
    renderer.render(scene, camera);
    function animate() {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
});


window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});