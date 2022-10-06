import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeProjects extends Component {
  componentDidMount() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor('white');
    this.mount.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 20;

    this.shape_geom = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    this.shape_mat = new THREE.MeshBasicMaterial({
      color: '#1c5678',
      // wireframe: true,
    });
    this.shape = new THREE.Mesh(this.shape_geom, this.shape_mat);
    this.shape.position.x = 4;
    this.shape.position.y = 1;

    this.scene.add(this.shape);

    this.shape1_geom = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    this.shape1_mat = new THREE.MeshBasicMaterial({
      color: '#5b9d3d',
      // wireframe: true,
    });
    this.shape1 = new THREE.Mesh(this.shape1_geom, this.shape1_mat);
    this.shape1.position.x = -4;
    this.shape1.position.y = -1;

    this.scene.add(this.shape1);

    this.animation();
    window.addEventListener('resize', this.handleWindowResize);
  }

  animation = () => {
    requestAnimationFrame(this.animation);
    this.shape.rotation.x += 0.01;
    this.shape.rotation.y += 0.01;
    this.shape1.rotation.x += 0.01;
    this.shape1.rotation.y += 0.01;

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

export default ThreeProjects;
