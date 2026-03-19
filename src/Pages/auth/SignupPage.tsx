import { useNavigate } from "react-router-dom";
import BackCircleBtn from "../../components/btn/BackBtn";
import DefaultBtn from "../../components/btn/defaultBtn";
import DefaultInput from "../../components/input/DefaultInput";

const SignupPage = () => {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-[#fbfffd] to-[#eef9f5]">
            <section className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-6 pt-8 pb-12">
                <header className="pt-1">
                    <BackCircleBtn onClick={() => navigate("/login")} />

                    <div className="mt-10 text-center">
                    <h1 className="text-[30px] font-bold tracking-[-0.08em] text-[#1DB983]">
                        회원가입
                    </h1>
                    <p className="mt-3 text-[15px] tracking-[-0.04em] text-[#8f8f8f]">
                        개인정보를 입력해주세요.
                    </p>
                    </div>
                </header>

                <form className="mt-20 flex flex-1 flex-col">
                    <div>
                        <DefaultInput
                            id="signup-id"
                            type="text"
                            label="아이디"
                            placeholder="이메일을 입력해주세요."
                        />
                    </div>

                    <div className="mt-8">
                        <DefaultInput
                            id="signup-nickname"
                            type="text"
                            label="닉네임"
                            placeholder="닉네임을 입력해주세요."
                        />
                    </div>

                    <div className="mt-8">
                        <DefaultInput
                            id="signup-password"
                            type="password"
                            label="비밀번호"
                            placeholder="비밀번호를 입력해주세요."
                        />
                    </div>

                    <div className="mt-8">
                        <DefaultInput
                            id="signup-password-confirm"
                            type="password"
                            label="비밀번호 확인"
                            placeholder="비밀번호 재입력해주세요."
                        />
                    </div>

                    <DefaultBtn
                        text="다음"
                        onClick={() => navigate("/signup/interests")}
                        className="mt-12"
                    />
                </form>
            </section>
        </main>
    );
};

export default SignupPage;
