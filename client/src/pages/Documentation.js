import React from "react";
import {
  Container,
} from "@mui/material";
import Code from "../components/Doc/code";
import Features from "../components/Doc/features";
import Intro from "../components/Doc/intro";
import Conditions from "../components/Doc/conditions";

function Documentation() {
  return (
    <Container maxWidth="md" className="space-y-6 mt-10 mb-28">
      <Intro />
      <section>
        <Features />
      </section>
      <section>
        <Conditions />
        <Code />
      </section>
    </Container>
  );
}

export default Documentation;
