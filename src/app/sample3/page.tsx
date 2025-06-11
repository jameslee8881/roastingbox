"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sample3() {
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
    <div className="min-h-screen bg-white">
      {/* Header - Minimal & Clean */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src="/logo.svg"
                alt="Roasting Box Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  ROASTING BOX
                </h1>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                디자인 선택
              </Link>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                갤러리
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                소개
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                연락처
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Image with Minimal Text */}
      <section className="relative h-screen">
        <div className="w-full h-full relative">
          <Image
            src="/hero2.png"
            alt="RoastingBox Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Minimal Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wider">
                ROASTING BOX
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90">
                Coffee Experience
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section
        id="gallery"
        data-animate
        className={`py-0 bg-white ${getSectionClass("gallery")}`}
      >
        {/* Large Feature Image */}
        <div className="w-full h-96 relative overflow-hidden">
          <Image
            src="/company2.jpg"
            alt="Coffee Roastery Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          <div className="absolute left-8 bottom-8 text-white">
            <h2 className="text-3xl font-light mb-2">Coffee Roastery</h2>
            <p className="text-lg opacity-90">경기도 양주 로스팅박스</p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          <div className="relative h-64 overflow-hidden group">
            <Image
              src="/roasting.png"
              alt="Roasting Process"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-light text-lg">로스팅 과정</span>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden group">
            <Image
              src="/coffee-cup.jpg"
              alt="Coffee Cup"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-light text-lg">
                완벽한 한 잔
              </span>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden group">
            <Image
              src="/coffee-beans.jpg"
              alt="Coffee Art"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-light text-lg">아트 커피</span>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden group">
            <Image
              src="/coffee.png"
              alt="Coffee Experience"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-light text-lg">커피 경험</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Image Focused */}
      <section
        id="about"
        data-animate
        className={`py-20 bg-gray-50 ${getSectionClass("about")}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/_roasting.png"
                  alt="Our Roasting Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-light mb-2">로스팅박스</h3>
                  <p className="text-lg opacity-90">
                    경기도 양주 프리미엄 로스터리
                  </p>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-light text-amber-600 mb-2">
                    10+
                  </div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-light text-amber-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-700">Happy Customers</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-light text-amber-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-700">Fresh Roasting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean Text Style */}
      <section
        id="services"
        data-animate
        className={`py-20 bg-white ${getSectionClass("services")}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Services</h2>
            <div className="w-24 h-px bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Service 1 - 납품 */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-amber-600 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                원두 납품
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                카페 및 업장 전문 공급으로 안정적이고 신선한 원두를 공급합니다.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• B2B 전용 특가</li>
                <li>• 정기 배송 서비스</li>
                <li>• 맞춤 블렌딩</li>
              </ul>
            </div>

            {/* Service 2 - 도소매 */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-amber-600 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">도소매</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                개인 고객을 위한 맞춤형 서비스로 다양한 원두를 제공합니다.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 온라인 주문 시스템</li>
                <li>• 다양한 원두 선택</li>
                <li>• 무료 배송 서비스</li>
              </ul>
            </div>

            {/* Service 3 - 교육 */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-amber-600 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                창업교육
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                전문 컨설팅과 교육으로 성공적인 카페 창업을 지원합니다.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 1:1 맞춤 컨설팅</li>
                <li>• 실무 교육 과정</li>
                <li>• 창업 후 A/S 지원</li>
              </ul>
            </div>

            {/* Service 4 - 체험 */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-amber-600 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                커피체험
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                로스팅 체험 프로그램으로 커피의 깊은 세계를 경험해보세요.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• 로스팅 체험 클래스</li>
                <li>• 바리스타 기초 교육</li>
                <li>• 단체 체험 프로그램</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal with Background Image */}
      <section
        id="contact"
        data-animate
        className={`relative h-[600px] flex items-center justify-center ${getSectionClass(
          "contact"
        )}`}
      >
        <div className="absolute inset-0">
          <Image
            src="/company1.jpg"
            alt="Contact Background"
            fill
            className="object-cover"
            style={{ objectPosition: "50% -250px" }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl font-light mb-8">Contact</h2>
          <div className="w-32 h-px bg-white mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-light mb-4">Address</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                경기도 양주시
                <br />
                원학로147번길 123-6
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Phone</h3>
              <p className="text-lg opacity-90">031-847-1238</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Business</h3>
              <p className="text-lg opacity-90">커피원두 전문 로스터리</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="http://blog.naver.com/roastingbox_coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full font-light text-lg transition-all duration-300 transform hover:scale-105 border border-white/40"
            >
              네이버 블로그
            </a>
            <a
              href="https://m.smartstore.naver.com/theroastingbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full font-light text-lg transition-all duration-300 transform hover:scale-105 border border-white/40"
            >
              스마트스토어
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src="/logo.svg"
                alt="Roasting Box Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-light text-gray-900">
                ROASTING BOX
              </span>
            </Link>
            <p className="text-gray-600 text-sm">
              © 2024 ROASTING BOX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
