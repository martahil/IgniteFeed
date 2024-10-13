import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/74906513?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marta Hil</strong>
              <time title='May 11 at 08:13' dateTime='2022-05-11 08:13:30'>About 1 hour ago</time>
            </div>

            <button title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>Incredible, congrats!! 👋👋</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}