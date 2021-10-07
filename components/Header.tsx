import NavBar from "./NavBar"
import Image from 'next/image'
import SocialLink from "./SocialLink"
import DiscordLogo from '../public/Discord-Logo-Color.png'
import InstagramLogo from '../public/Instagram_Glyph_Gradient_RGB.png'

const Header = () => (
  <header>
    {/* <Image
        src="http://jquery-az.com/html/images/banana.jpg"
        alt="Landscape picture"
        width={500}
        height={500}
      /> */}
    <h4>
      Discovery Park F285
    </h4>
    <SocialLink icon={InstagramLogo} destination="instagram.com/ado_unt" altText="Follow us on instagram"/>
    <SocialLink icon={DiscordLogo} destination="discord.gg/ado" altText="Join us on discord"/>
    {/* <NavBar/> */}
  </header>
)

export default Header