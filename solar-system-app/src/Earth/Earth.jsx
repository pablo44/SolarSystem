import React, { Component } from 'react';
import * as THREE from 'three';
import ReactDOM, { domElement } from "react-dom";
import { Canvas } from 'react-three-fiber';
import { TextureEffect, BloomEffect, EffectPass, RenderPass } from "postprocessing";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// import { BlendFunction } from '../../node-modules/three/examples/jsm/postprocessing/BlendFunction.js';
// import { KernelSize } from '../../node_modules/three/examples/jsm/postprocessing/KernelSize.js';
import texture from '../images/earthmap1.jpg';


// import 'three/examples/js/loaders/BinaryLoader';

class Earth extends Component {
  componentDidMount() {
    let cloudParticles = [];

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    
    // let geometry = new THREE.BoxGeometry(1, 1, 1);
    let geometry = new THREE.SphereGeometry(3.5, 30.8, 30.8);
    // let material = new THREE.MeshBasicMaterial({ color: 0xfffff, wireframe: true });
    let material = new THREE.MeshBasicMaterial();
    material.map = THREE.ImageUtils.loadTexture(texture);

    // let edges = new THREE.EdgesGeometry( geometry );
    // let line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
    let sphere = new THREE.Mesh(geometry, material);

    this.mount.appendChild(renderer.domElement);
    //HERE COMES NEBULA
    let ambient = new THREE.AmbientLight(0x555555);
    scene.add(ambient);
    scene.fog = new THREE.FogExp2(0x03544e, 0.001);
    renderer.setClearColor(scene.fog.color);

    scene.add(sphere);

    let loader = new THREE.TextureLoader();
    loader.load(require('../images/smoke.png'), function (texture) {
      //texture is loaded
      //plane geometry to convey the cloud
      let cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
      let cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        // alphaMap: 0xffffff,
        transparent: true
      });

      for (let p = 0; p < 50; p++) {
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
        cloud.position.set(
          Math.random() * 2500 - 800,
          500,
          Math.random() * 1000 - 500
        );
        cloud.position.y = -10
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random() * 2 * Math.PI;
        cloud.material.opacity = 0.40;
        cloudParticles.push(cloud);
        scene.add(cloud);
      }
    });
    let flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
    flash.position.set(200, 300, 100);
    scene.add(flash);
    //logic to random the flash position and light intensity.
    if (Math.random() > 0.93 || flash.power > 100) {
      if (flash.power < 100)
        flash.position.set(
          Math.random() * 400,
          300 + Math.random() * 200,
          100
        );
      flash.power = 50 + Math.random() * 500;
    }
    //let's create just one object which has lots of vertices
    let starGeo = new THREE.Geometry();
    let starCount;
    for (let i = 0; i < starCount; i++) {
      let starDrop = new THREE.Vector3(
        Math.random() * 400 - 200,
        Math.random() * 500 - 250,
        Math.random() * 400 - 200
      );
      starGeo.vertices.push(starDrop);
    }
    //final object out of starngeo and rainmaerial
    let starMaterial = new THREE.PointsMaterial({
      color: 0xDD1818,
      size: 0.05,
      transparent: true
    });
    let rain = new THREE.Points(starGeo, starMaterial);
    scene.add(rain);
    //set of lights
    let directionalLight = new THREE.DirectionalLight(0xff8c19);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    let blueLight = new THREE.PointLight(0x3677ac, 50, 450, 1.7);
    blueLight.position.set(300, 300, 200);
    scene.add(blueLight);

    // let orangeLight = new THREE.PointLight(0xcc6600,50,450,1.7);
    // orangeLight.position.set(200,300,100);
    // scene.add(orangeLight);

    let redLight = new THREE.PointLight(0xd8547e, 50, 450, 1.7);
    redLight.position.set(100, 300, 100);
    scene.add(redLight);


    camera.position.z = 10;
    let animate = function () {
      cloudParticles.forEach(p => {
        p.rotation.z -= 0.001;
      });
      // let composer = new EffectComposer( renderer )
      // composer.animate(0.1);
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate(0.1);
  }
  render() {
    return (

      <div className="offset-m3"

        ref={ref => (this.mount = ref)} />


    )
  }
}
//     let scene = new THREE.Scene();
//     let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     let renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     this.mount.appendChild(renderer.domElement);
//     let geometry = new THREE.SphereGeometry(5, 32, 32);
//     let material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
//     let sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);
//     camera.position.z = 5;
//     let animate = function () {
//         requestAnimationFrame(animate);
//         sphere.rotation.x += 0.01;
//         sphere.rotation.y += 0.01;
//         renderer.render(scene, camera);
//     };
//     animate();
// }
// render() {
//     return (
//         <div ref={ref => (this.mount = ref)} />
//     )




export default Earth;