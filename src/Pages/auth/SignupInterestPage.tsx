import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackCircleBtn from "../../components/btn/BackBtn";
import DefaultBtn from "../../components/btn/defaultBtn";

const interestSections = [
    {
        title: "카페 & 음식",
        items: ["카페 탐방", "디저트 맛집", "라멘 / 분식 / 한식", "양식 / 중식 / 일식", "바 / 펍"],
    },
    {
        title: "데이트 & 여가",
        items: ["테마 파크", "데이트 스팟", "영화관 / 공연장", "노래방", "게임 / 오락"],
    },
    {
        title: "힐링 & 자연",
        items: ["공원 / 산책", "등산 / 트래킹", "바다 / 호수", "전시회 / 미술관"],
    },
    {
        title: "라이프스타일",
        items: ["포토스팟 / 인생샷", "스터디 / 작업 공간", "쇼핑 / 플리마켓", "요가 / 운동"],
    },
    {
        title: "여행 & 탐방",
        items: ["국내여행", "해외여행", "숙소 / 펜션 / 호텔", "자전거 / 드라이브"],
    },
];

const SignupInterestPage = () => {
    const navigate = useNavigate();
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const handleToggleInterest = (interest: string) => {
        setSelectedInterests((prev) => {
            if (prev.includes(interest)) {
                return prev.filter((item) => item !== interest);
            }

            if (prev.length >= 5) {
                return prev;
            }

            return [...prev, interest];
        });
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-[#fbfffd] to-[#eef9f5]">
            <section className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-6 pt-8 pb-12">
                <header className="pt-1">
                    <BackCircleBtn onClick={() => navigate("/signup")} />

                    <div className="mt-10 text-center">
                        <h1 className="text-[30px] font-bold tracking-[-0.08em] text-[#1DB983]">
                            회원가입
                        </h1>
                        <p className="mt-3 text-[15px] tracking-[-0.04em] text-[#8f8f8f]">
                            당신의 관심사를 선택해 주세요.
                        </p>
                    </div>
                </header>

                <section className="mt-16 flex-1">
                    <p className="text-[14px] font-semibold tracking-[-0.03em] text-[#9d9d9d]">
                        최소 1개에서 최대 5개까지
                    </p>

                    <div className="mt-8 space-y-10">
                        {interestSections.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-[17px] font-bold tracking-[-0.04em] text-[#5d5d5d]">
                                    {section.title}
                                </h2>

                                <div className="mt-4 flex flex-wrap gap-3">
                                    {section.items.map((interest) => {
                                        const isSelected = selectedInterests.includes(interest);

                                        return (
                                            <button
                                                key={interest}
                                                type="button"
                                                onClick={() => handleToggleInterest(interest)}
                                                className={`rounded-full border px-5 py-[10px] text-[14px] font-medium tracking-[-0.03em] transition-colors ${
                                                    isSelected
                                                        ? "border-[#15996A] bg-[#15996A] text-white"
                                                        : "border-[#d5d5d5] bg-white text-[#6f6f6f]"
                                                }`}
                                            >
                                                {interest}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <DefaultBtn
                    text="가입하기"
                    onClick={() => navigate("/signup/complete")}
                    className="mt-12"
                />
            </section>
        </main>
    );
};

export default SignupInterestPage;
