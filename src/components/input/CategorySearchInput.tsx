import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  type KeyboardEvent,
} from "react";
import { Search, X } from "lucide-react";

interface CategorySearchInputProps {
  categories: string[];
  placeholder?: string;
  onSelect?: (category: string) => void;
  onAdd?: (category: string) => void;
  isSearch? : boolean;
}

const CategorySearchInput: React.FC<CategorySearchInputProps> = ({
  categories,
  placeholder = "해당 장소의 카테고리를 지정해주세요",
  onSelect,
  onAdd,
  isSearch = true,
}) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 검색 필터링
  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return categories;

    return categories.filter((c) => c.toLowerCase().includes(q));
  }, [query, categories]);

  const showDropdown = focused;
  const noResult = query.trim() !== "" && filteredCategories.length === 0;

  // 초기화
  const clearInput = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  // 카테고리 선택
  const selectCategory = (category: string) => {
    setQuery(category);
    setFocused(false);
    onSelect?.(category);
  };

  // 카테고리 추가
  const addCategory = () => {
    const value = query.trim();
    if (!value) return;

    onAdd?.(value);
    setFocused(false);
  };


  // 키보드 이벤트
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setFocused(false);
      inputRef.current?.blur();
    }
  };

  // 외부 클릭시 포커스 제거
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setFocused(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-[480px]">
      {/* Search Box */}
      <div
        className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all
        ${
          focused
            ? "border bg-white"
            : "border-gray-200 bg-white"
        }`}
      >
        {isSearch && <Search size={16} className="shrink-0 text-gray-300" />}

        <input
          ref={inputRef}
          value={query}
          type="text"
          placeholder={placeholder}
          readOnly={!isSearch}
          onChange={(e) => isSearch && setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-[#878787]"
        />

        {query && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={clearInput}
            className="flex items-center justify-center p-0.5 rounded-full text-gray-300"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="mt-2 rounded-xl border border-gray-100 bg-white overflow-hidden">
          {noResult ? (
            <div className="px-4 pt-7 pb-5 text-center">
              <p className="text-sm text-gray-400 mb-3">
                해당 카테고리는 존재하지 않습니다.
              </p>
              <p className="text-[13px] text-gray-300 mb-2">
                해당 카테고리를 추가하시겠습니까?
              </p>

              <button
                onClick={addCategory}
                className="text-sm font-semibold text-teal-500 px-2 py-1 rounded-md"
              >
                추가하기
              </button>
            </div>
          ) : (
            filteredCategories.map((cat, i) => (
              <div
                key={cat}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => selectCategory(cat)}
                className={`px-4 py-3 text-sm text-gray-600 cursor-pointer
                ${
                  i < filteredCategories.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                {cat}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CategorySearchInput;