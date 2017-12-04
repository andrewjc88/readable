import React from 'react'

const CategorySelector = ({}) => {
  return(
    <div className='categorySelector'>
      <h3>Select Category</h3>
      <select title="Select category" name="Select Post Category" id="CategorySelector">
        <option value="allCategories">All ...</option>
        <option value="">tech</option>
        <option value="">health</option>
      </select>

      <h3>Sort By</h3>
      <select title="Sort by" name="Sory posts by" id="Post Sort">
        <option value="">Votes &uarr;</option>
        <option value="">Votes &darr;</option>
        <option value="">Time &uarr;</option>
        <option value="">Time &darr;</option>
      </select>
    </div>
  );

};

export default CategorySelector