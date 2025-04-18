"use client";

import { FC } from "react";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  bgImage?: string;
  className?: string;
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  breadcrumbs = [],
  align = "center",
  size = "md",
  bgImage,
  className = "",
}) => {
  // Determine padding based on size
  const sizePadding = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  // Determine text alignment
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  // Background styles
  const bgStyles = bgImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div
      className={`w-full ${
        bgImage ? "text-white" : ""
      } ${sizePadding[size]} ${className}`}
      style={bgStyles}
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl ${alignmentClasses[align]}`}>
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="mb-4">
              <ol className="flex flex-wrap items-center text-sm text-gray-500">
                <li className="flex items-center">
                  <Link href="/" className="hover:text-gray-700">
                    Home
                  </Link>
                  <span className="mx-2">/</span>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center">
                    {index === breadcrumbs.length - 1 ? (
                      <span className={bgImage ? "text-white" : "text-gray-900"}>
                        {crumb.label}
                      </span>
                    ) : (
                      <>
                        <Link href={crumb.href} className="hover:text-gray-700">
                          {crumb.label}
                        </Link>
                        <span className="mx-2">/</span>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Title */}
          <h1
            className={`font-bold tracking-tight ${
              size === "lg"
                ? "text-4xl md:text-6xl"
                : size === "md"
                ? "text-3xl md:text-5xl"
                : "text-2xl md:text-4xl"
            }`}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`mt-4 ${
                bgImage ? "text-gray-200" : "text-gray-500"
              } ${size === "sm" ? "text-base" : "text-lg"}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero; 