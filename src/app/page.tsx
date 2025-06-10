import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-amber-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.svg"
                alt="Roasting Box Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="text-center">
                <h1 className="text-2xl font-bold text-amber-900">
                  ROASTING BOX
                </h1>
                <p className="text-sm text-amber-700">Design Selection</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            디자인을 선택해주세요
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            로스팅박스에 어울리는 두 가지 컨셉의 웹사이트 디자인을 준비했습니다.
            <br />
            원하시는 스타일을 선택하여 미리보기를 확인해보세요.
          </p>
        </div>

        {/* Design Options */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Sample 1 - Dark Premium */}
          <Link href="/sample1" className="group block">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200/50 overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl">
              {/* Preview Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Dark Premium Design Preview"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-900/70 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">SAMPLE 1</h3>
                    <p className="text-stone-300">Dark Premium</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-stone-900">
                    다크 프리미엄 테마
                  </h3>
                  <span className="px-3 py-1 bg-stone-900 text-white text-sm rounded-full">
                    PREMIUM
                  </span>
                </div>
                <p className="text-stone-700 mb-6 leading-relaxed">
                  고급스럽고 세련된 다크 컬러를 기반으로 한 프리미엄 커피 브랜드
                  이미지. 깊이 있는 커피의 풍미를 시각적으로 표현한 럭셔리
                  디자인입니다.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-stone-600">
                    <span className="w-3 h-3 bg-stone-900 rounded-full mr-3"></span>
                    다크 스톤 색상 팔레트
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <span className="w-3 h-3 bg-amber-600 rounded-full mr-3"></span>
                    앰버 포인트 컬러
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <span className="w-3 h-3 bg-gradient-to-r from-stone-900 to-amber-600 rounded-full mr-3"></span>
                    프리미엄 글래스모피즘 효과
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-stone-500 text-sm">
                    클릭하여 미리보기
                  </span>
                  <svg
                    className="w-5 h-5 text-stone-400 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Sample 2 - Light Artisanal */}
          <Link href="/sample2" className="group block">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200/50 overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl">
              {/* Preview Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/hero2.png"
                  alt="Light Artisanal Design Preview"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
                  <div className="text-center text-amber-900">
                    <h3 className="text-3xl font-bold mb-2">SAMPLE 2</h3>
                    <p className="text-amber-700">Light Artisanal</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-amber-900">
                    라이트 아티산 테마
                  </h3>
                  <span className="px-3 py-1 bg-amber-700 text-white text-sm rounded-full">
                    ARTISANAL
                  </span>
                </div>
                <p className="text-amber-800 mb-6 leading-relaxed">
                  밝고 따뜻한 느낌의 아티산 커피 브랜드 이미지. 친근하고 모던한
                  감성으로 고품질 수제 커피의 가치를 표현한 디자인입니다.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-amber-700">
                    <span className="w-3 h-3 bg-amber-100 rounded-full mr-3 border border-amber-300"></span>
                    라이트 앰버 색상 팔레트
                  </div>
                  <div className="flex items-center text-sm text-amber-700">
                    <span className="w-3 h-3 bg-amber-700 rounded-full mr-3"></span>
                    따뜻한 브라운 포인트
                  </div>
                  <div className="flex items-center text-sm text-amber-700">
                    <span className="w-3 h-3 bg-gradient-to-r from-amber-100 to-amber-700 rounded-full mr-3"></span>
                    모던 클린 인터페이스
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-amber-600 text-sm">
                    클릭하여 미리보기
                  </span>
                  <svg
                    className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200/50 p-8 mb-16">
          <h3 className="text-2xl font-bold text-amber-900 text-center mb-8">
            디자인 비교표
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-amber-200">
                  <th className="text-left py-4 px-6 text-amber-900 font-semibold">
                    특징
                  </th>
                  <th className="text-center py-4 px-6 text-stone-900 font-semibold">
                    Sample 1 (Dark)
                  </th>
                  <th className="text-center py-4 px-6 text-amber-900 font-semibold">
                    Sample 2 (Light)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                <tr>
                  <td className="py-4 px-6 font-medium text-amber-800">
                    컬러 테마
                  </td>
                  <td className="py-4 px-6 text-center text-stone-700">
                    다크 스톤 + 앰버
                  </td>
                  <td className="py-4 px-6 text-center text-amber-700">
                    라이트 앰버 + 크림
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-amber-800">
                    브랜드 이미지
                  </td>
                  <td className="py-4 px-6 text-center text-stone-700">
                    프리미엄 럭셔리
                  </td>
                  <td className="py-4 px-6 text-center text-amber-700">
                    아티산 모던
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-amber-800">
                    타겟 고객
                  </td>
                  <td className="py-4 px-6 text-center text-stone-700">
                    고급 카페, B2B
                  </td>
                  <td className="py-4 px-6 text-center text-amber-700">
                    개인 고객, B2C
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-amber-800">
                    분위기
                  </td>
                  <td className="py-4 px-6 text-center text-stone-700">
                    세련되고 고급스러움
                  </td>
                  <td className="py-4 px-6 text-center text-amber-700">
                    따뜻하고 친근함
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              원하시는 디자인을 선택하셨나요?
            </h3>
            <p className="text-amber-100 mb-6 text-lg">
              각 샘플을 클릭하여 전체 페이지를 미리보기 하실 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/sample1"
                className="inline-flex items-center px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sample 1 보기
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/sample2"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-amber-50 text-amber-800 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/50"
              >
                Sample 2 보기
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
