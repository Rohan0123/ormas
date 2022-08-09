import React from 'react'
import styles from "../styles/Home.module.css"

const map = () => {
  return (
    <div className={styles.page_title}><h2 className={styles.page_title}>Map</h2>
    <iframe className='mt-20 ' src="https://www.google.com/search?q=koraput+district+map&rlz=1C1ONGR_enIN1016IN1016&sxsrf=ALiCzsa0yIJOZHYmSnptb3K5-530Yy6JZg%3A1660067226124&ei=mp3yYvGcB5aKseMPseO30AI&oq=koraput+distmap&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCCMQsAIQJzIECAAQDTIECAAQDTIGCAAQHhAHMggIABAeEAcQBTIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgMyBQgAEIYDOgcIABBHELADOgcIABCwAxBDOgYIABAeEA06CAgAEB4QDRAFOggIABAeEAgQDUoECEEYAEoECEYYAFC9CljREmDwIGgBcAF4AIABiAKIAY8HkgEDMi00mAEAoAEByAEKwAEB&sclient=gws-wiz#" width="1200" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default map