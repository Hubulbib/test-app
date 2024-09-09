import ReactDOM from 'react-dom/client'
import { App } from './app/app.tsx'
import { CatsStore, UserStore, Context } from './entities'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{ catsStore: new CatsStore(), userStore: new UserStore() }}>
    <App />
  </Context.Provider>,
)
