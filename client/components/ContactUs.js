import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'

class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.updateField = this.updateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  updateField(field, value) {
    this.setState({[field]: value})
  }

  handleSubmit() {
    event.preventDefault()
    console.log('your message has been submitted')
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }
  render() {
    return (
      <Fade bottom>
        <div className="container-fluid">
          <h4 className="text-justify">
            Whether you want to give us song suggestions for our growing library
            or you see an issue on the site, send us some mail! We love hearing
            from you; it makes us feel the warm and fuzzies.
          </h4>
          <h4 className="display-4 text-center">KEEP JAMMIN'</h4>
          <form>
            <div className="row">
              <div className="form-group">
                <label>
                  Name:
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={event =>
                      this.updateField('name', event.target.value)
                    }
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <label>
                  Email:
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.email}
                    onChange={event =>
                      this.updateField('email', event.target.value)
                    }
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <label>
                  Message:
                  <textarea
                    type="text"
                    className="form-control"
                    rows="5"
                    value={this.state.message}
                    onChange={event =>
                      this.updateField('message', event.target.value)
                    }
                  />
                </label>
              </div>
            </div>
            <div className="row">
              <button
                className="btn btn-primary"
                onClick={event => this.handleSubmit(event)}
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </Fade>
    )
  }
}

export default ContactUs
