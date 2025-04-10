import { Provider } from 'react-redux'
import { store } from './store'
import MainRoutes from './routes/MainRoutes'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
      <ToastContainer />
    </Provider>
  )
}

export default App
