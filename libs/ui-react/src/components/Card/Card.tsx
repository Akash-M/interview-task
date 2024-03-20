import * as React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiComponentsProps {
  children?: React.ReactNode;
  img?: string;
  headline?: string;
  description?: string;
  link?: string;
}

const StyledUiComponents = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgb(25 25 25 / 12%);
  width: 300px;
  height: 350px;
`;

const StyledHeadline = styled.h3`
  padding: 12px 12px 0;
`;

const StyledImage = styled.img`
  object-fit: cover;
  max-width: 100%;
`;

const StyledParagraph = styled.p`
  padding: 0 12px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0 12px 12px 12px;
`;

export function Card(props: UiComponentsProps) {
  return (
    <StyledUiComponents>
      {props.children ? (
        props.children
      ) : (
        <>
          <StyledImage src={props.img} alt="Card Image" />
          <StyledHeadline>{props.headline}</StyledHeadline>
          <StyledParagraph>{props.description}</StyledParagraph>
          <StyledLink href={props.link}>&#8594;</StyledLink>
        </>
      )}
    </StyledUiComponents>
  );
}

export default Card;
