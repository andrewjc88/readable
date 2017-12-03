import React from 'react'

const CategorySelector = ({}) => {
  return(
    <div className='categorySelector'>
      <select title="Select category" name="Select Post Category" id="CategorySelector">
        <option value="allCategories">All ...</option>
        <option value="">tech</option>
        <option value="">health</option>
      </select>
    </div>
  );

};

export default CategorySelector