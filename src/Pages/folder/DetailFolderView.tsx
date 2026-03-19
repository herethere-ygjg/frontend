import { useNavigate } from "react-router-dom";
import IconBtn from "../../components/btn/IconBtn";
import DefaultMain from "../../components/layout/DafultMain";

const DetailFolderView = () =>{
    const navigate = useNavigate();
    return (
        <DefaultMain title="폴더수정" isTitleCenter rightSlot={<IconBtn iconType="close" onClick={()=>{navigate(-1);}} />}>
            폴더 수정 페이지
        </DefaultMain>
    )
}

export default DetailFolderView;