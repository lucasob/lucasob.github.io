import {Box, Card, CardBody, Grommet, Text} from "grommet";
import {Home} from "grommet-icons";
import React from "react";

const welcomeTheme = {
  card: {
    hover: {container: {elevation: "medium"}},
    container: {elevation: "small", extend: "transition: all 0.2s ease-in-out;"}
  },
}


export default function Welcome() {
  return (
    <Grommet theme={welcomeTheme} data-testId="welcome">
      <Box height="100vh" justify="center" align="center" background="linear-gradient(45deg, #ffb4c4, #003399)">
        <Card background={{color: "light-5"}} direction="column" justify="center" onClick={() => ({})}>
          <CardBody pad="large">
            <Box gap="small" align="center">
              <Home size="large"/>
              <Text color="dark-1">Welcome</Text>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Grommet>
  )
}