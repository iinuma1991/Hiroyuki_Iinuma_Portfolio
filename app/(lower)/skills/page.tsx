import Image from 'next/image'
import styles from './skills.module.scss'
import { skillsData } from '@/data/skills'

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <p className={styles.skillsText}>
        本業ではフロントエンドエンジニアとしてWeb制作に携わりながら、
        <br />
        フリーランスとして地元イベントや店舗、
        <span>アーティストのロゴ・グッズデザインも手がけています。</span>
        <br />
        デザインの意図を理解した上で、実装まで一貫して対応できることを強みとしています。
      </p>
      {skillsData.map((group) => (
        <div className={styles.skillsGroup} key={group.category}>
          <h3 className={styles.groupTitle}>{group.category}</h3>
          <ul className={styles.skillList}>
            {group.items.map((skill) => (
              <li className={styles.skillItem} key={skill.id}>
                <Image
                  className={styles.itemImage}
                  src={`/icon/skills/${skill.image}`}
                  alt={skill.title}
                  width={50}
                  height={50}
                />
                <div className={styles.itemTextBox}>
                  <p className={styles.itemTitle}>{skill.title}</p>
                  <p className={styles.itemText}>{skill.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
