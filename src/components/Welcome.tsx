import {Avatar, Box, Button, Card, CardBody, CardFooter, Heading, Text} from "grommet";
import React from "react";
import {Github, Linkedin} from "grommet-icons";


type CardLinkProps = {
  icon: JSX.Element;
  link: string;
}

const CardLink = ({icon, link}: CardLinkProps) => (
  <Button icon={icon} hoverIndicator style={{borderRadius: "12px"}} onClick={() => window.open(link)}/>
)

const SeeMyCode = () => (
  <CardLink icon={<Github/>} link="https://github.com/lucasob"/>
)

const SeeLinkedIn = () => (
  <CardLink icon={<Linkedin />} link="https://www.linkedin.com/in/lucas-bruck-189361114/" />
)


export default function Welcome() {

  return (
    <Box height="100vh" justify="center" align="center" background="linear-gradient(45deg, #ffb4c4, #fff)" data-testid="welcomeScreen">
      <Card background={{color: "dark-2"}} direction="column" justify="center" elevation="xlarge">
        <CardBody pad="medium">
          <Box align="center" direction="column" justify="center" pad="small">
            <Avatar size="xlarge" src="/me.jpeg"/>
            <Heading level="2" size="medium" margin="medium">Lucas Bruck</Heading>
            <Text size="small" alignSelf="center">Software engineer</Text>
          </Box>
        </CardBody>
        <CardFooter pad="small">
          <Box direction="row" justify="around" width="100%">
            <SeeMyCode />
            <SeeLinkedIn />
          </Box>
        </CardFooter>
      </Card>
    </Box>
  )
}