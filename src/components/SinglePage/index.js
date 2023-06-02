import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Row, ListGroup } from "react-bootstrap";
export default function SingleMoviesPage(props) {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://api.themoviedb.org/3/movie/${id}?api_key=9190e4c097577c6ffc706d8a743f8f99&language=en-US`
      )
      .then((res) => setMovie(res.data))
      .then((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="6">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
          </Col>
          <Col md="6">
            <Card className="mt-5">
              <Card.Body>
                <Card.Title>
                  <h2>{movie.title}</h2>
                </Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush ">
                <ListGroup.Item>Status: {movie.status}</ListGroup.Item>
                <ListGroup.Item>
                  Running Time: {Math.floor(movie.runtime / 60)} hours{" "}
                  {movie.runtime % 60} minutes{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Genre:{" "}
                  {Array.isArray(movie.genres) &&
                    movie.genres.map((en) => (
                      <span className="me-1">{en.name},</span>
                    ))}
                </ListGroup.Item>
                <ListGroup.Item>
                  Release Date: {movie.release_date}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
