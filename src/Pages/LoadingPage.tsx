import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const LoadingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            navigate("/login");
        }, 2000);

        return () => window.clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#fbfffd] to-[#eef9f5]">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56vh] bg-[radial-gradient(circle_at_center,rgba(156,241,221,0.32)_0%,rgba(156,241,221,0)_68%)]" />

            <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[430px] flex-col items-center justify-center px-6 pb-28">
                <div className="flex flex-col items-center">
                        <img
                            src={logo}
                            alt="YGJG 로고"
                            className="h-[180px] w-[180px] object-contain drop-shadow-[0_0_42px_rgba(64,220,179,0.18)]"
                        />

                    <div className="mt-5 text-center tracking-[-0.04em] text-[#8c8c8c]">
                        <p className="text-[22px] leading-none font-bold">
                            나만의 장소와 추억을
                        </p>
                        <p className="mt-2 text-[20px] leading-none font-light">
                            공유해요
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LoadingPage;
