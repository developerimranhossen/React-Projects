import { useReducer, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/cartReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <div className={`${darkMode ? "dark" : ""}`}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <MovieContext.Provider value={{ state, dispatch }}>
            <Header />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <MovieList />
              </div>
            </main>
            <Footer />
            <ToastContainer />
          </MovieContext.Provider>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
