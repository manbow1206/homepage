import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from "../components/section";
import Paragraph from "../components/paragraph";

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
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of{' '}<NextLink href="#"><Link>Manbow</Link></NextLink> .
        </Paragraph>
        <Box align="right" my={4}>
          <NextLink href="/work">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Profile
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
};
export default Page;
