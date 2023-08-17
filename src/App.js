import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContianer from "./components/MainContainer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");
// console.log(heading);
// const jsxHeading = (<h1 className='heading'>JSX Heading</h1>);
// console.log(jsxHeading);

// const parent = React.createElement("div", {id:"parent"},
//     React.createElement("div", {id:"child"}, [
//         React.createElement("h1",{},"I'm the h1 tag"),
//         React.createElement("h2",{},"I'm the h2 tag")
//     ])
// )

// const Title = ()=> (
//     <h1>This is title</h1>
// )

// const headingElement = <h2>This is a h2 heading React Element</h2>;

//Component Composition
// const Heading = ()=> {
//     return <div>
//         <Title />
//         {headingElement}
//         {Title()}
//         <h1>Component Heading</h1>
//     </div>
// }

// console.log(Heading());

//Restaurant Card

//Restaurant Menu or Container

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainContianer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
