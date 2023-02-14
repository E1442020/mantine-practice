import { ActionIcon, Center, Flex } from "@mantine/core";
import { AiFillPhone, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GoDeviceDesktop } from "react-icons/go";
import { FooterComponent, FooterContainer } from "../styledComponent/Footer";

export default function Footer() {
  return (
    <FooterComponent>
      <FooterContainer>
        <Flex gap="lg" align="center">
          <GoDeviceDesktop style={{ color: "white" }} size={30} />
          <h3>Flyo</h3>
        </Flex>
        <Flex
          mih={50}
          gap="xl"
          justify="space-between"
          direction="row"
          wrap="wrap"
        >
          <Flex direction="column" gap="md">
            <Flex gap="md" align="center">
              <AiFillPhone />
              <p>Phone:01065204765</p>
            </Flex>
            <Flex gap="md" align="center">
              <AiOutlineMail />
              <p>Email:emanmasoud763@gmail.com</p>
            </Flex>
          </Flex>
          <Flex direction="column" gap="md">
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </Flex>
          <Flex direction="column" gap="md">
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </Flex>
          <Flex gap="md">
            <ActionIcon radius="xl" variant="outline">
              <FaFacebookF size={18} style={{ color: "white" }} />
            </ActionIcon>
            <ActionIcon radius="xl" variant="outline">
              <BsTwitter size={18} style={{ color: "white" }} />
            </ActionIcon>
            <ActionIcon radius="xl" variant="outline">
              <AiOutlineInstagram size={18} style={{ color: "white" }} />
            </ActionIcon>
          </Flex>
        </Flex>
        <Center>
          <div
            style={{
              fontWeight: "bolder",
              letterSpacing: "4px",
              marginTop: "15px",
            }}
          >
            Developed By Eman Masoud
          </div>
        </Center>
      </FooterContainer>
    </FooterComponent>
  );
}
