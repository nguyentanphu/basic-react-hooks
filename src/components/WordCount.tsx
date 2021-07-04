import React, { useMemo } from 'react'

export default function WordCount({children = ''}) {
  const words = useMemo(() => children.split(','), [children]);

  return (
    <div>
      
    </div>
  )
}
