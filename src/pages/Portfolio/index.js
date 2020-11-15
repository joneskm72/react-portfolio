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

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Card className='portfolioCard' style={{ width: '30rem' }}>
          <Card.Img variant="top" src={DayPlanner} href='https://joneskm72.github.io/day-scheduler-hw5/' />
          <Card.Body>
            <Card.Title className='card-title'>Day Planner</Card.Title>
            <Card.Text>
              A simple calendar application that allows the user to save events for each hour of the day.
            </Card.Text>
            <Button className='btn btn-dark' variant="https://joneskm72.github.io/day-scheduler-hw5/">Day Planner</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={DreamDog} href='https://vkalaparthy.github.io/2020-Project1/' />
          <Card.Body>
            <Card.Title>Dream Dog</Card.Title>
            <Card.Text>
              A simple calendar application that allows the user to save events for each hour of the day.
            </Card.Text>
            <Button className='btn btn-dark' variant="https://vkalaparthy.github.io/2020-Project1/">Dream Dog</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={PasswordGenerator} href='https://joneskm72.github.io/password-generator-hw3/' />
          <Card.Body>
            <Card.Title>Password Generator</Card.Title>
            <Card.Text>
              A simple calendar application that allows the user to save events for each hour of the day.
            </Card.Text>
            <Button className='btn btn-dark' variant="https://joneskm72.github.io/password-generator-hw3/">Password Generator</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={WeatherDashboard} href='https://joneskm72.github.io/server-side-apis-hw6/' />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              A simple calendar application that allows the user to save events for each hour of the day.
            </Card.Text>
            <Button className='btn btn-dark' variant="https://joneskm72.github.io/server-side-apis-hw6/">Weather Dashboard</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={EventSafe} href='https://project-2-team-3.herokuapp.com/' />
          <Card.Body>
            <Card.Title>EventSafe</Card.Title>
            <Card.Text>
              A simple calendar application that allows the user to save events for each hour of the day.
            </Card.Text>
            <Button className='btn btn-dark' variant="https://project-2-team-3.herokuapp.com/">EventSafe</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Portfolio;