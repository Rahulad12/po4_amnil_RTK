import { Provider } from 'react-redux'
import { store } from './store'
import MainRoutes from './routes/MainRoutes'
function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  )
}

export default App
