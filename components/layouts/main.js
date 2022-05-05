import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import VoxelDesk from "../voxel-desk";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pd={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Takuya Yasunaga - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <VoxelDesk></VoxelDesk>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
