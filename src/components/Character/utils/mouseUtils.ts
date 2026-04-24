import * as THREE from "three";

interface HeadBoneUserData extends Record<string, unknown> {
  baseHeadQuaternion?: THREE.Quaternion;
  baseHeadEuler?: THREE.Euler;
  headTargetQuaternion?: THREE.Quaternion;
}

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number
) => {
  if (!headBone) return;
  const userData = headBone.userData as HeadBoneUserData;
  if (!userData.baseHeadQuaternion) {
    userData.baseHeadQuaternion = headBone.quaternion.clone();
    userData.baseHeadEuler = new THREE.Euler().setFromQuaternion(
      userData.baseHeadQuaternion,
      "XYZ"
    );
    userData.headTargetQuaternion = new THREE.Quaternion();
  }

  const baseEuler = userData.baseHeadEuler!;
  const targetQuaternion = userData.headTargetQuaternion!;
  let offsetX = 0;
  let offsetY = 0;

  if (window.scrollY < 200) {
    const maxRotation = Math.PI / 6;
    let minRotationX = -0.3;
    let maxRotationX = 0.4;
    offsetY = mouseX * maxRotation;

    if (mouseY > minRotationX) {
      if (mouseY < maxRotationX) {
        offsetX = -mouseY - 0.5 * maxRotation;
      } else {
        offsetX = -maxRotation - 0.5 * maxRotation;
      }
    } else {
      offsetX = -minRotationX - 0.5 * maxRotation;
    }
  } else {
    if (window.innerWidth > 1024) {
      offsetX = -0.4;
      offsetY = -0.3;
    }
  }

  const targetEuler = new THREE.Euler(
    baseEuler.x + offsetX,
    baseEuler.y + offsetY,
    baseEuler.z,
    "XYZ"
  );
  targetQuaternion.setFromEuler(targetEuler);
  headBone.quaternion.slerp(
    targetQuaternion,
    Math.max(interpolationX, interpolationY)
  );
};
