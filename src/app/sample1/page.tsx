"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const getSectionClass = (sectionId: string) => {
    return visibleSections.has(sectionId)
      ? "opacity-100 translate-y-0 transition-all duration-1000 ease-out"
      : "opacity-0 translate-y-8 transition-all duration-1000 ease-out";
  };

  return (
    <div className="min-h-screen bg-stone-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src="/logo.svg"
                alt="Roasting Box Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <h1 className="text-xl font-bold text-amber-100">
                  ROASTING BOX
                </h1>
                <p className="text-xs text-amber-300">Coffee Company</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-amber-300 hover:text-amber-100 font-medium transition-colors"
              >
                회사소개
              </a>
              <a
                href="#services"
                className="text-amber-300 hover:text-amber-100 font-medium transition-colors"
              >
                서비스
              </a>
              <a
                href="#contact"
                className="text-amber-300 hover:text-amber-100 font-medium transition-colors"
              >
                연락처
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="w-full h-screen relative">
          <Image
            src="/hero.png"
            alt="RoastingBox Hero"
            fill
            className="object-cover"
            priority
          />

          {/* Online Channel Buttons Overlay */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="http://blog.naver.com/roastingbox_coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 bg-stone-900/80 hover:bg-stone-800/90 backdrop-blur-md rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-amber-600/30 text-amber-100 hover:text-amber-50 shadow-2xl"
              >
                <span>네이버 블로그</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
              <a
                href="https://m.smartstore.naver.com/theroastingbox"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 bg-stone-900/80 hover:bg-stone-800/90 backdrop-blur-md rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-amber-600/30 text-amber-100 hover:text-amber-50 shadow-2xl"
              >
                <span>스마트스토어</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-animate
        className={`py-20 bg-gradient-to-br from-stone-800 to-stone-900 ${getSectionClass(
          "about"
        )}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-900/30 backdrop-blur-sm rounded-full mb-6 border border-amber-700/50">
              <span className="text-amber-300 text-sm font-semibold">
                ABOUT US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-100 mb-6">
              회사소개
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
              커피에 대한 열정과 장인정신으로 최고 품질의 원두를 선사합니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-stone-100 mb-6">
                  로스팅박스와 함께하는 커피 여행
                </h3>
                <p className="text-lg text-stone-300 leading-relaxed mb-6">
                  경기도 양주에 위치한 커피원두 전문 로스팅박스입니다.
                  카페사장님, 개인 고객 분들께 항상 신선하고 깊은맛의 커피
                  원두를 공급하고자 노력합니다.
                </p>
                <p className="text-lg text-stone-300 leading-relaxed">
                  커피원두납품, 도소매, 카페창업교육, 커피체험 등 커피에 관련된
                  모든것을 다루며, 고객 여러분의 성공적인 커피 비즈니스와 풍부한
                  커피 라이프를 지원합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-stone-700/50 backdrop-blur-sm p-6 rounded-xl border border-amber-800/30 hover:bg-stone-700/70 transition-all">
                  <div className="w-12 h-12 bg-amber-900/50 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h4 className="text-lg font-semibold text-amber-100 mb-2">
                    전문성
                  </h4>
                  <p className="text-stone-300 text-sm">
                    10년 이상의 로스팅 경험과 전문 지식
                  </p>
                </div>
                <div className="bg-stone-700/50 backdrop-blur-sm p-6 rounded-xl border border-amber-800/30 hover:bg-stone-700/70 transition-all">
                  <div className="w-12 h-12 bg-amber-900/50 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h4 className="text-lg font-semibold text-amber-100 mb-2">
                    신선함
                  </h4>
                  <p className="text-stone-300 text-sm">
                    매일 신선하게 로스팅되는 프리미엄 원두
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 backdrop-blur-sm rounded-3xl border border-amber-800/30 shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Background Image */}
                <Image
                  src="/roasting.png"
                  alt="Coffee Roasting"
                  fill
                  className="object-cover rounded-3xl"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 to-stone-900/80 rounded-3xl"></div>

                <div className="relative text-center z-10">
                  <h3 className="text-2xl font-bold text-amber-200 mb-2">
                    Premium Quality
                  </h3>
                  <p className="text-amber-300">
                    매일 정성껏 로스팅하는 프리미엄 원두
                  </p>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 left-4 text-3xl text-amber-400/20 animate-pulse z-10">
                  🫘
                </div>
                <div className="absolute top-8 right-8 text-2xl text-amber-500/20 animate-pulse delay-500 z-10">
                  🫘
                </div>
                <div className="absolute bottom-8 left-8 text-4xl text-amber-400/20 animate-pulse delay-1000 z-10">
                  🫘
                </div>
                <div className="absolute bottom-4 right-4 text-3xl text-amber-500/20 animate-pulse delay-1500 z-10">
                  🫘
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        data-animate
        className={`py-20 bg-stone-800 ${getSectionClass("services")}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-900/30 backdrop-blur-sm rounded-full mb-6 border border-amber-700/50">
              <span className="text-amber-300 text-sm font-semibold">
                SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-100 mb-6">
              서비스
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-stone-700/50 to-stone-800/50 backdrop-blur-sm p-8 rounded-2xl hover:from-stone-600/50 hover:to-stone-700/50 transition-all duration-300 border border-amber-800/30 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl text-amber-100">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-stone-100 mb-4">
                커피원두 납품
              </h3>
              <p className="text-stone-300 leading-relaxed">
                카페 및 업장 전문 공급으로 안정적이고 신선한 원두를 공급합니다.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-stone-700/50 to-stone-800/50 backdrop-blur-sm p-8 rounded-2xl hover:from-stone-600/50 hover:to-stone-700/50 transition-all duration-300 border border-amber-800/30 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl text-amber-100">🛒</span>
              </div>
              <h3 className="text-xl font-bold text-stone-100 mb-4">
                도소매 판매
              </h3>
              <p className="text-stone-300 leading-relaxed">
                개인 고객을 위한 맞춤형 서비스로 다양한 원두를 제공합니다.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-stone-700/50 to-stone-800/50 backdrop-blur-sm p-8 rounded-2xl hover:from-stone-600/50 hover:to-stone-700/50 transition-all duration-300 border border-amber-800/30 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl text-amber-100">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-stone-100 mb-4">
                카페창업교육
              </h3>
              <p className="text-stone-300 leading-relaxed">
                전문 컨설팅과 교육으로 성공적인 카페 창업을 지원합니다.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-stone-700/50 to-stone-800/50 backdrop-blur-sm p-8 rounded-2xl hover:from-stone-600/50 hover:to-stone-700/50 transition-all duration-300 border border-amber-800/30 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl text-amber-100">🔥</span>
              </div>
              <h3 className="text-xl font-bold text-stone-100 mb-4">
                커피 체험
              </h3>
              <p className="text-stone-300 leading-relaxed">
                로스팅 체험 프로그램으로 커피의 깊은 세계를 경험해보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-animate
        className={`py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-800 text-white ${getSectionClass(
          "contact"
        )}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-stone-900/30 backdrop-blur-sm rounded-full mb-6 border border-stone-700/50">
              <span className="text-amber-100 text-sm font-semibold">
                CONTACT
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">연락처</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-orange-300 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-8">
                로스팅박스와 함께하세요
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-stone-900/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-300">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-100">위치</h4>
                    <p className="text-amber-200">경기도 양주시</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-stone-900/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-300">☕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-100">전문분야</h4>
                    <p className="text-amber-200">
                      커피원두 납품, 도소매, 창업교육, 커피체험
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold text-amber-100 mb-6">
                  온라인 채널
                </h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="http://blog.naver.com/roastingbox_coffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-6 py-3 bg-stone-800/80 hover:bg-stone-700/90 backdrop-blur-sm rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-amber-600/30 text-amber-100 hover:text-amber-50"
                  >
                    <span>네이버 블로그</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://m.smartstore.naver.com/theroastingbox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-6 py-3 bg-stone-800/80 hover:bg-stone-700/90 backdrop-blur-sm rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-amber-600/30 text-amber-100 hover:text-amber-50"
                  >
                    <span>스마트스토어</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-stone-900/30 backdrop-blur-sm rounded-3xl p-8 border border-stone-700/30">
                <div className="text-center">
                  <div className="text-6xl mb-6">☕</div>
                  <h3 className="text-2xl font-bold text-amber-100 mb-4">
                    문의하기
                  </h3>
                  <p className="text-amber-200 mb-8">
                    커피에 관한 모든 것, 언제든 문의해주세요
                  </p>
                  <div className="space-y-4">
                    <div className="bg-stone-900/40 backdrop-blur-sm rounded-lg p-4 border border-stone-700/30">
                      <span className="text-amber-100 font-medium">
                        커피원두 납품 문의
                      </span>
                    </div>
                    <div className="bg-stone-900/40 backdrop-blur-sm rounded-lg p-4 border border-stone-700/30">
                      <span className="text-amber-100 font-medium">
                        카페창업교육 상담
                      </span>
                    </div>
                    <div className="bg-stone-900/40 backdrop-blur-sm rounded-lg p-4 border border-stone-700/30">
                      <span className="text-amber-100 font-medium">
                        커피체험 프로그램
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center space-x-3 mb-6 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src="/logo.svg"
                alt="Roasting Box Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="text-left">
                <h3 className="text-xl font-bold text-amber-100">
                  ROASTING BOX
                </h3>
                <p className="text-sm text-amber-400">Coffee Company</p>
              </div>
            </Link>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              경기도 양주에서 시작된 커피 전문 로스터리입니다. 항상 신선하고
              깊은 맛의 커피를 선사하겠습니다.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="http://blog.naver.com/roastingbox_coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                네이버 블로그
              </a>
              <a
                href="https://m.smartstore.naver.com/theroastingbox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                스마트스토어
              </a>
            </div>
            <div className="border-t border-stone-800 pt-8">
              <p className="text-stone-500 text-sm">
                © 2024 ROASTING BOX. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
