import React from 'react';
import './Form.css'
import axios from 'axios'

class FormMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }

      onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
      }

     
    

      submitForm(e) {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
        .then(res => res.data)
        .then(res => {
        alert(`Movie successfully added to list!`);
        })
        .catch(e => {
        console.error(e);
        alert(`Movie add to list failed`);
        });
}

    render() {
      return (
    <div className="FormEmployee">
        <h1>Share you favourite Movie</h1>


        <form onSubmit={this.submitForm}>
            <fieldset>
                <legend>Informations</legend>
                     <div className="form-data">
                         <label htmlFor="title">Title</label>
                        <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.title}
                        placeholder="My fav movie"
                        required
                        />
                     </div>

                    <div className="form-data">
                         <label htmlFor="poster">Poster</label>
                         <input
                         type="text"
                         id="poster"
                         name="poster"
                         placeholder="https://example.com"
                         pattern="https://.*"
                        
                         onChange={this.onChange}
                        value={this.state.poster}
                        required
                            />
                    </div>

                     <div className="form-data">
                         <label htmlFor="comment">Comment</label>
                         <input
                         type="textarea"
                         id="comment"
                         name="comment"
                         onChange={this.onChange}
                         value={this.state.email}
                         placeholder="My review on my best movie"
                         required
                            />
                     </div>
      <hr />
                    <div className="form-data">
                        <input type="submit" value="Envoyer" />
                     </div>
            </fieldset>
        </form>
    </div>
      )
    }
  }

    



export default FormMovie;