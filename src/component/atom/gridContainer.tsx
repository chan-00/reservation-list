import styled from 'styled-components';
import { ReactNode, Children, useState } from 'react';
// import type
import { pxType } from '../../type/size/px';

interface GridContainerType {
  children: ReactNode;
  gap?: number;
  className?: string;
  height?: pxType;
}

interface GridContainerStyleType {
  childrencount: string;
  gap: string;
  height: pxType;
}

const GridContainerStyle = styled.div<GridContainerStyleType>`
  display: grid;
  height: ${(props) => props.height ?? 'auto'};
  grid-template-columns: repeat(${(props) => props.childrencount}, 1fr); 
  grid-column-gap: ${(props) => props.gap};
`;

const GridContainer = ({
  children,
  className,
  gap = 0,
  height,
}: GridContainerType) => {
  const childrenCount = Children.count(children);

  return (
    <GridContainerStyle
      className={className}
      childrencount={childrenCount.toString()}
      gap={gap?.toString() + 'px'}
      height={height}
    >
      {children}
    </GridContainerStyle>
  );
};

export { GridContainer };
