import logo from './logo.svg';
import { Grid, Box } from "@material-ui/core";
import Header from "./components/header/index.js"
import FileUpload from './components/fileupload';
import VideoFileUpload from './components/videofileupload'
import Divider from '@material-ui/core/Divider';

function App() {
  return (
    <div className="App">
      <Grid style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        width: "101%",
        marginTop: "-8px",
        marginLeft: "-6px",
        fontFamily: 'Roboto'
      }}>
        <Header >
        </Header>
        <FileUpload>
        </FileUpload>
        <VideoFileUpload>
        </VideoFileUpload>
      </Grid>
    </div>
  );
}

export default App;
