"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { TypeAnimation } from "react-type-animation";

export default function Custom404() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    
      <>
        <Head>
          <title>404 - Page Not Found</title>
          <meta
            name="description"
            content="Oops! The page you're looking for doesn't exist."
          />
        </Head>

        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
          </div>

          {/* Floating shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 border-4 border-blue-300 dark:border-blue-700 rounded-lg rotate-12 opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-4 border-purple-300 dark:border-purple-700 rounded-full opacity-30 animate-float animation-delay-1000"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-indigo-300 dark:bg-indigo-700 rounded-lg rotate-45 opacity-30 animate-float animation-delay-2000"></div>

          <div className="max-w-4xl w-full relative z-10">
            <div className="text-center">
              {/* Main illustration */}
              <div className="mb-8 relative">
                <div className="relative inline-block">
                  {/* Animated 404 text */}
                  <div className="text-[180px] md:text-[220px] font-bold leading-none select-none">
                    <span className="inline-block animate-bounce animation-delay-100 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                      4
                    </span>
                    <span className="inline-block animate-bounce animation-delay-300 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                      0
                    </span>
                    <span className="inline-block animate-bounce animation-delay-500 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                      4
                    </span>
                  </div>

                  {/* Decorative circle */}
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 border-4 border-blue-200 dark:border-gray-700 rounded-full opacity-50"></div>
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 border-4 border-indigo-200 dark:border-gray-700 rounded-full opacity-30 animate-spin-slow"></div>
                </div>
              </div>

              {/* Animated typing message */}
              <div className="mb-6 min-h-[60px]">
                <TypeAnimation
                  sequence={[
                    "Lost in cyberspace?",
                    2000,
                    "Page not found!",
                    2000,
                    "404 Error!",
                    2000,
                    "Let's get you back home!",
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  repeat={Infinity}
                  className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
                The page you are looking for has been moved, deleted, or maybe
                never existed in this dimension.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/">
                  <span className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                    <svg
                      className="w-5 h-5 mr-2 group-hover:animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Back to Home
                  </span>
                </Link>

                <button
                  onClick={() => window.history.back()}
                  className="group inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2 group-hover:rotate-[-10deg] transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Go Back
                </button>
              </div>

              {/* Helpful links */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Maybe you were looking for:
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/about">
                    <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-2 cursor-pointer transition-colors duration-200">
                      About Us
                    </span>
                  </Link>
                  <Link href="/contact">
                    <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-2 cursor-pointer transition-colors duration-200">
                      Contact
                    </span>
                  </Link>
                  <Link href="/blog">
                    <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-2 cursor-pointer transition-colors duration-200">
                      Blog
                    </span>
                  </Link>
                  <Link href="/faq">
                    <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-2 cursor-pointer transition-colors duration-200">
                      FAQ
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(12deg);
            }
            50% {
              transform: translateY(-20px) rotate(12deg);
            }
          }

          @keyframes spin-slow {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }

          .animation-delay-100 {
            animation-delay: 100ms;
          }

          .animation-delay-300 {
            animation-delay: 300ms;
          }

          .animation-delay-500 {
            animation-delay: 500ms;
          }

          .animation-delay-1000 {
            animation-delay: 1000ms;
          }

          .animation-delay-2000 {
            animation-delay: 2000ms;
          }

          .animation-delay-4000 {
            animation-delay: 4000ms;
          }
        `}</style>
      </>
  
  );
}
