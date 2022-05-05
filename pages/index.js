import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section"

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Japan!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGlow={1}>
          <Heading as="h2" variant="page-title">
            Takuya Yasunaga
          </Heading>
          <p>Digital Craftzman (Artist / Developer / Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="2xl"
            src="/images/avatar.png"
          ></Image>
        </Box>
      </Box>
    </Container>
  );
};
export default Page;
