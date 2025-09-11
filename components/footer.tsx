import Link from "next/link";
import {
  Mountain,
  Zap,
  TextIcon as Telegram,
  Twitter,
  Github,
  Instagram,
  LinkedinIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-prim border-t border-txt-sec/20 py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="ZK Latitud Cero"
              width={32}
              height={32}
            />
            <span className="text-bg-light font-space-grotesk font-bold">
              ZK Latitud Cero
            </span>
          </Link>
          <p className="text-txt-sec text-sm">
            Building the next generation of ZK Contributors from the center of
            the world.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <h3 className="text-bg-light font-space-grotesk font-semibold text-base">
            Navigation
          </h3>
          <Link
            href="/program"
            className="text-txt-sec hover:text-accent-prim transition-colors text-sm"
          >
            Program
          </Link>
          <Link
            href="/mentors"
            className="text-txt-sec hover:text-accent-prim transition-colors text-sm"
          >
            Mentors
          </Link>
          <Link
            href="/resources"
            className="text-txt-sec hover:text-accent-prim transition-colors text-sm"
          >
            Resources
          </Link>
          <Link
            href="/faq"
            className="text-txt-sec hover:text-accent-prim transition-colors text-sm"
          >
            FAQ
          </Link>
          <Link
            href="/about"
            className="text-txt-sec hover:text-accent-prim transition-colors text-sm"
          >
            About
          </Link>
        </div>

        <div className="flex flex-col space-y-3">
          <h3 className="text-bg-light font-space-grotesk font-semibold text-base">
            Legal
          </h3>
          <Link
            href="/privacy"
            className="text-txt-sec hover:text-accent-prim transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-txt-sec hover:text-accent-prim transition-colors text-sm"
          >
            Terms of Service
          </Link>
          <Link
            href="/code-of-conduct"
            className="text-txt-sec hover:text-accent-prim transition-colors text-sm"
          >
            Code of Conduct
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-bg-light font-space-grotesk font-semibold text-base">
            Connect
          </h3>

          <div className="flex flex-col space-y-3">
            <a
              href="https://t.me/+AByruislbIQzODJh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-txt-sec hover:text-accent-prim transition-colors text-sm"
            >
              <Telegram className="h-4 w-4" />
              <span>Telegram</span>
            </a>

            <a
              href="https://x.com/zkcero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-txt-sec hover:text-accent-prim transition-colors text-sm"
            >
              <Twitter className="h-4 w-4" />
              <span>Twitter</span>
            </a>

            <a
              href="https://github.com/eth-ecuador"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-txt-sec hover:text-accent-prim transition-colors text-sm"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/zkcero/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-txt-sec hover:text-accent-prim transition-colors text-sm"
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.instagram.com/aaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-txt-sec hover:text-accent-prim transition-colors text-sm"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-txt-sec/10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-txt-sec text-xs">
            © {new Date().getFullYear()} ZK Latitud Cero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
