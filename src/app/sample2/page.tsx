"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sample2() {
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
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-25 to-orange-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-md border-b border-amber-100/50 shadow-sm">
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
                <h1 className="text-xl font-bold text-amber-900">
                  ROASTING BOX
                </h1>
                <p className="text-xs text-amber-700">Coffee Company</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
              >
                회사소개
              </a>
              <a
                href="#services"
                className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
              >
                서비스
              </a>
              <a
                href="#contact"
                className="text-amber-700 hover:text-amber-900 font-medium transition-colors"
              >
                연락처
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="w-full h-screen absolute inset-0">
          <Image
            src="/hero2.png"
            alt="RoastingBox Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Light Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[0.5px]"></div>
        </div>

        {/* Hero Content - Side Layout */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
              <div className="space-y-8">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-cream-200/80">
                  <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-4">
                    ROASTING BOX
                  </h1>
                  <h2 className="text-xl md:text-2xl font-light text-amber-700 mb-6">
                    Artisanal Coffee Experience
                  </h2>
                  <p className="text-base text-amber-600 mb-6 leading-relaxed">
                    경기도 양주에서 시작된 프리미엄 커피 로스터리. 매일 신선하게
                    로스팅되는 최상급 원두로 특별한 커피 경험을 선사합니다.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#about"
                      className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      더 알아보기
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white/80 hover:bg-white text-amber-700 hover:text-amber-800 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-md border border-amber-200"
                    >
                      문의하기
                    </a>
                  </div>
                </div>

                {/* Online Channel Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="http://blog.naver.com/roastingbox_coffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-6 py-3 bg-white/90 hover:bg-white backdrop-blur-md rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-cream-200/50 text-amber-700 hover:text-amber-800 shadow-lg"
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
                    className="group inline-flex items-center px-6 py-3 bg-white/90 hover:bg-white backdrop-blur-md rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-cream-200/50 text-amber-700 hover:text-amber-800 shadow-lg"
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

              {/* Right side - Statistics or Features */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-cream-200/50 text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-2">
                      10+
                    </div>
                    <div className="text-amber-700">Years Experience</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-cream-200/50 text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-2">
                      100+
                    </div>
                    <div className="text-amber-700">Happy Customers</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-cream-200/50 text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-2">
                      24/7
                    </div>
                    <div className="text-amber-700">Fresh Roasting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Image Left Layout */}
      <section
        id="about"
        data-animate
        className={`py-20 bg-gradient-to-br from-cream-25 to-amber-50 ${getSectionClass(
          "about"
        )}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-amber-100/70 backdrop-blur-sm rounded-full mb-6 border border-amber-200/50">
              <span className="text-amber-800 text-sm font-semibold tracking-wider">
                ABOUT US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              회사소개
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image First - Left Side */}
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-lg border border-cream-200/50">
                <Image
                  src="/roasting.png"
                  alt="Coffee Roasting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-800/50 to-transparent"></div>
              </div>
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-cream-200/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-800">
                    Premium
                  </div>
                  <div className="text-sm text-amber-600">Quality</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-cream-200/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-800">Fresh</div>
                  <div className="text-sm text-amber-600">Daily</div>
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-amber-900 mb-6">
                  로스팅박스와 함께하는 커피 여행
                </h3>
                <p className="text-lg text-amber-800 leading-relaxed mb-6">
                  경기도 양주에 위치한 커피원두 전문 로스팅박스입니다.
                  카페사장님, 개인 고객 분들께 항상 신선하고 깊은맛의 커피
                  원두를 공급하고자 노력합니다.
                </p>
                <p className="text-lg text-amber-800 leading-relaxed mb-8">
                  커피원두납품, 도소매, 카페창업교육, 커피체험 등 커피에 관련된
                  모든것을 다루며, 고객 여러분의 성공적인 커피 비즈니스와 풍부한
                  커피 라이프를 지원합니다.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-cream-200/50">
                  <div className="w-10 h-10 bg-amber-100/80 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">
                      프리미엄 품질
                    </h4>
                    <p className="text-amber-700 text-sm">
                      엄선된 최상급 원두만을 사용
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-cream-200/50">
                  <div className="w-10 h-10 bg-amber-100/80 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🌟</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">장인정신</h4>
                    <p className="text-amber-700 text-sm">
                      10년 이상의 로스팅 경험과 전문 지식
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-cream-200/50">
                  <div className="w-10 h-10 bg-amber-100/80 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">신속배송</h4>
                    <p className="text-amber-700 text-sm">
                      로스팅 후 24시간 내 신선 배송
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2x2 Grid Layout */}
      <section
        id="services"
        data-animate
        className={`py-20 bg-white/70 backdrop-blur-sm ${getSectionClass(
          "services"
        )}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-amber-100/70 backdrop-blur-sm rounded-full mb-6 border border-amber-200/50">
              <span className="text-amber-800 text-sm font-semibold tracking-wider">
                SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              서비스
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              다양한 커피 서비스로 고객님의 성공을 지원합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-cream-25 to-amber-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-cream-200/50 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md flex-shrink-0">
                  <span className="text-3xl text-white">🚚</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    커피원두 납품
                  </h3>
                  <p className="text-amber-700 leading-relaxed mb-4">
                    카페 및 업장 전문 공급으로 안정적이고 신선한 원두를
                    공급합니다. 대량 주문 시 특별 할인 혜택을 제공합니다.
                  </p>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li>• B2B 전용 특가 제공</li>
                    <li>• 정기 배송 서비스</li>
                    <li>• 맞춤 블렌딩 가능</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-cream-25 to-amber-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-cream-200/50 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md flex-shrink-0">
                  <span className="text-3xl text-white">🛒</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    도소매 판매
                  </h3>
                  <p className="text-amber-700 leading-relaxed mb-4">
                    개인 고객을 위한 맞춤형 서비스로 다양한 원두를 제공합니다.
                    소량 주문도 언제든 환영합니다.
                  </p>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li>• 온라인 주문 시스템</li>
                    <li>• 다양한 원두 선택</li>
                    <li>• 무료 배송 서비스</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-cream-25 to-amber-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-cream-200/50 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md flex-shrink-0">
                  <span className="text-3xl text-white">🎓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    카페창업교육
                  </h3>
                  <p className="text-amber-700 leading-relaxed mb-4">
                    전문 컨설팅과 교육으로 성공적인 카페 창업을 지원합니다. 실무
                    중심의 체계적인 교육 프로그램을 제공합니다.
                  </p>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li>• 1:1 맞춤 컨설팅</li>
                    <li>• 실무 교육 과정</li>
                    <li>• 창업 후 A/S 지원</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-cream-25 to-amber-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-cream-200/50 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md flex-shrink-0">
                  <span className="text-3xl text-white">🔥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    커피 체험
                  </h3>
                  <p className="text-amber-700 leading-relaxed mb-4">
                    로스팅 체험 프로그램으로 커피의 깊은 세계를 경험해보세요.
                    가족, 연인, 친구들과 함께 특별한 시간을 만들어보세요.
                  </p>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li>• 로스팅 체험 클래스</li>
                    <li>• 바리스타 기초 교육</li>
                    <li>• 단체 체험 프로그램</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Single Column Layout */}
      <section
        id="contact"
        data-animate
        className={`py-20 bg-gradient-to-br from-amber-600 via-amber-500 to-orange-500 text-white ${getSectionClass(
          "contact"
        )}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <span className="text-cream-50 text-sm font-semibold tracking-wider">
                CONTACT
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">연락처</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cream-200 to-white mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-cream-100 mb-12">
              커피에 관한 모든 것, 언제든 문의해주세요
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-cream-200">📍</span>
              </div>
              <h3 className="text-xl font-bold text-cream-50 mb-4">위치</h3>
              <p className="text-cream-100 text-lg">경기도 양주시</p>
              <p className="text-cream-200 text-sm mt-2">
                프리미엄 커피 로스터리
              </p>
            </div>
            <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-cream-200">☕</span>
              </div>
              <h3 className="text-xl font-bold text-cream-50 mb-4">전문분야</h3>
              <p className="text-cream-100">커피원두 납품, 도소매</p>
              <p className="text-cream-100">창업교육, 커피체험</p>
            </div>
          </div>

          {/* Online Channels */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-cream-50 mb-8">
              온라인 채널
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="http://blog.naver.com/roastingbox_coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-white/30 text-cream-50 hover:text-white"
              >
                <span className="text-lg">네이버 블로그</span>
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
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
                className="group inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-white/30 text-cream-50 hover:text-white"
              >
                <span className="text-lg">스마트스토어</span>
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
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

          {/* Services Inquiry */}
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">☕</div>
              <h3 className="text-2xl font-bold text-cream-50 mb-4">
                서비스 문의
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="text-2xl mb-2">🚚</div>
                <span className="text-cream-50 font-medium">납품 문의</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="text-2xl mb-2">🎓</div>
                <span className="text-cream-50 font-medium">창업 상담</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="text-2xl mb-2">🔥</div>
                <span className="text-cream-50 font-medium">체험 프로그램</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-12">
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
                <h3 className="text-xl font-bold text-cream-50">
                  ROASTING BOX
                </h3>
                <p className="text-sm text-cream-200">Coffee Company</p>
              </div>
            </Link>
            <p className="text-cream-100 mb-8 max-w-2xl mx-auto">
              경기도 양주에서 시작된 커피 전문 로스터리입니다. 항상 신선하고
              깊은 맛의 커피를 선사하겠습니다.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="http://blog.naver.com/roastingbox_coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200 hover:text-cream-50 transition-colors"
              >
                네이버 블로그
              </a>
              <a
                href="https://m.smartstore.naver.com/theroastingbox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200 hover:text-cream-50 transition-colors"
              >
                스마트스토어
              </a>
            </div>
            <div className="border-t border-amber-700 pt-8">
              <p className="text-amber-200 text-sm">
                © 2024 ROASTING BOX. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
