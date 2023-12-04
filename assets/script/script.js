import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const caminhosDasImagens360 = [
    './assets/img/bar-do-paulo-360-1.jpg',
    './assets/img/bar-do-paulo-360-2.jpg',
    './assets/img/bar-do-paulo-360-3.jpg',
    './assets/img/bar-do-paulo-360-4.jpg',
    './assets/img/bar-do-paulo-360-5.jpg'
];

let indiceImagemAtual = 0;

const botoes = [
    document.getElementById('btn-1'),
    document.getElementById('btn-2'),
    document.getElementById('btn-3'),
    document.getElementById('btn-4'),
    document.getElementById('btn-5')
];

const scene = new THREE.Scene();
const divContainer = document.getElementById('image-360');

const camera = new THREE.PerspectiveCamera(45, divContainer.offsetWidth / divContainer.offsetHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true });
renderer.setSize(divContainer.offsetWidth, divContainer.offsetHeight);
divContainer.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(divContainer.offsetWidth, divContainer.offsetHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

var texture = new THREE.TextureLoader().load(`./assets/img/bar-do-paulo-360-1.jpg`);
const material = new THREE.MeshBasicMaterial({ map: texture });

const sphereRadius = Math.min(divContainer.offsetWidth, divContainer.offsetHeight) * 0.3;
const geometry = new THREE.SphereGeometry(sphereRadius, 60, 40);
geometry.scale(-2, 2, 2);
const sphere = new THREE.Mesh(geometry, material);

camera.position.set(0, 0, sphereRadius * 1.2);
camera.lookAt(0, 0, 0);

scene.add(sphere);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true; 
controls.dampingFactor = 0.1; 
controls.rotateSpeed = -0.5; 

controls.minDistance = 50; 
controls.maxDistance = 300; 

function animate() {
    requestAnimationFrame(animate);
    controls.update(); 
    renderer.render(scene, camera);
}

animate();

function carregarImagem360() {
    const caminhoDaImagem360 = caminhosDasImagens360[indiceImagemAtual];
    
    const novaTextura = new THREE.TextureLoader().load(caminhoDaImagem360);
    material.map = novaTextura;
    material.needsUpdate = true;
}

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        indiceImagemAtual = indice;
        carregarImagem360();
    });
});

