import { memo, SVGProps } from 'react';

const Ellipse970Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={12} cy={12} r={12} stroke='black' />
  </svg>
);
const Memo = memo(Ellipse970Icon);
export { Memo as Ellipse970Icon };
