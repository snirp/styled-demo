import React from "react";
import styled from "@emotion/styled";

import ChildComponent from "./ChildComponent";

const StyledChild = styled(ChildComponent)`
  margin: 200px;
  color: green;
`;

const Test = styled.div`
  color: blue;
  font-size: 3rem;
`;

const ParentComponent = () => (
  <>
    <Test>boe</Test>
    <StyledChild />
  </>
);

export default ParentComponent;
