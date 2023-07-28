import './App.css';
import CustomTextInput from './components/CustomTextInput';
import AutoFocusTextInput from './components/AutoFocusTextInput';
import CustomTextInputFunction from './components/CustomTextInputFunction';
import CustomTextInputCallback from './components/CustomTextInputCallback';

function App() {
  return (
    <div>
      <CustomTextInput />
      <AutoFocusTextInput />
      <CustomTextInputFunction />
      <CustomTextInputCallback />
    </div>
  );
}

export default App;
