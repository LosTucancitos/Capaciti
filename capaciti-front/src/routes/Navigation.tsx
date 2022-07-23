/**
 * Main navigation of the app
 */
import { Suspense, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { routes } from './routes';
import { useSelector } from 'react-redux';
import { AuthReducerStateI } from '../reducers/authReducer';
import { AppState } from '../store/store';
import { Roles } from '../models/Roles';
import { NavBar } from '../components/common/NavBar';
import { Container } from 'react-bootstrap';

export const Navigation = () => {

    const authState: AuthReducerStateI = useSelector((state: AppState) => state.auth);

    return (
      <div>
        <Suspense fallback={<span>Cargando...</span>}>
          <BrowserRouter>
            <NavBar />
            <Container>
              <Routes>
                {
                  routes.map(({path, allowedRoles, loginRequired, Component}) => {
                    return loginRequired
                      ? (<Route key={path} path={path} element={<PrivateRoute allowedRoles={allowedRoles ?? []}
                                                                              isAuthenticated={authState.loggedIn}
                                                                              Component={Component}
                                                                              userRole={Roles.ALL}/>}/>)
                      : (<Route key={path} path={path}
                                element={<PublicRoute Component={Component} isAuthenticated={authState.loggedIn}/>}/>)
                  })
                }
              </Routes>
            </Container>
          </BrowserRouter>
        </Suspense>
      </div>
    )
  }