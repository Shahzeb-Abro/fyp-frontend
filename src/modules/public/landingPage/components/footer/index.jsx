import { LogoLink } from "../../../../../layout/dashboardLayout/components/sidebar/components";

export const Footer = () => {
  return (
    <footer className="w-full py-16 px-4 bg-neutral-950 text-white rounded-t-3xl">
      <div>
        <div className="flex items-center justify-between gap-4 max-w-[1110px] mx-auto">
          <span>
            <LogoLink />
          </span>
          <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="text-xs text-center mt-8">
          &copy; {new Date().getFullYear()} All rights reserved. Made with ♥ by
          Shahzeb Abro in Karachi, Pakistan
        </div>
      </div>
    </footer>
  );
};
