import { memo, SVGProps } from 'react';
import maher from '/assets/maher.jpg'
const ImageIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
  >
    <circle cx={14.8835} cy={14.8835} r={14.8835} fill={maher} />
   
     
    
  </svg>
);
const Memo = memo(ImageIcon2);
export { Memo as ImageIcon2 };
