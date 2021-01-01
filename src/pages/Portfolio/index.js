import React, { Component } from 'react';
import './style.css';
import DayPlanner from '../../Assets/Images/day-planner.png';
import DreamDog from '../../Assets/Images/dream-dog.png';
import PasswordGenerator from '../../Assets/Images/password-generator.png';
import WeatherDashboard from '../../Assets/Images/weather-dashboard.png';
import EventSafe from '../../Assets/Images/eventsafe.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const newTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
};

class Portfolio extends Component {
  render() {
    return (
      <div className="container portfolioContainer">
        <div className="row portfolioRow">
          <div className="portfolioCard col-xl-4 col-md-6 col-sm-12">
            <Card className='cardStyle'>
              <Card.Img className='portfolioImage' variant="top" src={WeatherDashboard} onClick={() => newTab('https://jamez.herokuapp.com/')}/>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>jamEZ</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                An application that allows users to browse artists and songs, and create a playlist.
                </Card.Text>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://jamez.herokuapp.com/')}>View</Button>
                </div>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5>'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://github.com/joneskm72/project3-repo')}>GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="portfolioCard col-xl-4 col-md-6 col-sm-12">
            <Card className='cardStyle'>
              <Card.Img className='portfolioImage' variant="top" src={WeatherDashboard} onClick={() => newTab('https://workout-tracker-kasey.herokuapp.com')}/>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Fitness Tracker</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                An application that allows users to view, create, and track daily workouts.
                </Card.Text>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://workout-tracker-kasey.herokuapp.com')}>View</Button>
                </div>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5>'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://github.com/joneskm72/workout-tracker')}>GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="portfolioCard col-xl-4 col-md-6 col-sm-12">
            <Card className='cardStyle'>
              <Card.Img className='portfolioImage' variant="top" src={WeatherDashboard} onClick={() => newTab('https://joneskm72.github.io/employee-directory/')}/>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Employee Directory</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                An application that, using React, allows users to view an employee directory.
                </Card.Text>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://joneskm72.github.io/employee-directory/')}>View</Button>
                </div>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5>'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://github.com/joneskm72/employee-directory')}>GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="portfolioCard col-xl-4 col-md-6 col-sm-12">
            <Card className='cardStyle'>
              <Card.Img className='portfolioImage' variant="top" src={WeatherDashboard} onClick={() => newTab('https://budget-tracker-kasey.herokuapp.com/')}/>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Budget Tracker</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                An application that allows users to input expenses and deposits online or offline.
                </Card.Text>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://budget-tracker-kasey.herokuapp.com/')}>View</Button>
                </div>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5>'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://github.com/joneskm72/Budget-Tracker')}>GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="portfolioCard col-xl-4 col-md-6 col-sm-12">
            <Card className='cardStyle'>
              <Card.Img className='portfolioImage' variant="top" src={EventSafe} onClick={() => newTab('https://project-2-team-3.herokuapp.com/')}/>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>EventSafe</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  An application that allows users to see local events that follow COVID-19 precautions.
                </Card.Text>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://project-2-team-3.herokuapp.com/')}>View</Button>
                </div>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5>'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://github.com/joneskm72/EventSafe')}>GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="portfolioCard col-xl-4 col-md-6 col-sm-12">
            <Card className='cardStyle'>
              <Card.Img className='portfolioImage' variant="top" src={WeatherDashboard} onClick={() => newTab('https://joneskm72.github.io/server-side-apis-hw6/')}/>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Weather Dashboard</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                A site that allows users to find the current and 5-day weather forecast in their city
                </Card.Text>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://joneskm72.github.io/server-side-apis-hw6/')}>View</Button>
                </div>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5>'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://github.com/joneskm72/weather-dashboard')}>GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="portfolioCard col-xl-4 col-md-6 col-sm-12">
            <Card className='cardStyle'>
              <Card.Img className='portfolioImage' variant="top" src={DayPlanner} onClick={() => newTab('https://joneskm72.github.io/day-scheduler-hw5/')}/>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Day Planner</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  A simple calendar application that allows the user to save events for each hour of the day.
                </Card.Text>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://joneskm72.github.io/day-scheduler-hw5/')}>View</Button>
                </div>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5>'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://github.com/joneskm72/day-scheduler-hw5')}>GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="portfolioCard col-xl-4 col-md-6 col-sm-12">
            <Card className='cardStyle'>
              <Card.Img className='portfolioImage' variant="top" src={DreamDog} onClick={() => newTab('https://vkalaparthy.github.io/2020-Project1/')}/>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Dream Dog</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                An application that allows users to search for and adopt dogs.
                </Card.Text>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://vkalaparthy.github.io/2020-Project1/')}>View</Button>
                </div>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5>'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://github.com/joneskm72/Dream-Dog')}>GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="portfolioCard col-xl-4 col-md-6 col-sm-12">
            <Card className='cardStyle'>
              <Card.Img className='portfolioImage' variant="top" src={PasswordGenerator} onClick={() => newTab('https://joneskm72.github.io/password-generator-hw3/')}/>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Password Generator</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  An application that enables users to generate a secure password.
                </Card.Text>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://joneskm72.github.io/password-generator-hw3/')}>View</Button>
                </div>
                <div className='portfolioButton col-lg-12 col-md-4 col-sm-5>'>
                  <Button className='btn btn-dark' onClick={() => newTab('https://github.com/joneskm72/password-generator-hw3')}>GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>  
    )
  }
}

export default Portfolio;