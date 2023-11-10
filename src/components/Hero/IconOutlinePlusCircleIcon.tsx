import { memo, SVGProps } from 'react';

const IconOutlinePlusCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.52254 3.14197V4.52262M4.52254 4.52262V5.90328M4.52254 4.52262H5.9032M4.52254 4.52262H3.14189M8.66451 4.52262C8.66451 6.81017 6.81009 8.66459 4.52254 8.66459C2.235 8.66459 0.380574 6.81017 0.380574 4.52262C0.380574 2.23508 2.235 0.380655 4.52254 0.380655C6.81009 0.380655 8.66451 2.23508 8.66451 4.52262Z'
      stroke='white'
      strokeWidth={1.03549}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlinePlusCircleIcon);
export { Memo as IconOutlinePlusCircleIcon };
