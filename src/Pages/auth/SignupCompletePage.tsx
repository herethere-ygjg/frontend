import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DefaultBtn from "../../components/btn/defaultBtn";
import "./SignupCompletePage.css";

const SignupCompletePage = () => {
    const navigate = useNavigate();

    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#fbfffd] to-[#eef9f5]">
            <div className="pointer-events-none absolute inset-x-0 top-[26%] flex justify-center">
                <div className="completion-glow h-[220px] w-[220px] rounded-full bg-[#67e6bf]/35 blur-3xl" />
            </div>

            <section className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-6 pt-24 pb-12">
                <div className="flex flex-1 flex-col items-center justify-center">
                    <div className="completion-badge flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#1DB983] shadow-[0_24px_70px_rgba(29,185,131,0.28)]">
                        <Check className="completion-check h-[70px] w-[70px] stroke-[3] text-white" />
                    </div>

                    <h1 className="completion-title mt-20 text-center text-[31px] font-bold tracking-[-0.06em] text-[#1DB983]">
                        회원가입 완료!
                    </h1>

                    <p className="completion-copy mt-4 text-center text-[14px] font-medium leading-[1.45] tracking-[-0.04em] text-[#8b8b8b]">
                        oo님의 회원가입이 성공하였습니다.
                        <br />
                        로그인 페이지로 이동합니다.
                    </p>
                </div>

                <DefaultBtn
                    text="완료"
                    onClick={() => navigate("/login")}
                    className="mb-5"
                />
            </section>
        </main>
    );
};

export default SignupCompletePage;
