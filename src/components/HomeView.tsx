import React from 'react';
import { MovementLibrary } from './MovementLibrary';

export function HomeView() {
  return (
    <div className="flex flex-col gap-10 pb-16">
      
      {/* Movement Library Component */}
      <MovementLibrary />

    </div>
  );
}
