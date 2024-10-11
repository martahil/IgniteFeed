import { Header } from "./components/header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    // it's needed to have a div around the numerous <Post />, because they the same 'clones'.
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Marta Hil"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illo ullam nemo beatae aliquid quas consectetur debitis et veritatis quam unde, perspiciatis itaque quasi iure, error deleniti quos odit magnam."
          />  
          <Post 
            author="Another Person"
            content="An interesting post."
          />  
        </main>
      </div>
    </div>  
  )
}

// export default App
