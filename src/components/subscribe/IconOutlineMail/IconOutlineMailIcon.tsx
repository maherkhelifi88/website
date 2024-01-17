import { memo, SVGProps } from 'react';

const IconOutlineMailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 3L7.8906 8.2604C8.5624 8.70827 9.4376 8.70827 10.1094 8.2604L18 3M2 14H16C17.1046 14 18 13.1046 18 12V2C18 0.895431 17.1046 0 16 0H2C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14Z'
      stroke='#083C2F'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlineMailIcon);
export { Memo as IconOutlineMailIcon };
