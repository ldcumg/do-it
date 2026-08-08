# Do it

할 일을 등록하고 완료 여부를 관리할 수 있는 Todo 웹 애플리케이션입니다.

## 🔗 배포

[Do it 바로가기](https://do-it-two-omega.vercel.app/)

## 🛠️ 기술 스택

- Next.js
- React
- TypeScript
- Tailwind CSS
- TanStack Query

## ✨ 주요 기능

- 할 일 목록 조회
- 할 일 등록
- 할 일 상세 조회
- 할 일 수정
- 할 일 삭제
- 할 일 완료 / 미완료 상태 변경
- 이미지 업로드
- 반응형 UI

## 📖 사용 방법

1. 메인 화면의 입력창에 할 일을 입력한 후 등록합니다.
2. 등록된 할 일 목록에서 체크박스를 통해 할 일의 완료 여부를 체크할 수 있습니다.
3. 할 일를 클릭하면 상세 페이지로 이동합니다.
4. 상세 페이지에서 할 일의 제목, 메모, 이미지를 수정할 수 있습니다.
5. 수정이 완료되면 수정 완료 버튼을 눌러 변경 사항을 저장합니다.
6. 삭제 버튼을 통해 할 일를 삭제할 수 있습니다.
7. PC와 모바일 환경에서 모두 사용할 수 있습니다.

## 📱 반응형 UI

Tailwind CSS의 반응형 breakpoint를 활용하여 화면 크기에 따라 레이아웃과 컴포넌트 크기가 변경되도록 구현했습니다.

## 🗂️ 프로젝트 구조

```text
src
 ┣ app
 ┃ ┣ [todoId]
 ┃ ┃ ┗ page.tsx
 ┃ ┣ favicon.ico
 ┃ ┣ layout.tsx
 ┃ ┗ page.tsx
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┗ Header.tsx
 ┃ ┣ detail
 ┃ ┃ ┣ DetailBody.tsx
 ┃ ┃ ┣ DetailButtons.tsx
 ┃ ┃ ┣ ImagePart.tsx
 ┃ ┃ ┣ MemoPart.tsx
 ┃ ┃ ┣ Supplement.tsx
 ┃ ┃ ┗ TodoDetailCheckbox.tsx
 ┃ ┣ home
 ┃ ┃ ┣ InputForm.tsx
 ┃ ┃ ┣ TodoCheckbox.tsx
 ┃ ┃ ┗ TodoListSection.tsx
 ┃ ┗ QueryProvider.tsx
 ┣ fonts
 ┃ ┣ NanumSquareB.ttf
 ┃ ┗ NanumSquareR.ttf
 ┣ hooks
 ┃ ┣ queryKeys.ts
 ┃ ┗ tanstack.ts
 ┣ apis.ts
 ┣ constants.ts
 ┣ env.ts
 ┣ globals.css
 ┣ regex.ts
 ┣ services.ts
 ┗ types.ts
```

## 💡 구현 내용

### 반응형 UI

Tailwind CSS의 반응형 breakpoint를 활용하여 화면 크기에 따라 레이아웃과 컴포넌트 크기가 변경되도록 구현했습니다.

### TanStack Query

서버 상태를 효율적으로 관리하기 위해 TanStack Query를 사용했습니다.

- Todo 목록 조회 및 캐싱
- Todo 생성 / 수정 / 삭제 mutation 관리
- 변경 후 관련 query invalidate