"use client";

import { Header as MantineHeader, Container, Text } from "@mantine/core";

const Header = () => {
  return (
    <MantineHeader height={60} p="xs">
      <Container>
        <Text component="h1" weight={900} size="xl">
          {" "}
          ProductHuntPage
        </Text>
      </Container>
    </MantineHeader>
  );
};

export default Header;
