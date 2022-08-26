import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRoutes from "./routes/allRoutes";
import GlobalStyle from "./styles/global";
function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <AllRoutes />
    </>
  );
}

export default App;
