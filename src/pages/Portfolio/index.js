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
              <Card.Img className='portfolioImage' variant="top" src={DayPlanner} onClick={() => newTab('https://joneskm72.github.io/day-scheduler-hw5/')}/>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Day Planner</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                  A simple calendar application that allows the user to save events for each hour of the day.
                </Card.Text>
                <Button className='btn btn-dark' onClick={() => newTab('https://joneskm72.github.io/day-scheduler-hw5/')}>View</Button>
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
                <Button className='btn btn-dark' onClick={() => newTab('https://vkalaparthy.github.io/2020-Project1/')}>View</Button>
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
                <Button className='btn btn-dark' onClick={() => newTab('https://joneskm72.github.io/password-generator-hw3/')}>View</Button>
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
                <Button className='btn btn-dark' onClick={() => newTab('https://joneskm72.github.io/server-side-apis-hw6/')}>View</Button>
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
                <Button className='btn btn-dark' onClick={() => newTab('https://project-2-team-3.herokuapp.com/')}>View</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>  
    )
  }
}

export default Portfolio;