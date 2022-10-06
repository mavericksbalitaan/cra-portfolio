import React, { Component } from 'react';
import * as THREE from 'three';
import '../stylesheets/threescene.scss';

class ThreeScene extends Component {
  componentDidMount() {
    // scene
    this.scene = new THREE.Scene();

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff);

    this.mount.appendChild(this.renderer.domElement);

    // camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 3;

    // Create Box
    this.geometry = new THREE.SphereGeometry(1, 20, 20);
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.cube.position.x = -1;

    // Add to scene
    this.scene.add(this.cube);
    this.animation();
    this.renderer.render(this.scene, this.camera);

    // Event Handlers
    window.addEventListener('resize', this.handleWindowResize);
  }

  animation = () => {
    requestAnimationFrame(this.animation);
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  };

  handleWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default ThreeScene;
