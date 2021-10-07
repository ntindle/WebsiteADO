import Link from 'next/link'
import Image from 'next/image'

interface SocialLinkProps {
    icon: string;
    destination: string;
    altText: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({icon, destination, altText}) => {
    return (
      <div>
          <Link href={destination} passHref>
          <Image src={icon} alt={altText}/>
          </Link>
      </div>
    );
  };
  
  export default SocialLink;