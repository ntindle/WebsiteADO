
import styles from "../styles/Home.module.css";
import SocialLink from "./SocialLink"
import DiscordLogo from '../public/Discord-Logo-Color.png'
import InstagramLogo from '../public/Instagram_Glyph_Gradient_RGB.png'

const Header = () => (
  <header className={styles.header}>
    {/* <Image
        src="http://jquery-az.com/html/images/banana.jpg"
        alt="Landscape picture"
        width={500}
        height={500}
      /> */}
    <h4>
      Discovery Park F285
    </h4>
    <div className={styles.push}>
      <SocialLink icon={InstagramLogo} destination="https://instagram.com/ado_unt" altText="Follow us on instagram" />
      <SocialLink icon={DiscordLogo} destination="https://discord.gg/eg3KqNsXEc" altText="Join us on discord" />
    </div>
    {/* <NavBar/> */}
  </header>
)

export default Header