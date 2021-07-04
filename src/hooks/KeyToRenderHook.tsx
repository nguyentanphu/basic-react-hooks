import React, { useEffect, useState } from 'react'

export default function KeyToRenderHook() {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener('keydown', forceRender as any);
    return () => window.removeEventListener("keydown", forceRender as any);
  }, []);
}
