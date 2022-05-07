import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { GridItem } from "../components/grid-item";
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of{" "}
            <NextLink href="#">
              <Link>Manbow</Link>
            </NextLink>{" "}
            .
          </Paragraph>
          <Box align="right" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Profile
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Bormn in Saitama(埼玉), Japan.
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            JGSDF Signal Company, 1st Airborne Brigade.
          </BioSection>
          <BioSection>
            <BioYear>2019 to present</BioYear>
            iYell inc, Web Developer.
          </BioSection>
        </Section>

        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            hobby
          </Heading>
          <Paragraph>MTB, Book, Training, Sea Diving</Paragraph>
        </Section>
        <Section delay={1.2}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/manbow1206">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @manbow1206
                </Button>
              </Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Link href="https://twitter.com/Manbow_roy">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @Manbow_roy
                </Button>
              </Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Link href="https://www.instagram.com/manbow_5656/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @Manbow_roy
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};
export default Page;
