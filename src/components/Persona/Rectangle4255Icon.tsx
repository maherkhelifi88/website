import { memo, SVGProps } from 'react';

const Rectangle4255Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 251 70' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 35C0 15.67 15.6711 0 35.001 0C101.373 0 149.627 0 215.999 0C235.329 0 251 15.67 251 35V35C251 54.33 235.33 70 216 70H35C15.67 70 0 54.33 0 35V35Z'
      fill='#FFCA49'
    />
  </svg>
);
const Memo = memo(Rectangle4255Icon);
export { Memo as Rectangle4255Icon };
