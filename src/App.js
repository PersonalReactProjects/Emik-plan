import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import FallbackSuspense from '../src/components/layout/FallbackSuspense'


const Dashboard = lazy(() => import("../src/components/dashboard/Dashboard"))

const ProjectDetails = lazy(() => import("../src/components/projects/ProjectDetails"))

const SignIn = lazy(() => import("../src/components/auth/SignIn"))

const SignUp = lazy(() => import("../src/components/auth/SignUp"))

const CreateProject = lazy(() => import("../src/components/projects/CreateProject"))


class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <ErrorBoundary> */}
        <Suspense fallback={<FallbackSuspense />}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/project/:id" component={ProjectDetails} />
            <Route exact path="/project/:id" component={ProjectDetails} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/create" component={CreateProject} />
          </Switch>
        </Suspense>
        {/* </ErrorBoundary> */}
        {/* <Footer/> */}
      </>
    );
  }
}

export default App;
