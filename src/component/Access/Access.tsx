import { Button } from "@mantine/core";
import {
  AccessComponent,
  AccessContainer,
  AccessContent,
  AccessInput
} from "../styledComponent/Access";
export default function Access() {
  return (
    <AccessComponent>
      <AccessContainer>
        <AccessContent>
          <h2>Get Early Access Today</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            officiis hic expedita ut, delectus et!
          </p>
        </AccessContent>
        <AccessInput>
          <input type="email" placeholder="web@gmail.com" />
          <Button variant="outline" color="grape" type="submit">
            Get Started Free
          </Button>
        </AccessInput>
      </AccessContainer>
    </AccessComponent>
  );
}
