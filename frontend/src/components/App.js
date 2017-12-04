import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/App.css';
import CategorySelector from './CategorySelector';
import Post from './Post'
import AddEditPost from './AddEditPost'
import Comments from './Comments';
// import * as PostsAPI from './utils/postsAPI';
import Loading from 'react-loading';
import Modal from 'react-modal'

class App extends Component {

  state = {
    post: null,
    categories: null,
    selectedCategory: null,
    comments: null,
    votes: null,
    postDetailsModalOpen: false,
    addPostModalOpen: false,
    loadingFood: false,
  }

  onChangeCategory = ({}) => {
    
  }

  openPostDetailsModal = ({ post }) => {
    this.setState(() => ({
      foodModalOpen: true,
      post
    }))
  }
  closePostDetailsModal = () => {
    this.setState(() => ({
      foodModalOpen: false,
      meal: null,
      day: null,
      food: null,
    }))
  }

  render() {

    const { postDetailsModalOpen, postDetails, addPostModalOpen, post, gategory } = this.state
    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable App</h1>
        </header>
        <CategorySelector 
          // Props go here        
        /> 
        <Post
          // Props go here
        />
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={postDetails}
          onRequestClose={this.closePostDetails}
          contentLabel='Modal'
        >
          {/* {ingredientsModalOpen && <ShoppingList list={this.generateShoppingList()}/>} */}
        </Modal>
        <Modal
          className='modal'
          overlayClassName='overlay'
          // isOpen={addPost}
          onRequestClose={this.closeAddPost}
          contentLabel='Modal'
        >
          {/* {ingredientsModalOpen && <ShoppingList list={this.generateShoppingList()}/>} */}
        </Modal>         
      </div>
    );
  }
}

function mapStateToProps ({  }) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    // calendar: dayOrder.map((day) => ({
    //   day,
    //   meals: Object.keys(calendar[day]).reduce((meals, meal) => {
    //     meals[meal] = calendar[day][meal]
    //       ? food[calendar[day][meal]]
    //       : null

    //     return meals
    //   }, {})
    // })),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // selectRecipe: (data) => dispatch(addRecipe(data)),
    // remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
