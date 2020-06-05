import React, { Component } from 'react';
import * as THREE from 'three';
import ReactDOM, {domElement} from "react-dom";

class SpaceViz extends Component {
    componentDidMount() {
        let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    let cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }}
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

    


export default SpaceViz;