import React, { Children, useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Container,
} from '@material-ui/core';
import MultipleReturns from './components/MultipleReturns';
import userArticles from './data/articles';
import articles from './data/articles';

const url = 'https://www.course-api.com/react-tours-project';

const Tours = () => {
  const [tours, setTours] = useState([]);
  userArticles.map((user) => {
    const { userId, articles } = user;
    console.log(userId, articles);
  });

  const getToursData = async () => {
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        const msg = `Error status ${response.status}, and error message ${response.statusText}`;
        throw new Error(msg);
      }
      const data = await response.json();
      setTours(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToursData();
  }, []);

  console.log(tours);
  return (
    <Container>
      <TourCard name="john" info="Mostar">
        <p>Opusteno</p>
      </TourCard>
      <TourCard anme="aki" info="Sarajevo" />
      <MultipleReturns />
    </Container>
  );
};

const TourCard = ({ name, info, children }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Tours;
