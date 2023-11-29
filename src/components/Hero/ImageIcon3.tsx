import { memo, SVGProps } from 'react';

const ImageIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 42 43'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <image xlinkHref='/assets/maher.jpg' width='362' height='362' />
      </pattern>
    </defs>
    <circle cx='21.0328' cy='21.5133' r='20.7098' fill='url(#pattern0)' />
  </svg>
);
const Memo = memo(ImageIcon3);
export { Memo as ImageIcon3 };
