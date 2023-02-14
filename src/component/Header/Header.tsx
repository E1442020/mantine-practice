import { Button } from "@mantine/core";
import {
  HeaderContainer,
  HeaderContent,
  HeaderImg
} from "../styledComponent/HeaderStyle";
import img from './pexels-lukas-574080.jpg';
export default function Headerr() {
  return (
    <HeaderContainer>
      <HeaderContent>

        
        <h2>All your files in one secure location, accessible anywhere</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          nobis sunt obcaecati hic nostrum debitis. Debitis cumque cum expedita
          illum.
        </p>
        <form>
          <input type="email" placeholder="web@email.com" required />
          <Button variant="outline" color="grape" type="submit">
            Get Started
          </Button>
        </form>
      </HeaderContent>
      <HeaderImg>
        <img src={img} alt=""/>
      </HeaderImg>
    </HeaderContainer>
  );
}
