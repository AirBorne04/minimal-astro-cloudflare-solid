import { Route, Routes, Router, RouterProps } from "@solidjs/router";
import { TestComp } from "./TestComp";


export const App = (props: { path?: string }) => {
  let routerProps: RouterProps = { base: "/" };

  if (props.path) {
    routerProps = {
      ...routerProps,
      url: props.path
    };
  }

  console.log("routerprops: ", routerProps);

  return (
    <Router {...routerProps}>
      <AppInternal />
    </Router>
  );
};

export const AppInternal = () => {

  return (
    <Routes>
      <Route path="/" component={TestComp} />
      <Route path="*" component={TestComp} />
    </Routes>
  );
};