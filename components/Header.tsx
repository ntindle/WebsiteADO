import NavBar from "./NavBar"
import Image from 'next/image'
import SocialLink from "./SocialLink"


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
    <SocialLink icon="/public/vercel.svg" destination="instagram.com/ado_unt" altText="Follow us on instagram"/>
    <SocialLink icon="/public/vercel.svg" destination="discord.gg/ado" altText="Join us on discord"/>
    {/* <NavBar/> */}
  </header>
)

export default Header