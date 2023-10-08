import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css'
import { ColorModeContext, useMode } from './theme/theme';
import Topbar from './sections/global/Topbar';
import SideBar from './sections/global/Sidebar';
import Dashboard from './sections/dashboard';
import { Route, Routes } from 'react-router-dom';
import Team from './sections/team';
import Contacts from './sections/contacts';
import Invoices from './sections/invoices';
import Form from './sections/form';
import Calendar from './sections/calendar';
import Faq from './sections/faq';
import Bar from './sections/bar';
import Pie from './sections/pie';
import Line from './sections/line';
import Geography from './sections/geography';


function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts'   element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/faq' element={<Faq />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>

    </ColorModeContext.Provider>
  )
}

export default App
