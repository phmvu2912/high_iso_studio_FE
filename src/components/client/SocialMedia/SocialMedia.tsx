import { Link } from "react-router-dom";
import { facebookIcon, instagramIcon, youtubeIcon } from "../../../constants/client"

const SocialMedia = () => {

    const icons = [facebookIcon, instagramIcon, youtubeIcon];

    console.log(icons)

    return (
        <div className="fixed top-1/3 right-0 mr-4 z-50">
            <div className="flex flex-col gap-y-2">
                {
                    icons.map(({ link, path, altText }, index) => (
                        <Link to={link} target="_blank" className="cursor-pointer" key={index}>
                            <img src={path} alt={altText} width={50} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default SocialMedia