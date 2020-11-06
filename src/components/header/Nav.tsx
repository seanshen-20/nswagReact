import React from "react";
import { Header } from "semantic-ui-react";
import { LinkMenu } from "./LinkMenu";

export const Nav: React.FC = () => {
  return (
    <>
      <Header as="h1">AXXX Shoppe</Header>
      <LinkMenu rdm={1}/>
    </>
  );
};