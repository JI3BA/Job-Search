import { MantineProvider } from "@mantine/styles";
import { store } from "./data";
import { Provider } from "react-redux";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import { Navigate, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route path='/main' element={<Main />}/>
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<Navigate to="/main" replace />} />
        </Routes>
      </MantineProvider>
    </Provider>
  );
}

export default App;
