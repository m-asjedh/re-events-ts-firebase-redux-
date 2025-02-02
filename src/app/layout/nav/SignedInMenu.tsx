import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

type Props = {
  setAuth: (value: boolean) => void;
};

export default function SignedInMenu({ setAuth }: Props) {
  const navigate = useNavigate();

  function handleSignout() {
    setAuth(false);
    navigate("/");
  }
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/user.png" />
      <Dropdown pointing="top left" text="Bob">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item text="Sign Out" icon="power" onClick={handleSignout} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
