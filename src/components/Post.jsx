import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/74906513?v=4" />
          <div className={styles.authorInfo}>
            <strong>Marta Hil</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='May 11 at 08:13' dateTime='2022-05-11 08:13:30'>Published 1 hour ago</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
          <p>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>{' '}
          </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea 
          placeholder='Leave your comment'
        />

        <footer>
          <button type='submit'>Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}