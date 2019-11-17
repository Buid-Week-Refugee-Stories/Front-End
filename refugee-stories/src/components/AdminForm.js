import React, { useState } from 'react';


function AdminForm( props ) {
  const [adminInput, setAdminInput] = useState( {
    approved_story: false,
    delete_story: false,
  });

  const handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox'? target.checked: target.value;
    const name = target.name;
    setAdminInput({...adminInput, [name]: value});
    if (name === 'approved_story' && value === true) {
        props.modifyStory(props.story);
    }
    if (name === 'delete_story' && value === true) {
        props.deleteStory(props.story);
    }
  }

  return (
    <div>
        <form>
            <label htmlFor='approved_story'><span role='img' aria-label='check'>✅</span> Approve? </label>
            <input type='checkbox'
            name='approved_story'
            id='approved_story'
            onChange={handleChange}
            checked={adminInput.approved_story}
            />

            <label htmlFor='delete_story'><span role='img' aria-label='cross'>❎</span> Delete? </label>
            <input type='checkbox'
            name='delete_story'
            id='delete_story'
            onChange={handleChange}
            checked={adminInput.delete_story}/><br />
      </form>
    </div>
  );
}

export default AdminForm;