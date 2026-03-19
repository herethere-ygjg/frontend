import { useState } from "react";

const AddFolderForm = ({onClose} : {onClose: ()=> void}) => {
    const [input , setInput] = useState<string>("");

    const submit = (e : any) =>{
        e.preventDefault();
        //TODO : 추후 폴더 생성 로직으로 수정 예정
        console.log("새 폴더명 :::"+input)
        onClose();
    }


    return (
        <form onSubmit={submit}>
            <div className="flex items-center justify-between">
                {/* cancle */}
                <button className="text-[0.8rem] text-[#6C6C6C]" onClick={onClose}>취소</button>
                <h1 className="text-[1.1rem] font-bold">새폴더</h1>
                {/* submit */}
                <button type="submit" className={`text-[0.8rem] ${input.length == 0 ? 'text-[#6C6C6C]': 'text-[#10B981]'}`}>다음</button>
            </div>

            <input
                className="my-5 w-full py-3 border-b border-[#E2E2E2] outline-none placeholder:text-[#B4B4B4] focus:border-gray-500 transition text-[0.9rem] text-[#1C1C1C]"
                type="text" 
                placeholder="새로 생성 할 폴더이름을 입력해주세요" 
                value={input}
                onChange={(e)=>{setInput(e.target.value)}}
            
            />
        </form>
    )
}

export default AddFolderForm;