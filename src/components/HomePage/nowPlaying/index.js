import { Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default function NowPlaying({ movie }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <nowWrapper>
      <Container>
        <div className="mt-5 mb-3">
          <h2>Now Playing</h2>
        </div>
        <Slider {...settings}>
          {movie.map(function (movie) {
            return (
              <Link className="links" to={`/movies/${movie.id}`}>
                <Card className="my-2 mx-2">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </Slider>
      </Container>
    </nowWrapper>
  );
}
