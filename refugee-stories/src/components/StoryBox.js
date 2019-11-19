import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

const titleStyles = {
  fontSize: '4rem',
  fontFamily: ['Bebas Neue', 'cursive'],
  textAlign: 'center',
  color: '#3D5B91'
}

const subtitleStyles = {
  fontSize: '1.5rem',
  margin: '0.5rem',
  color: '#8CA744',
  fontFamily: ['Alata', 'sans-serif']
}

const textStyles = {
  fontSize: '2rem',
  color: '#252A33', 
  clear: 'both',
  paddingTop: '1rem'
}

const imgStyles = {
  width: '32%',
  float: 'left',
  marginRight: '0.75rem'
}

function StoryBox( { story }) {

  const date = new Date(story.created_at);
  
  return (
    <Card>
      <CardImg top width='100%' src={story.refugee_location_img} alt='location' />
      <CardBody>
      <CardTitle style={titleStyles}>{story.story_title}</CardTitle>

      <CardImg src={story.avatar_image} style={imgStyles} alt='refugee' />

      {story.author? 
      <CardSubtitle style={subtitleStyles}>By {story.author}</CardSubtitle>: null }

      {story.location?
      <CardSubtitle style={subtitleStyles}>Located in {story.location}</CardSubtitle>: null }

      <CardSubtitle style={subtitleStyles}>Written on {date.toDateString()}</CardSubtitle>
      <CardText style={textStyles}>{story.story_description}</CardText>
      </CardBody>
    </Card>
  );
}
  
  export default StoryBox;