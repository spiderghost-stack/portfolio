import { Object3DNode } from '@react-three/fiber';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControlsImpl: Object3DNode<OrbitControlsImpl, typeof OrbitControlsImpl>;
  }
}
