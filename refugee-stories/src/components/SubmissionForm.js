import React from 'react';
import refugees from '../images/refugees.jpg';
import pencil from '../images/pencil.svg';
import family from '../images/family.png';
import speechBubble from '../images/speechBubble.svg';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addStory } from '../actions';
import { connect } from 'react-redux';
import { Label, FormGroup, Button } from 'reactstrap';
import { Tween } from 'react-gsap';

function SubmissionForm(props) {

  // addStory being used in formik.
  const { values, errors, touched, addStory, isAdded } = props

  return (
    <div>
      <Tween from={{ scale: 0}}>
        <h1 className='mainH1'>Submit Your Story</h1>
      </Tween>


      <Tween duration={2} to={{rotation:720, x:'40vw'}}>
        <img src={pencil} alt='pencil' style={{ display: 'inline-block', margin: 'auto', width: '4rem'}} />
      </Tween>

      <Tween duration={1.5} to={{ x:'45vw'}}>
        <img src={family} alt='family' style={{ display: 'inline-block', margin: 'auto', width: '5rem'}} />
      </Tween>

      <Tween duration={3} from={{rotation:720, x: '55vw', scale: 1.5}}>
        <img src={speechBubble} alt='speech bubble' style={{ display: 'inline-block', margin: 'auto', width: '4rem', left: '50vw', position: 'relative'}} />
      </Tween>

      <Form className='forms'>

        <FormGroup>
          <Label htmlFor='author'>Your name: </Label>
          <Field type='text'
            name='author'
            placeholder='your name'
          />
          {touched.author && errors.author && (<p>{errors.author}</p>)}
          <br />
        </FormGroup>

        <FormGroup>
          <Label htmlFor='location'>Your location: </Label>
          <Field type='text'
            name='location'
            placeholder='your location'
          />
          {touched.location && errors.location && (<p>{errors.location}</p>)}
          <br />
        </FormGroup>

        <FormGroup>
          <Label htmlFor='story_title'>Title: </Label>
          <Field type='text'
            name='story_title'
            placeholder='title'
          />
          {touched.story_title && errors.story_title && (<p>{errors.story_title}</p>)}
          <br />
        </FormGroup>

        <FormGroup>
          <Label htmlFor='story_description'>Story: </Label><br />
          <Field component='textarea'
            name='story_description'
            placeholder='your story here'
          />
          {touched.story_description && errors.story_description && (<p>{errors.story_description}</p>)}
          <br />
        </FormGroup>

        <Button type='submit' size='lg' color='warning' style={{width: '50%', margin: 'auto'}}>Submit Story</Button>

      </Form>
      {/* {isAdded && alert("Thank you for your submission! Someone will be reviewing it for approval.")} */}

      <div className="imgContainer">
        <img src={refugees} alt='refugees standing at a seashore' />
      </div>

    </div>
  );
}

const FormikSubmissionForm = withFormik({
  mapPropsToValues( { author, location, story_title, story_description }) {
    return {
      author: author || '',
      location: location || '',
      story_title: story_title || '',
      story_description: story_description || ''
    };
  },
  
  validationSchema: Yup.object().shape({
    author: Yup.string().min(2, 'Name is too short')
      .max(50, 'Name is too long'),
    location: Yup.string().min(2, 'Location name is too short')
      .max(50, 'Location name is too long'),
    story_title: Yup.string().min(2, 'Story title is too short')
      .max(50, 'Story title is too long')
      .required('A title is required'),
    story_description: Yup.string().min(10, 'Story content needs to be longer')
      .max(20000, 'Story content is too long. Edit your story, or submit it in muliple parts. Thank you.')
      .required('Story content is required')
  }),
  
  handleSubmit(values, tools) {
    // console.log(tools);
    const newStory = {
      id: Date.now(),
      author: values.author,
      location: values.location,
      created_at: Date.now(),
      story_title: values.story_title,
      story_description: values.story_description,
      approved_story: false
    }
    // console.log("Values for new story", newStory);

    // Add story to database.
    tools.props.addStory(newStory);
    // tools.props.history.push('/');
    tools.resetForm();
  }
})(SubmissionForm);

const mapStateToProps = (state) => {
  return {
    isAdded: state.isAdded
  }
}

// export default FormikSubmissionForm;
export default connect(mapStateToProps, { addStory })(FormikSubmissionForm);