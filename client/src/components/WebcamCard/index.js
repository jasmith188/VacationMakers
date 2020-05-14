import React from 'react'
import { Card, Image } from "semantic-ui-react";

function WebcamCard() {
    const { img_url, title, region, id, country } = this.props
      return(
        <Card onClick={this.handleClick} href={`http://localhost:3000/${id}`}>
          <Card.Header>{region ? region : country}</Card.Header>
          <Image src={img_url} wrapped ui={false} />
          <Card.Content>
            <Card.Description>
              { title }
            </Card.Description>
          </Card.Content>
        </Card>
      )
    }
  
  
  export default WebcamCard