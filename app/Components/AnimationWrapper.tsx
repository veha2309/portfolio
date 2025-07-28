// app/Components/AnimationWrapper.tsx
'use client';

import { useState } from 'react';
import AnimationToggle from './AnimationToggle';
import StarField from './ParticleCanvas';

export default function AnimationWrapper() {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <>
      <AnimationToggle onClick={() => setIsAnimating(!isAnimating)} />
      {isAnimating && <StarField />}
    </>
  );
}
