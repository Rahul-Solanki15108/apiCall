import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListingTable from './components/ListingTable';
import CreatePost from '../src/components/Posts/CreatePost'
import { Outlet, Route, Routes } from 'react-router-dom';
import ManagePost from 'components/Posts/ManagePost';
import ListingusersTable from 'components/Users/ListingusersTable';
function App() {

  return (

    <div className="App" style={{ background: "linear-gradient(#fbc2eb 0%, #a6c1ee 100%)" }}>
      <Typography sx={{ mt: 2 }} variant="h5" component="h4">
        React Redux API calls with "THUNK"
      </Typography>

      <Container maxWidth="xl">
        <Outlet />
        <Routes>
          <Route exact path="/" element={<ListingTable />} />
          <Route exact path="/create-post" element={<CreatePost />} />
          <Route exact path="/edit-post/:postId" element={<ManagePost />} />
          <Route exact path="/users" element={<ListingusersTable/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
