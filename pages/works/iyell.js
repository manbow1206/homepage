import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Inkdrop <Badge>2016</Badge>
        </Title>
        <P>lorem</P>
        <List ml={4} my={4}></List>
      </Container>
    </Layout>
  );
};

export default Work;
