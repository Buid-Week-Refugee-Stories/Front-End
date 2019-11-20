import React from 'react';
import refugees from '../images/refugees.jpg';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addStory } from '../actions';
import { connect } from 'react-redux';


function SubmissionForm( {values, errors, touched, props}) {
  
  return (
    <div>
      <h2>Submit Your Story</h2>
      <Form>
        <label htmlFor='author'>Your name: </label>
        <Field type='text'
          name='author'
          placeholder='your name'
        />
        {touched.author && errors.author && (<p>{errors.author}</p>)}
        <br />
        

        <label htmlFor='location'>Your location: </label>
        <Field type='text'
          name='location'
          placeholder='your location'
        />
        {touched.location && errors.location && (<p>{errors.location}</p>)}
        <br />

        <label htmlFor='story_title'>Title: </label>
        <Field type='text'
          name='story_title'
          placeholder='title'
         />
        {touched.story_title && errors.story_title && (<p>{errors.story_title}</p>)}
        <br />

        <label htmlFor='story_description'>Story: </label><br />
        <Field type='textarea'
          name='story_description'
          placeholder='your story here'
        />
        {touched.story_description && errors.story_description && (<p>{errors.story_description}</p>)}
        <br />

        <button type='submit'>Submit Story</button>

      </Form>

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
    console.log(values);
    const newStory = {
      id: Date.now(),
      author: values.author,
      location: values.location,
      created_at: Date.now(),
      story_title: values.story_title,
      story_description: values.story_description,
      approved_story: false
    }
    console.log("Values for new story", newStory);

    // tools.props.addNewStory(values);
    tools.resetForm();
    //TODO: Add POST axios call here to backend once that is ready.
  }
})(SubmissionForm);

// const mapStateToProps = (state) => {
//   return {
//   }
// }


export default FormikSubmissionForm;
// export connect({mapStateToProps}, { addStory })(FormikSubmissionForm);

// Here is the original code, before Formik:
/*
function SubmissionForm(props) {
  const [story, setStory] = useState({
    author: '',
    location: '',
    story_title: '',
    story_description: ''
  });

  const handleChange = e => {
    setStory({ ...story, [e.target.name]: e.target.value });
  }

  const submitForm = e => {
    e.preventDefault();
    props.addNewStory(story);
    setStory({
      author: '',
      location: '',
      story_title: '',
      story_description: ''
    });
    console.log('submitted');
  }

  return (
    <div>
      <h2>Submit Your Story</h2>
      <form onSubmit={submitForm}>
        <label htmlFor='author'>Your name: </label>
        <input type='text'
          name='author'
          id='author'
          placeholder='your name'
          onChange={handleChange}
          value={story.author} /><br />

        <label htmlFor='location'>Your location: </label>
        <input type='text'
          name='location'
          id='location'
          placeholder='your location'
          onChange={handleChange}
          value={story.location} /><br />

        <label htmlFor='story_title'>Title: </label>
        <input type='text'
          name='story_title'
          id='story_title'
          placeholder='title'
          onChange={handleChange}
          value={story.story_title}
          required />
        <br />

        <label htmlFor='story_description'>Story: </label><br />
        <textarea
          name='story_description'
          id='story_description'
          placeholder='your story here'
          onChange={handleChange}
          value={story.story_description}
          required /><br />

        <button type='submit'>Submit Story</button>

      </form>

      <div className="imgContainer">
        <img src={refugees} alt='refugees standing at a seashore' />
      </div>
    </div>
  );
}

export default SubmissionForm;
*/