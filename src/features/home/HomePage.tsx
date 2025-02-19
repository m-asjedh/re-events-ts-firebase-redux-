import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Re-events
        </Header>
        <Button size="huge" as={Link} to="/events" inverted>
          Get Started
          <Icon name="caret right" inverted />
        </Button>
      </Container>
    </Segment>
  );
}
