import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  //console.log(err);
  return (
    <div>
      <h1>Opps...</h1>
      <h3>Something went wrong</h3>
      <h1 className="font-bold">
        {err.status} - {err.statusText}
      </h1>
    </div>
  );
};

export default Error;
