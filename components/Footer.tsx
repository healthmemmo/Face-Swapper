import { IconsGithub, IconsInstagram, IconsTwitter } from "./Icons";

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
            <IconsInstagram />
            <IconsTwitter />
            <IconsGithub />
          </div>
        </div>
      </footer>
    );
  }
  