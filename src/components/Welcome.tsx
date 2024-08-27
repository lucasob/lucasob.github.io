import {Avatar, Box, Button, Card, CardBody, CardFooter, Heading, Text} from "grommet";
import React from "react";
import {Github, Linkedin, Article} from "grommet-icons";

type LinkProp = {link: string;}

type CardLinkProps = { icon: JSX.Element;} & LinkProp

const CardLink = ({icon, link}: CardLinkProps) => (
  <Button icon={icon} hoverIndicator style={{borderRadius: "12px"}} onClick={() => window.open(link)}/>
)

const SeeMyCode = (props: LinkProp) => (
  <CardLink icon={<Github/>} {...props} />
)

const SeeLinkedIn = (props: LinkProp) => (
  <CardLink icon={<Linkedin />} {...props} />
)

const SeeResume = (props: LinkProp) => (
  <CardLink icon={<Article />} {...props} />
)


export default function Welcome({resumeLink, linkedIn, githubLink}: {[k in "resumeLink" | "githubLink" | "linkedIn"]: string | undefined}) {

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
            {githubLink && <SeeMyCode link={githubLink}/>}
            {linkedIn && <SeeLinkedIn link={linkedIn}/>}
            {resumeLink && <SeeResume link={resumeLink}/>}
          </Box>
        </CardFooter>
      </Card>
    </Box>
  )
}