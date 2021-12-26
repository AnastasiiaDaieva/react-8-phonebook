import './App.scss';
import React from 'react';
import { Suspense } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import AppBar from 'components/AppBar/AppBar';

const HomeView = lazy(() =>
  import('views/HomeView' /*webpackChunkName: "home-view" */),
);
const LoginView = lazy(() =>
  import('views/LoginView' /*webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('views/ContactsView' /*webpackChunkName: "contacts-view" */),
);
const SignupView = lazy(() =>
  import('views/SignupView' /*webpackChunkName: "signup-view" */),
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<ClipLoader />}>
        <Routes>
          <Route path="/*" element={<HomeView />} />
          <Route path="/mycontacts" element={<ContactsView />} />
          <Route path="/signup" element={<SignupView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
