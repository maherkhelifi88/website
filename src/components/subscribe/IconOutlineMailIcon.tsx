import { memo, SVGProps } from 'react';

const IconOutlineMailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 2.33333L5.2604 5.84027C5.70827 6.13884 6.29173 6.13884 6.7396 5.84027L12 2.33333M1.33333 9.66667H10.6667C11.403 9.66667 12 9.06971 12 8.33333V1.66667C12 0.930287 11.403 0.333333 10.6667 0.333333H1.33333C0.596954 0.333333 0 0.930287 0 1.66667V8.33333C0 9.06971 0.596954 9.66667 1.33333 9.66667Z'
      stroke='#7F8C89'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlineMailIcon);
export { Memo as IconOutlineMailIcon };
