import appleIcon from "../../assets/apple.png";
import kakaoIcon from "../../assets/kakao.png";
import { useNavigate } from "react-router-dom";
import DefaultBtn from "../../components/btn/defaultBtn";
import DefaultInput from "../../components/input/DefaultInput";

const socialButtons = [
    {
        label: "Apple",
        buttonImageSrc: appleIcon,
        buttonImageAlt: "Apple 로그인 버튼",
    },
    {
        label: "Kakao",
        buttonImageSrc: kakaoIcon,
        buttonImageAlt: "카카오 로그인 버튼",
    },
];

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-[#fbfffd] to-[#eef9f5]">
            <section className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-6 pt-24 pb-12">
                <header className="pt-1 text-center">
                    <h1 className="text-[30px] font-bold tracking-[-0.08em] text-[#1DB983]">
                        로그인
                    </h1>
                </header>

                <form className="mt-15 flex flex-1 flex-col">
                    <div>
                        <DefaultInput
                            id="login-id"
                            type="text"
                            label="아이디"
                            placeholder="이메일을 입력해주세요."
                        />
                    </div>

                    <div className="mt-8">
                        <DefaultInput
                            id="login-password"
                            type="password"
                            label="비밀번호"
                            placeholder="비밀번호를 입력해주세요."
                        />
                    </div>

                    <DefaultBtn
                        text="로그인"
                        className="mt-17"
                    />

                    <button
                        type="button"
                        onClick={() => navigate("/signup")}
                        className="mt-5 self-end text-[14px] tracking-[-0.03em] text-[#a0a0a0]"
                    >
                        아직 회원이 아니신가요?
                    </button>

                    <div className="mt-10">
                        <div className="flex items-center gap-4 text-[#9c9c9c]">
                            <div className="h-px flex-1 bg-[#d5d5d5]" />
                            <span className="shrink-0 text-[14px] tracking-[-0.03em]">
                                소셜 로그인 옵션
                            </span>
                            <div className="h-px flex-1 bg-[#d5d5d5]" />
                        </div>

                        <div className="mt-5 flex flex-col gap-3">
                            {socialButtons.map((button) => (
                                <button
                                    key={button.label}
                                    type="button"
                                    aria-label={button.label}
                                    className="mx-auto block w-[92%] overflow-hidden rounded-full"
                                >
                                    <img
                                        src={button.buttonImageSrc}
                                        alt={button.buttonImageAlt}
                                        className="block h-auto w-full object-contain"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default LoginPage;
