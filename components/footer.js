"use client";

import { Footer as MantineFooter, Container, Text } from "@mantine/core";

const Footer = () => {
  return (
    <MantineFooter height={60} p="xs">
      <Container>
        <Text>&copy; 2024 ProductHunt</Text>
      </Container>
    </MantineFooter>
  );
};

export default Footer;
