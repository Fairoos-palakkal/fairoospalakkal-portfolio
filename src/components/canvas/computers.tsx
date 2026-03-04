import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Component, Suspense, useEffect, useState } from "react";
import type { ErrorInfo, ReactNode } from "react";

import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
};

// Error Boundary for Canvas crashes (WebGL/Three.js)
type ErrorBoundaryProps = { children: ReactNode; fallback: ReactNode };
type ErrorBoundaryState = { hasError: boolean };

class CanvasErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("3D Canvas error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Computers
const Computers = ({ isMobile }: ComputersProps) => {
  // Import scene
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    // Mesh
    <mesh>
      {/* Light */}
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={10} decay={0} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        decay={0}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Computer Canvas
const ComputersCanvas = () => {
  // state to check mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <CanvasErrorBoundary
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-secondary text-[14px]">3D view unavailable</p>
        </div>
      }
    >
      <Canvas
        frameloop="always"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
      >
        {/* Canvas Loader show on fallback */}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          {/* Show Model */}
          <Computers isMobile={isMobile} />
        </Suspense>

        {/* Preload all */}
        <Preload all />
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default ComputersCanvas;

