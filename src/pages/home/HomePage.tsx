import { Link, Redirect } from "react-router-dom";

export const RedirectToHomePage = () => {
  return <Redirect to={{ pathname: "/" }} />;
};

const HomePage = () => {
  return (
    <>
      <h2 className="mt-3">¡Bienvenido!</h2>
      <p>
        ¡Próximamente nuevas novedades! Por ahora empecemos con{" "}
        <Link to="/products">Productos</Link>.
      </p>
    </>
  );
};

export default HomePage;
