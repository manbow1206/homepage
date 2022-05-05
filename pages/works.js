import { Container, Heading, SimpleGrind, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import  thumbInkdrop  from "../public/images/works/inkdrop_eyecatch.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrind columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="inkdrop"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          ></WorkGridItem>
        </Section>
      </SimpleGrind>
    </Container>
  );
};

export default Works;