import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function initIcons() {
  return library.add(
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube
  );
}
