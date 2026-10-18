"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.5;

    // 3. Renderer setup
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 3, 20); // Cyan light
    pointLight1.position.set(4, 4, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 2.5, 20); // Purple light
    pointLight2.position.set(-4, -3, 2);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x3b82f6, 2, 20); // Blue light
    pointLight3.position.set(0, 4, -2);
    scene.add(pointLight3);

    // 5. Geometry Objects
    const group = new THREE.Group();
    scene.add(group);

    // Center faceted core: Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(1.15, 0);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0ea5e9,
      emissive: 0x0369a1,
      roughness: 0.15,
      metalness: 0.8,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreMesh);

    // Outer lattice wireframe cage: Dodecahedron
    const cageGeometry = new THREE.DodecahedronGeometry(1.65, 0);
    const cageMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    group.add(cageMesh);

    // Orbiting Rings
    const ringGeometry1 = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    group.add(ring1);

    const ringGeometry2 = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 5;
    group.add(ring2);

    // Connected floating nodes (Points)
    const nodeCount = 32;
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.9 + Math.random() * 0.7;
      nodePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      nodePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      nodePositions[i * 3 + 2] = r * Math.cos(phi);
    }

    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.07,
      transparent: true,
      opacity: 0.9,
    });
    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    group.add(nodes);

    // 6. Mouse Tracking & Smooth Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      mouse.targetX = (event.clientX / windowWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / windowHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 7. Animation Loop with IntersectionObserver to conserve CPU/GPU when offscreen
    let animationFrameId: number;
    let isVisible = true;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) return;
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        // Subtle floating pulsation
        group.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

        // Independent rotations
        coreMesh.rotation.x = elapsedTime * 0.35;
        coreMesh.rotation.y = elapsedTime * 0.45;

        cageMesh.rotation.x = -elapsedTime * 0.2;
        cageMesh.rotation.y = -elapsedTime * 0.3;

        ring1.rotation.z = elapsedTime * 0.4;
        ring2.rotation.z = -elapsedTime * 0.3;
        nodes.rotation.y = elapsedTime * 0.15;
      }

      // Responsive pointer tilt
      group.rotation.y = mouse.x * 0.6;
      group.rotation.x = -mouse.y * 0.4;

      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible) {
          clock.start();
          animate();
        } else if (!isVisible && wasVisible) {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      cageGeometry.dispose();
      ringGeometry1.dispose();
      ringGeometry2.dispose();
      nodeGeometry.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.18),transparent_65%)] blur-3xl pointer-events-none" />

      {hasWebGL ? (
        <div
          ref={mountRef}
          className="w-full h-full pointer-events-none relative z-10 flex items-center justify-center"
          aria-hidden="true"
        />
      ) : (
        /* Static CSS Fallback if WebGL is unavailable */
        <div className="relative h-64 w-64 rounded-full border border-cyan-500/30 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20 flex items-center justify-center shadow-2xl">
          <div className="h-44 w-44 rounded-full border border-cyan-400/40 bg-slate-950/60 backdrop-blur-md flex items-center justify-center">
            <span className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">Interactive Core</span>
          </div>
        </div>
      )}
    </div>
  );
}
