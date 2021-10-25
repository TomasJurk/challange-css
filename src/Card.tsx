import './styles/Card.css';
import Text from './Text';

type CardProps = {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
};

export default function Card({ heading, body, image, imageAlt }: CardProps) {
  return (
    <article className="card">
      <img src={image} alt={imageAlt} />
      <h3>{heading}</h3>
      <Text body={body} />
    </article>
  );
}
