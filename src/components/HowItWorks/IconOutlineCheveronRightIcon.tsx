import { memo, SVGProps } from 'react';

const IconOutlineCheveronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.508263 0.26132L7.90358 7.62717L0.508264 14.993'
      stroke='#7F8C89'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlineCheveronRightIcon);
export { Memo as IconOutlineCheveronRightIcon };
