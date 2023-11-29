import { memo, SVGProps } from 'react';

const Ellipse19Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <circle cx={14.8835} cy={14.8835} r={14.8835} fill='url(#pattern0)' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_10515_525088' transform='scale(0.0078125)' />
      </pattern>
      <image
        id='image0_10515_525088'
        width={128}
        height={128}
       
      />
    </defs>
  </svg>
);
const Memo = memo(Ellipse19Icon);
export { Memo as Ellipse19Icon };
