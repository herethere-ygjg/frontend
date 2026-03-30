import CreateFolderCard from "../components/home/CreateFolderCard";
import DefaultMain from "../components/layout/DafultMain";

const HomeView = () => {

    const users = [1, 2, 3, 4]

    const places = [1, 2, 3]

    return (
        <DefaultMain title="홈">
            <div className="p-5">
                <CreateFolderCard />

                <div className="bg-gray-100 rounded-xl p-4">

                    <div className="flex justify-between mb-3">
                        <span className="font-medium">추천 팔로우</span>
                        <span className="text-xs text-gray-500">&lt;1/5&gt;</span>
                    </div>

                    <div className="flex gap-3">
                        {users.map((_, i) => (
                            <div className="w-14 h-14 bg-gray-200 rounded-lg" key={i} />
                        ))}
                    </div>

                </div>

                <div>

                    <h2 className="font-semibold mb-3">
                        장소 추천 TOP 10
                    </h2>

                    <div className="space-y-3">
                        {places.map((_, i) => (
                            <div key={i} className="relative rounded-xl overflow-hidden">

                                <img
                                    src="/test.jpg"
                                    className="w-full h-40 object-cover"
                                />

                                <div className="absolute bottom-3 left-3 text-white">

                                    <p className="font-semibold">
                                        폴더명
                                    </p>

                                    <p className="text-xs opacity-80">
                                        폴더 간단 설명
                                    </p>

                                    <p className="text-xs opacity-70 mt-1">
                                        최근 업데이트 2025.05.10
                                    </p>

                                </div>

                            </div>
                        ))}
                    </div>

                </div>


            </div>
        </DefaultMain>
    )
}

export default HomeView;