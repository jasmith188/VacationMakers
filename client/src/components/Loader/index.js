import React from 'react'
import { Segment, Dimmer, Loader } from "semantic-ui-react";

function OurLoader() {
  return (
    <Segment>
      <Dimmer active>
        <Loader size='large'>Loading</Loader>
      </Dimmer>
    </Segment>
  )
}

export default OurLoader