import './App.css';
import File from './Pages/File';
import Recorder from './Pages/Recorder';
import VideoRecorder from './Pages/VideoRecorder';
import bot from "./Images/bot.mp4"
import Video from './Components/Video';

function App() {
  return (
    <>
    <div className='body'>
    <div className='App'>
    <File />
    <div className='flex'>
    <Video/>
    <Recorder />
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
