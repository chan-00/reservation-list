import styled from 'styled-components';
// import type
import { pxType } from '../../type/size/px';

interface IconType {
  width?: pxType;
  height?: pxType;
  src: string;
  className?: string;
}

interface IconStyleType {
  width: string;
  height: string;
}

const IconStyle = styled.img<IconStyleType>`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Icon = ({ className, width, height, src }: IconType) => {
  return (
    <IconStyle
      className={className}
      src={src}
      width={width || '15px'}
      height={height || '15px'}
    />
  );
};

export { Icon };
