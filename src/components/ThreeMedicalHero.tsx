import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeMedicalHero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    let animationFrameId: number;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x0ea5e9, 3.5);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 4.5, 15);
    cyanLight.position.set(-4, -2, 3);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x0a2540, 5, 15);
    blueLight.position.set(3, -4, 2);
    scene.add(blueLight);

    const amberLight = new THREE.PointLight(0xf59e0b, 3.5, 12);
    amberLight.position.set(4, 3, -2);
    scene.add(amberLight);

    // Medical Capsule Group
    const capsuleGroup = new THREE.Group();
    scene.add(capsuleGroup);

    // Outer Glowing Ring / Orbit
    const torusGeo = new THREE.TorusGeometry(2.4, 0.03, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.7,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 3;
    torusMesh.rotation.y = Math.PI / 6;
    capsuleGroup.add(torusMesh);

    // Outer Secondary Ring
    const ringGeo2 = new THREE.TorusGeometry(2.8, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 4;
    capsuleGroup.add(ringMesh2);

    // 3D Capsule Pill geometry (constructed with Cylinder + 2 Hemispheres)
    const capsuleMain = new THREE.Group();

    // Top half (Medical Cyan)
    const topCapGeo = new THREE.SphereGeometry(1.0, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const topCapMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      emissive: 0x0284c7,
      emissiveIntensity: 0.15,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.6,
      thickness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const topCap = new THREE.Mesh(topCapGeo, topCapMat);
    topCap.position.y = 0.6;
    capsuleMain.add(topCap);

    // Top cylinder connector
    const topCylGeo = new THREE.CylinderGeometry(1.0, 1.0, 0.6, 32);
    const topCyl = new THREE.Mesh(topCylGeo, topCapMat);
    topCyl.position.y = 0.3;
    capsuleMain.add(topCyl);

    // Bottom half (Glossy White Healthcare)
    const botCapGeo = new THREE.SphereGeometry(1.0, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
    const botCapMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });
    const botCap = new THREE.Mesh(botCapGeo, botCapMat);
    botCap.position.y = -0.6;
    capsuleMain.add(botCap);

    // Bottom cylinder connector
    const botCylGeo = new THREE.CylinderGeometry(1.0, 1.0, 0.6, 32);
    const botCyl = new THREE.Mesh(botCylGeo, botCapMat);
    botCyl.position.y = -0.3;
    capsuleMain.add(botCyl);

    // Golden / Cyan Band in center
    const bandGeo = new THREE.CylinderGeometry(1.01, 1.01, 0.08, 32);
    const bandMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.9,
      roughness: 0.1,
    });
    const bandMesh = new THREE.Mesh(bandGeo, bandMat);
    capsuleMain.add(bandMesh);

    // Tilt capsule slightly
    capsuleMain.rotation.z = Math.PI / 5;
    capsuleMain.rotation.x = Math.PI / 8;
    capsuleGroup.add(capsuleMain);

    // Floating Particles Cloud
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      particleScales[i] = Math.random() * 0.1 + 0.03;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      capsuleGroup.rotation.y = scrollY * 0.002;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Clock for smooth rendering
    const clock = new THREE.Clock();

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth Mouse Interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Floating capsule animation with multi-axis organic motion
      capsuleGroup.position.y = Math.sin(elapsedTime * 1.3) * 0.22;
      capsuleGroup.position.x = Math.cos(elapsedTime * 0.8) * 0.08;
      capsuleGroup.rotation.y += 0.007;
      capsuleMain.rotation.y = Math.sin(elapsedTime * 0.7) * 0.35;
      capsuleMain.rotation.z = Math.PI / 5 + Math.sin(elapsedTime * 1.1) * 0.06;

      capsuleGroup.rotation.x = targetY * 1.2;
      capsuleGroup.rotation.z = targetX * 1.2;

      // Rotate torus rings
      torusMesh.rotation.z += 0.005;
      ringMesh2.rotation.z -= 0.003;

      // Particle floating
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] flex items-center justify-center">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-brand-cyan/20 via-brand-blue/30 to-brand-navy/10 blur-2xl absolute animate-pulse-glow" />
        <div className="glass-card p-8 text-center relative z-10 border border-sky-200/50 shadow-2xl max-w-sm">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center shadow-lg text-white">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.168.326l-.41.274a2 2 0 00-.822 1.63V19a2 2 0 002 2h13.6a2 2 0 002-2v-1.644a2 2 0 00-.372-1.166l-.41-.562zM12 2a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-brand-navy mb-1">Gayatri Vaishnobi Health Care</h3>
          <p className="text-xs text-slate-500">Trusted Pharmacy & Healthcare in Balasore</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
      {/* Background Radial Glow */}
      <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-brand-cyan/25 via-brand-blue/20 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
