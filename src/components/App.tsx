import NavBar from './Navbar';
import Form from '../components/Form';
import Metrics from './Metrics';
import System from './System';
import About from './About';
import Config from './Config';
import Profile from './Profile';
import '../css/navbar.css';
import { Route, Routes, useLocation, Outlet } from 'react-router-dom';
import { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import ContentPanel from './ContentPanel';
import ProtectedRoute from './ProtectedRoute';
import { DataResponse } from './metricsDisplayRender/renderMetrics';
import GoogleRouteCallback from './googleRoute';

function App(): JSX.Element {
  const location = useLocation();
  //used in NavBar
  const [isSideBarHovered, setIsSideBarHovered] = useState<boolean>(false);
  //used in ContentPanel
  const [isOpenAiWindow, setIsOpenAiWindow] = useState<boolean>(false);
  const [isRotated, setIsRotated] = useState<boolean>(false);
  const [labelText, setLabelText] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string>('');
  //used in Metrics
  const [data, setData] = useState<DataResponse | null>(null);
  //used in Profile
  const [dataSource, setDataSource] = useState<string>('');
  const [ip, setIp] = useState<string>('');
  const [port, setPort] = useState<string>('');
  //used in System
  const [queries, setQueries] = useState<{ [key: string]: string[] }>({});
  //used in Config && About
  const [showDescription, setShowDescription] = useState(false);
  // const [textColor, setTextColor] = useState<string>('');

  const handleMouseEnter = (): void => {
    setIsSideBarHovered(true);
  };
  const handleMouseLeave = (): void => {
    setIsSideBarHovered(false);
  };

  return (
    <div>
      {location.pathname !== '/' && (
        <NavBar isSideBarHovered={isSideBarHovered} />
      )}
      {location.pathname !== '/' && (
        <SidebarMenu
          isExpanded={isSideBarHovered}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
      <Routes>
        <Route path='/' element={<Form setQueries={setQueries} />} />
        <Route path='/oauth/google' element={<GoogleRouteCallback />} />
        <Route
          // path='/*'
          element={
            <ContentPanel
              isExpanded={isSideBarHovered}
              isOpenAiWindow={isOpenAiWindow}
              setIsOpenAiWindow={setIsOpenAiWindow}
              isRotated={isRotated}
              setIsRotated={setIsRotated}
              labelText={labelText}
              setLabelText={setLabelText}
              userInput={userInput}
              setUserInput={setUserInput}
              aiResponse={aiResponse}
              setAiResponse={setAiResponse}
            >
              <Outlet />
            </ContentPanel>
          }
        >
          <Route element={<ProtectedRoute />}>
            <Route
              path='/system'
              element={<System queries={queries} setQueries={setQueries} />}
            />
            <Route
              path='/metrics'
              element={
                <Metrics data={data} setData={setData} queries={queries} />
              }
            />
            <Route
              path='/about'
              element={
                <About
                  showDescription={showDescription}
                  setShowDescription={setShowDescription}
                />
              }
            />
            <Route
              path='/config'
              element={
                <Config
                  showDescription={showDescription}
                  setShowDescription={setShowDescription}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <Profile
                  dataSource={dataSource}
                  setDataSource={setDataSource}
                  ip={ip}
                  setIp={setIp}
                  port={port}
                  setPort={setPort}
                  queries={queries}
                />
              }
            />
          </Route>
        </Route>

        <Route path='*' element={<Form setQueries={setQueries} />} />
      </Routes>
    </div>
  );
}

export default App;
