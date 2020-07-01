import React, { Component } from 'react';
import * as THREE from 'three';
import { extend } from 'react-three-fiber';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls';
import texture from '../images/sunmap.jpg';
import texture1 from '../images/earthmap1.jpg';

class TestSpace extends Component {

  componentDidMount() {
    let cloudParticles = [];
    let innerWidth, innerHeight;
    let w = innerWidth / 1.5, h = innerHeight / 1.5;
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // const canvas = document.querySelector('#c');
    //  renderer = new THREE.WebGLRenderer({canvas});
    this.mount.appendChild(renderer.domElement);

    // let ambient = new THREE.AmbientLight(0x555555);
    //     scene.add(ambient);
    scene.fog = new THREE.FogExp2(0x03544e, 0.001);
    renderer.setClearColor(scene.fog.color);

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
        cloud.position.y = -5;
        cloud.position.z = 5;
        // cloud.position.x = 1;
        cloud.rotation.x = 1;
        cloud.rotation.y = 1;
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
    //final object out of starngeo and starmaterial
    let starMaterial = new THREE.PointsMaterial({
      color: 0xDD1818,
      size: 0.05,
      transparent: true
    });
    let star = new THREE.Points(starGeo, starMaterial);
    scene.add(star);
    //set of lights
    let directionalLight = new THREE.DirectionalLight(0xff8c19);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    let blueLight = new THREE.PointLight(0x3677ac, 50, 450, 1.7);
    blueLight.position.set(300, 300, 200);
    scene.add(blueLight);

    let redLight = new THREE.PointLight(0xd8547e, 50, 450, 1.7);
    redLight.position.set(100, 300, 100);
    scene.add(redLight);

    const fov = 40;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 1000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(10, 40, -140);
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);



    {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.PointLight(color, intensity);
      scene.add(light);
    }

    const objects = [];

    const radius = 1;
    const widthSegments = 40;
    const heightSegments = 40;
    const sphereGeometry = new THREE.SphereBufferGeometry(
      radius, widthSegments, heightSegments);

    const solarSystem = new THREE.Object3D();
    scene.add(solarSystem);
    objects.push(solarSystem);

    const sunMaterial = new THREE.MeshPhongMaterial();
    sunMaterial.map = THREE.ImageUtils.loadTexture(texture);
    const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
    sunMesh.scale.set(17, 17, 17);
    sunMesh.rotation.y = 0;
    solarSystem.add(sunMesh);
    objects.push(sunMesh);
    

    const earthOrbit = new THREE.Object3D();
    earthOrbit.position.x = 30;
    solarSystem.add(earthOrbit);
    objects.push(earthOrbit);

    const earthMaterial = new THREE.MeshPhongMaterial();
    earthMaterial.map = THREE.ImageUtils.loadTexture(texture1);
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    earthOrbit.add(earthMesh);
    objects.push(earthMesh);

    const moonOrbit = new THREE.Object3D();
    moonOrbit.position.x = 2;
    earthOrbit.add(moonOrbit);

    const moonMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, emissive: 0x222222 });
    const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
    moonMesh.scale.set(.5, .5, .5);
    moonOrbit.add(moonMesh);
    objects.push(moonMesh);

    // add an AxesHelper to each node
    // objects.forEach((node) => {
    //   const axes = new THREE.AxesHelper();
    //   axes.material.depthTest = false;
    //   axes.renderOrder = 1;
    //   node.add(axes);
    // });
    //START of test orbitControls
    window.addEventListener('resize', function () {
      let innerWidth, innerHeight;
      let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      let renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      let w = innerWidth / 1.5, h = innerHeight / 1.5;
      w = innerWidth / 1.5;
      h = innerHeight / 1.5;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });

    let controls = new OrbitControls(camera, renderer.domElement);

    //   const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
    // const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
    // sunMesh.scale.set(5, 5, 5);
    // solarSystem.add(sunMesh);
    // objects.push(sunMesh);

    let mouse = new THREE.Vector2();
    let raycaster = new THREE.Raycaster();
    let map = new THREE.TextureLoader().load("https://threejs.org/examples/textures/sprites/snowflake4.png");
    let spriteMat = new THREE.SpriteMaterial({
      map: map,
      alphaMap: map,
      color: "orange"
    });

    renderer.domElement.addEventListener("dblclick", onDblClick);
    function onDblClick(event) {
      mouse.x = (event.clientX / w) * 2 - 1;
      mouse.y = - (event.clientY / h) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      let intersects = raycaster.intersectObject(sunMesh);

      if (intersects.length < 1) return;

      let o = intersects[0];
      let pIntersect = o.point.clone();
      sunMesh.worldToLocal(pIntersect);

      let sprite = new THREE.Sprite(spriteMat);
      sprite.position.copy(o.face.normal).multiplyScalar(0.25).add(pIntersect);
      sunMesh.add(sprite);
    }
    //END of test
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render(time) {
      time *= 0.001;

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      objects.forEach((obj) => {
        // objects.splice(2,1)
        obj.rotation.y = time;
      });

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

    let animate = function () {
      cloudParticles.forEach(p => {
        p.rotation.z -= 0.001;
      });
      // let composer = new EffectComposer( renderer )
      // composer.animate(0.1);
      // requestAnimationFrame(animate);
      // sphere.rotation.x += 0.01;
      // sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate(0.1);
  }

  render() {
    return (

      <div className="offset-m3"
        // style={"body { margin: 0; }, canvas { display: block; }"}



        ref={ref => (this.mount = ref)} />


    )
  }

}

export default TestSpace;