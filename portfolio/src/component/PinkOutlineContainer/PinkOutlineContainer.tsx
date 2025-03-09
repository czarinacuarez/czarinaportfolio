import React from 'react';

interface PinkOutlineContainerProps {
  item: string
}

function PinkOutlineContainer({ item }: PinkOutlineContainerProps) {
  return (
    <div className='px-2 border border-rose-400 rounded-default' aria-label={`${item} indicator`}>
      <span className='text-xs'>{item}</span>
    </div>
  );
}
export default PinkOutlineContainer;