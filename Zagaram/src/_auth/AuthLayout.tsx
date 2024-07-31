import { Navigate, Outlet } from "react-router-dom"

const AuthLayout = () => {
  const isAuthanticated = false;
  return (
    <>
      {isAuthanticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
            </section>
            <img src="/assets/images/side.jpg" alt="logo" className="hidden xl:block w-[85vh] h-[100vh] object-cover bg-no-repeat" />
        </>
      )}
    </>
  );
}

export default AuthLayout