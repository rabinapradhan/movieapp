import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function TvShow() {
  const [tvshow, settvShow] = useState([{}]);
  const getTvShows = async () => {
    let apiKey = "9190e4c097577c6ffc706d8a743f8f99";
    const tvshows = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&page=1`
    );
    settvShow(tvshows.data.results);
  };
  useEffect(() => {
    getTvShows();
  }, []);

  return (
    <>
      <Container className="mt-4">
        <div className="mb-3">
          <h2>TV Shows</h2>
        </div>
        <Row>
          {tvshow.map(function (show) {
            return (
              <Col md="3">
                <Card className="my-2 mx-2">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{show.original_name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
