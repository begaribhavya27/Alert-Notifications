// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  renderSuccess = () => (
    <Notification>
      <AiFillCheckCircle className="success-icon" />
      <div className="message-container">
        <h1 className="success-heading">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  renderError = () => (
    <Notification>
      <RiErrorWarningFill className="error-icon" />
      <div className="message-container">
        <h1 className="error-heading">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  renderWarning = () => (
    <Notification>
      <MdWarning className="warning-icon" />
      <div className="message-container">
        <h1 className="warning-heading">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  renderInfo = () => (
    <Notification>
      <MdInfo className="info-icon" />
      <div className="message-container">
        <h1 className="info-heading">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Alert Notifications</h1>
        {this.renderSuccess()}
        {this.renderError()}
        {this.renderWarning()}
        {this.renderInfo()}
      </div>
    )
  }
}

export default AlertNotifications
