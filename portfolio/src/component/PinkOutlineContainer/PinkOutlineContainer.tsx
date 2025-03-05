import React from 'react';

interface PinkOutlineContainerProps {
  item: string
}

function PinkOutlineContainer({ item }: PinkOutlineContainerProps) {
  return (
    <div className='px-2 border-1 border-rose-400 border rounded-default'>
      <span className='text-xs'>{item}</span>
    </div>
  );
}
export default PinkOutlineContainer;