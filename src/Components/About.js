import React, { Component } from 'react'

class About extends Component {
  render() {
    let name
    let profilepic
    let city
    let phone
    let email
    let resumeDownload

    if (this.props.data) {
      name = this.props.data.name
      profilepic = 'images/' + this.props.data.image
      city = this.props.data.address.city
      phone = this.props.data.phone
      email = this.props.data.email
      resumeDownload = this.props.data.resumedownload
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Tim Baker Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>{city}</span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
