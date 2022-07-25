import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/" style={{
        display: 'block',
        textAlign: 'center',
        fontSize: '30px',
        color: '#4481c3'
      }}
      >
        Go to main page
      </Link>
    </>
  );
}
