import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Result () {
  return (
    <main className={styles.main}>
      <Link href='/'>Back</Link>
    </main>
  )
}