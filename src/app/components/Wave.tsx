import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SVG {
  link: string;
  view: string;
  color: string;
  opacity: string;
  d: string;
  pathLength: number;
}

const Wave = (props: SVG) => {
  return (
    <WaveSvg xmlns={props.link} viewBox={props.view} fill={props.color}>
      <motion.path
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{ pathLength: props.pathLength, pathOffset: 0 }}
        transition={{ duration: 4 }}
        stroke="#3C5E4E"
        strokeOpacity={props.opacity}
        strokeWidth="10"
        d={props.d}
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  left: 0;
  bottom: 0;
  margin: 0rem 0rem 0rem 0rem;
  z-index: -1;
  position: relative;
`;

export default Wave;
