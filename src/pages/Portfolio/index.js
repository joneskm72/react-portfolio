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
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Card className='portfolioCard' style={{ width: '25rem', marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}>
          <Card.Img variant="top" src={DayPlanner} onClick={() => newTab('https://joneskm72.github.io/day-scheduler-hw5/')}/>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>Day Planner</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              A simple calendar application that allows the user to save events for each hour of the day.
            </Card.Text>
            <Button className='btn btn-dark' onClick={() => newTab('https://joneskm72.github.io/day-scheduler-hw5/')}>Day Planner</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem', marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}>
          <Card.Img variant="top" src={DreamDog} onClick={() => newTab('https://vkalaparthy.github.io/2020-Project1/')}/>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>Dream Dog</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              A simple calendar application that allows the user to save events for each hour of the day.
            </Card.Text>
            <Button className='btn btn-dark' onClick={() => newTab('https://vkalaparthy.github.io/2020-Project1/')}>Dream Dog</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem', marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}>
          <Card.Img variant="top" src={PasswordGenerator} onClick={() => newTab('https://joneskm72.github.io/password-generator-hw3/')}/>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>Password Generator</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              A simple calendar application that allows the user to save events for each hour of the day.
            </Card.Text>
            <Button className='btn btn-dark' onClick={() => newTab('https://joneskm72.github.io/password-generator-hw3/')}>Password Generator</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem', marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}>
          <Card.Img variant="top" src={WeatherDashboard} onClick={() => newTab('https://joneskm72.github.io/server-side-apis-hw6/')}/>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>Weather Dashboard</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              A simple calendar application that allows the user to save events for each hour of the day.
            </Card.Text>
            <Button className='btn btn-dark' onClick={() => newTab('https://joneskm72.github.io/server-side-apis-hw6/')}>Weather Dashboard</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem', marginLeft: '20px', marginRight: '20px', marginTop: '20px', marginBottom: '20px' }}>
          <Card.Img variant="top" src={EventSafe} onClick={() => newTab('https://project-2-team-3.herokuapp.com/')}/>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>EventSafe</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              A simple calendar application that allows the user to save events for each hour of the day.
            </Card.Text>
            <Button className='btn btn-dark' onClick={() => newTab('https://project-2-team-3.herokuapp.com/')}>EventSafe</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Portfolio;