import {IconsGithub, IconsInstagram, IconsLinkedin, IconsTwitter} from "./Icons";

export default function Footer() {
    return (
      <footer className="bg-transparent py-24 container mx-auto">
        <div className="flex justify-between">
          <a
            href="mailto:shadeersadikeen@gmail.com"
            className="text-gray-600 hover:text-black mr-6"
          >
            shadeersadikeen@gmail.com
          </a>
          <div className="flex gap-4">
              <a href="https://www.instagram.com/sl_programmer/" target="_blank">
                  <IconsInstagram />
              </a>
              <a href="https://twitter.com/Shadeer59492705" target="_blank">

                  <IconsTwitter />
              </a>
              <a href="https://github.com/shadee22" target="_blank">
                  <IconsGithub />
              </a>
              <a href="https://www.linkedin.com/in/shadeer-/" target="_blank">
                  <IconsLinkedin />
              </a>
          </div>
        </div>
      </footer>
    );
  }
  