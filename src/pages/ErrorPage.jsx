import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="font-space text-4xl">Wetin you click!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="font-bold uppercase text-cta underline">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
