import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
	const [decal] = useTexture([imgUrl]);
	decal.flipX = false;
	return (
		<Float
			floatIntensity={2}
			speed={2.75}
			rotationIntensity={1}>
			<ambientLight intensity={3.0} />
			<directionalLight
				position={[0, 0, 1]}
				intensity={1}
				color="#fff"
			/>
			<mesh
				castShadow
				receiveShadow
				scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#ffffff"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[Math.PI * 2, 0, 6.25]}
					map={decal}
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon }) => {
	return (
		<Canvas
			frameloop="demand"
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};
export default BallCanvas;
