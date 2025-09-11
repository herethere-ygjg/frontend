# here-there Frontend

여기저기 서비스의 프론트엔드 애플리케이션입니다.  
React + TypeScript + Vite 기반으로 구현되었고, **Feature-Sliced Design (FSD)** 아키텍처를 적용하여 전체 파일/폴더 구조와 책임을 명확히 구분했습니다.

---

## 🔍 주요 기술 스택

| 항목 | 기술 |
|---|---|
| 프레임워크 | React |
| 언어 | TypeScript |
| 번들러 / 빌드 | Vite |
| 린트 / 코드 스타일 | ESLint, TypeScript 설정 |
| 아키텍처 패턴 | Feature-Sliced Design (FSD) |

---

## 🏗 아키텍처: Feature-Sliced Design (FSD)

FSD는 프론트엔드 애플리케이션을 **레이어(Layers)**, **슬라이스(Slices)**, **세그먼트(Segments)**로 나눠 규모가 커져도 유지보수성과 확장성을 확보하도록 돕는 구조입니다.

- **레이어(Layers)**: 앱 전체에서 책임 수준이 다른 상위 구조  
  예: `app`, `pages`, `widgets`, `features`, `entities`, `shared`  
- **슬라이스(Slices)**: 레이어 내 특정 비즈니스 도메인 또는 기능 단위  
- **세그먼트(Segments)**: 슬라이스 내부에서 기술적 역할/책임별 폴더 (`ui`, `api`, `model`, `lib`, `consts`)  
- **Public API 패턴**: 각 슬라이스/세그먼트는 외부 접근 가능한 인터페이스(`index.ts`)를 정의하여 내부 구현 숨김

이 구조 덕분에:

- 새로운 기능 추가 용이  
- 리팩토링 시 영향 범위 명확  
- 팀원 간 코드 위치 예측 가능  

---


## 📂 폴더 구조 예시

```
/
├ public/
├ src/
│ ├ app/
│ │ ├ providers/
│ │ ├ routes/
│ │ └ App.tsx
│ ├ pages/
│ │ ├ Home/
│ │ │ ├ ui/
│ │ │ ├ api/
│ │ │ ├ model/
│ │ │ └ index.tsx
│ │ └ SomeOtherPage/
│ ├ widgets/
│ ├ features/
│ ├ entities/
│ └ shared/
│ ├ ui/
│ ├ lib/
│ ├ api/
│ └ consts/
├ index.html
├ package.json
├ tsconfig.json
├ vite.config.ts
├ eslint.config.js
└ 기타 설정 파일
```
---

## 🚀 시작 및 개발 가이드

### 개발 환경 세팅

1. 레포지토리 클론  
```bash
git clone https://github.com/herethere-ygjg/frontend.git
 ```

2. 의존성 설치

  ```
  npm install
  ```

3. 개발 서버 실행
  
  ```
  npm run dev
  ```

4. 빌드
  
  ```
  npm run build
  ```

**코드 규칙**

- 코드 스타일: ESLint + TypeScript 설정 사용
- FSD 계층/슬라이스/세그먼트 규칙 준수
- 일반 유틸, 재사용 UI 요소 등은 shared 레이어에 위치

