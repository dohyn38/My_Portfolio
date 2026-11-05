# 김도현 포트폴리오

Hugo와 PaperMod 기반 테마로 제작한 개인 포트폴리오입니다. 자기소개, 관심 분야, 학습 계획과 역량을 소개하고, 프로젝트별 목적·역할·수행 과정·결과를 정리합니다.

- [공개 사이트](https://dohyn38.github.io/My_Portfolio/)
- [사이트 코드 저장소](https://github.com/dohyn38/My_Portfolio)
- [GitHub Actions 실행 기록](https://github.com/dohyn38/My_Portfolio/actions)
- [main 커밋 이력](https://github.com/dohyn38/My_Portfolio/commits/main/)

## 사이트 구성

| 화면 | 주소 | 내용 |
|---|---|---|
| 홈 | `/My_Portfolio/` | 프로필, 소개 문구, 프로젝트 카드 |
| 프로젝트 목록 | `/My_Portfolio/#projects` | 활동별 상세 보고서와 코드 저장소 링크 |
| About Me | `/My_Portfolio/about/` | 소개, 관심 분야, 학습 목표 및 실행 계획, 역량 및 사용 기술 |
| 활동 1 | `/My_Portfolio/projects/portfolio/` | C++ 학교 구성원 관리 프로그램 보고서와 실행 결과 이미지 |
| 활동 2 | `/My_Portfolio/projects/portfolio-website/` | 포트폴리오 웹사이트 제작 과정과 구현 결과 |

주소는 현재 작업 코드 기준입니다. 새 페이지와 자산은 커밋·push 후 배포가 완료되어야 공개 주소에 반영됩니다. 공개 화면이 로컬과 다르면 먼저 해당 변경의 커밋 여부와 Actions 배포 SHA를 확인합니다.

About Me의 `#about`, `#goals`, `#learning-plan`, `#skills`에서 공개 평가 기준의 관심 분야·선택 이유, 학습 계획, 역량·적용 사례를 확인할 수 있습니다. 활동 보고서는 수행 시기와 상태, 목적, 본인 역할, 과정과 선택 이유, 산출물, 회고를 제공합니다.

## 사용 기술과 구현 내용

| 기술·도구 | 적용 내용 |
|---|---|
| Hugo·PaperMod | 정적 페이지 생성, 테마 기반 레이아웃 구성 |
| HTML·Hugo 템플릿 | 홈·소개·프로젝트 상세 화면과 공통 메뉴 구성 |
| Markdown | 프로젝트 보고서, 표와 결과 이미지 작성 |
| CSS | 다크·라이트 모드, 그라데이션, 반응형 배치, 목차 카드와 초점 표시 |
| JavaScript | 스크롤 위치에 따른 목차 강조와 한글 앵커 처리 |
| Git·GitHub | 브랜치별 작업과 커밋 이력 관리 |
| GitHub Actions·GitHub Pages | 의존성 준비, 빌드, 프로젝트 경로 보정과 배포 |
| Codex | 코드 작성·수정, 오류 분석, 검증과 문서 정리 지원 |

기본 화면은 다크 모드이며 테마 버튼으로 밝은 모드로 전환할 수 있습니다. 넓은 화면의 소개·활동 목차는 본문 오른쪽에서 스크롤을 따라오고, 좁은 화면에서는 본문 위로 배치됩니다. 목차의 제목은 본문의 해당 위치로 연결됩니다.

## 실행 환경과 설치

### 도구 버전

| 도구 | 배포 워크플로에 지정된 버전 | 용도 |
|---|---|---|
| Hugo Extended | `0.167.0` | 사이트 빌드 |
| Python | `3.12` | 제공 빌드 스크립트 실행 |
| Node.js | `24` | 테마·빌드 의존성 준비 |
| Go | `1.27.1` | Hugo 모듈 등 의존성 준비 |
| Dart Sass | `1.105.0` | 스타일 빌드 지원 |
| 제공 준비 스크립트 | `prepare_github_pages.py 3.1` | 사이트와 Pages 빌드 구성 |

개발 환경은 Windows와 Git Bash 또는 PowerShell입니다. 현재 코드의 로컬 빌드는 Hugo Extended `0.169.0`에서도 확인했습니다. 배포와 같은 조건으로 재현할 때는 워크플로에 지정된 버전을 사용합니다.

### Windows에서 Hugo 설치

간단한 로컬 미리보기에는 Hugo Extended가 필요합니다. PowerShell 또는 Windows 터미널에서 설치할 수 있습니다.

```powershell
winget install --id Hugo.Hugo.Extended -e
```

설치 후 터미널을 완전히 닫고 다시 열어 `hugo version`을 확인합니다. 위 명령은 배포에 고정된 버전 대신 설치 시점의 제공 버전을 설치할 수 있습니다. 배포 버전을 맞추려면 [Hugo 0.167.0 릴리스](https://github.com/gohugoio/hugo/releases/tag/v0.167.0)에서 Windows용 Extended 압축 파일을 받아 실행 파일 폴더를 PATH에 등록합니다.

빌드 보조 스크립트를 로컬에서 사용할 때는 [Python 설치 안내](https://www.python.org/downloads/)에 따라 Python 3.12도 준비합니다. 추가 도구는 [워크플로](.github/workflows/hugo-pages.yml)의 버전과 설치 절차를 기준으로 합니다. GitHub Actions에서는 해당 설치 단계가 자동 실행됩니다.

### 저장소와 로컬 미리보기

```bash
git clone https://github.com/dohyn38/My_Portfolio.git
cd My_Portfolio
hugo version
hugo server --source site --config pages.json
```

이미 저장소를 내려받았다면 저장소 최상위 폴더에서 마지막 명령을 실행합니다. 설정 파일은 `site/pages.json`이며, `--source site`를 사용하므로 `--config pages.json`으로 지정합니다.

서버가 안내하는 [로컬 주소](http://localhost:1313/My_Portfolio/)를 엽니다. 파일을 수정하면 다시 빌드되어 화면에 반영됩니다. 서버 종료는 실행한 터미널에서 `Ctrl + C`를 누릅니다.

### 배포용 빌드

저장소 최상위 폴더에서 실행합니다. 아래 파일명에는 밑줄 앞의 역슬래시를 넣지 않습니다.

```bash
python .github/pages_build.py --dependencies
python .github/pages_build.py --build
```

의존성 준비에는 네트워크 연결과 위 도구가 필요할 수 있습니다. 빌드 스크립트는 `site/pages.json`과 `.github-pages.json`을 읽고 저장소 루트의 `public/`에 결과를 생성합니다. 홈 `public/index.html`의 존재와 `/My_Portfolio/` 경로를 확인한 뒤 배포합니다.

`public/`, `site/public/`, `node_modules/`, Hugo 생성 캐시와 잠금 파일은 `.gitignore`로 관리합니다. 생성 결과만 바꿔 커밋하는 대신 원본 콘텐츠·설정·자산을 수정합니다.

## 파일별 수정 위치

| 파일·폴더 | 수정 내용 |
|---|---|
| `site/pages.json` | 사이트 제목, 운영 주소, 메뉴 순서, 기본 테마와 파비콘 |
| `site/layouts/home.html` | 홈 프로필, 소개 문구, 프로젝트 카드와 링크 |
| `site/layouts/about.html` | 소개·관심 분야·학습 계획·역량 표 |
| `site/layouts/projects/single.html` | 활동 상세 요약 카드, 보고서 본문과 오른쪽 목차 |
| `site/content/projects/portfolio.md` | 활동 1 보고서 |
| `site/content/projects/portfolio-website.md` | 활동 2 보고서 |
| `site/assets/css/extended/custom.css` | 색상, 배치, 표, 반응형 화면과 초점 표시 |
| `site/assets/js/about-toc.js` | 소개·활동 목차의 현재 위치 표시 |
| `site/static/images/` | 프로필·배경 이미지 원본 자산 |
| `site/static/projects/portfolio/` | 활동 1 실행 결과 이미지 |
| `site/static/favicon-moon*.png` | 달 사진 기반 브라우저 파비콘 |
| `site/static/apple-touch-moon.png` | 모바일 홈 화면 아이콘 |
| `.github/workflows/hugo-pages.yml` | 빌드·배포 자동화 |
| `.github/pages_build.py` | 의존성 준비와 프로젝트 경로 보정 |
| `.github-pages.json` | 준비 스크립트가 사용하는 테마·빌드 설정 |
| `docs/verification.md` | 이전 공개 사이트의 기능 점검 기록과 확인 범위 |

활동을 추가할 때는 `site/content/projects/`에 Markdown을 작성하고 홈 카드와 연결합니다. 상세 페이지의 요약 카드에는 `repository`, `period`, `projectType`, `projectIcon`, `technologies` 값을 사용합니다. 본문 제목을 수정하면 목차도 함께 생성됩니다.

기존 `site/content/interests.md`, `goals.md`, `skills.md`는 현재 About Me에 통합되기 전의 문서입니다. 배포 전에 안내용 임시 문구를 실제 내용으로 정리하거나 비공개 처리해야 합니다. 메뉴에서 연결하지 않아도 직접 주소로 열리는 문서는 공개 콘텐츠에 해당합니다.

## 수정과 재배포

1. 작업 브랜치에서 원본 파일을 수정하고 로컬 미리보기와 빌드를 확인합니다.
2. `git status`와 `git diff`로 변경 범위를 확인합니다. 새 Markdown·이미지가 추적 대상에 들어갔는지도 확인합니다.
3. 관련 파일을 `git add`로 지정하고, 실제 변경을 설명하는 메시지로 커밋합니다.
4. 최종 제출할 변경과 작업 이력을 `main`에 통합합니다. 유효 커밋을 최종 이력에서 확인할 수 있도록 병합 방식을 선택합니다.
5. `main`을 push하고 [Actions](https://github.com/dohyn38/My_Portfolio/actions)에서 같은 SHA의 `build`와 `deploy` 성공을 확인합니다.
6. 공개 홈·소개·활동 상세 페이지를 새로 열어 수정된 글·이미지·메뉴가 반영됐는지 확인합니다.

저장소의 **Settings → Pages → Source**는 **GitHub Actions**로 설정합니다. `github-pages` 환경에 배포 브랜치 제한이 있으면 최종 `main` 배포가 허용되는지도 확인합니다.

현재 워크플로는 모든 브랜치의 push와 수동 실행을 받습니다. 브랜치마다 별도 사이트가 생기는 설정은 아니며, 같은 Pages 주소에 마지막으로 성공한 배포가 표시됩니다. 최종 점검 중 다른 브랜치의 배포가 제출 버전을 덮어쓰지 않도록 관리합니다. 평가용 자동 배포 증거는 최종 `main` push로 시작된 실행을 사용합니다.

### 버전과 커밋 확인

원격 정보를 갱신한 뒤 최종 main의 전체 SHA와 이력을 확인합니다.

```bash
git fetch origin
git rev-parse origin/main
git log origin/main --reverse --format="%H %ad %s" --date=short
git rev-list --count origin/main
```

마지막 명령은 전체 후보 수이며 유효 커밋 수가 아닙니다. 원본 테마 이력, ZIP 단순 등록, 빈 커밋, 빌드 결과만의 커밋, 자체 변경 없는 병합과 개수 채우기용 변경 등을 제외해야 합니다. 보고서에는 집계 시작 SHA·포함 여부, 최종 main SHA, 후보 수·제외 수·유효 수와 제외 이유를 기록합니다.

사이트·저장소·최종 main SHA·Actions·보고서의 버전은 서로 일치해야 합니다. 문서에 완료라고 쓰는 것만으로 미커밋 파일이나 배포되지 않은 변경이 반영되지는 않습니다.

## 기능 점검

| 영역 | 확인 방법 |
|---|---|
| 배포 | 로그인하지 않은 창에서 HTTPS 공개 주소를 열고 최종 main의 build·deploy 결과를 확인합니다. |
| 경로·자산 | 소개·활동 상세 주소를 직접 열고 새로고침합니다. 이미지·아이콘·스타일과 프로젝트 하위 경로를 확인합니다. |
| 메뉴·링크 | Projects·About Me·목차·홈 복귀·GitHub 링크를 실행하고 뒤로 가기도 확인합니다. |
| 반응형 | 1440px·768px·390px에서 메뉴·표·이미지의 넘침과 가림을 확인하고 폭을 줄였다 다시 늘립니다. |
| 키보드 | Tab으로 주요 링크에 도달하고 초점 표시, Enter 실행과 다음 항목으로 이동을 확인합니다. |
| 확대 | 실제 브라우저 200% 확대 상태에서 글·메뉴·링크를 확인합니다. 좁은 폭 검사로 대신하지 않습니다. |
| 콘텐츠 | 이름·소개, 관심과 이유, 학습 계획, 역량 적용 사례와 활동의 목적·역할·과정·결과·회고를 확인합니다. 임시 문구도 점검합니다. |

`docs/verification.md`는 이전 버전에서 수행한 점검 기록이며 현재 버전 전체의 합격 판정은 아닙니다. 최종 보고서에는 URL·브라우저와 버전·폭·검사 시각·동작·예상·실제 결과·화면 또는 로그 근거를 기록합니다.

이번 작업에서 로컬 Hugo 빌드, 주요 경로와 목차 연결을 확인했습니다. 공개 화면에서도 주요 메뉴·테마 전환과 세 화면 폭을 검사했습니다. 최종 main 배포와 실제 200% 확대 등 확인하지 않은 부분은 별도로 재검증합니다. 사이트의 활동 보고서와 과제 제출용 기능 검증 PDF는 구분합니다.

## 출처와 이용 조건

### 테마와 코드

- 테마: [PaperMod](https://github.com/adityatelange/hugo-PaperMod), Hugo Themes의 [PaperMod 소개](https://themes.gohugo.io/themes/hugo-papermod/)
- 이용 조건: MIT. 저장소에 포함된 [테마 LICENSE](site/themes/template/LICENSE)의 저작권·이용 조건을 유지합니다.
- 테마 기반 위에 홈·소개 전용 레이아웃, 프로젝트 보고서, 사용자 정의 스타일과 목차 코드를 수정했습니다. 기존 테마 전체를 직접 제작한 것으로 표시하지 않습니다.
- 빌드 구성은 수업 제공 `prepare_github_pages.py 3.1`이 생성한 `.github/pages_build.py`, 워크플로와 설정을 사용합니다. 제공 스크립트의 고지와 생성 표시를 유지합니다.
- 활동 1 코드는 별도 [학교 구성원 관리 프로그램 저장소](https://github.com/dohyn38/school_member-management)에서 확인합니다.

### 이미지와 디자인 자료

| 자료·파일 | 사용 위치·현재 상태 | 제작 구분과 출처 |
|---|---|---|
| `site/static/images/profile.jpg` | 홈의 원형 프로필 | 사용자가 제공한 본인 사진의 AI 편집본입니다. 불필요한 요소를 제거한 편집 이미지가 제공되어 적용했습니다. |
| `site/static/favicon-moon.png`, `favicon-moon-16.png`, `favicon-moon-32.png`, `apple-touch-moon.png` | 현재 파비콘·모바일 아이콘 | 사용자 제공 `KakaoTalk_20261105_234655275.jpg`를 입력으로 OpenAI 내장 이미지 편집 도구를 사용해 달 중심의 정사각형 구도를 만들고 크기별로 저장했습니다. |
| `site/static/safari-pinned-tab.svg` | Safari 고정 탭용 아이콘 | Codex의 도움을 받아 작성한 달 모양 SVG입니다. 사진형 파비콘과 구분됩니다. |
| `site/static/projects/portfolio/result-1.png` | 활동 1 실행 결과 | 사용자 제공 C++ 결과 보고서에 포함된 프로그램 실행 화면을 추출했습니다. 테마 예시 이미지가 아닙니다. |
| `site/static/images/hero-bg.jpg` | 이전 홈 배경용 자산, 현재 홈은 그라데이션 사용 | Remy_Loz / Unsplash의 [원본 사진](https://unsplash.com/photos/black-laptop-computer-on-brown-wooden-table-3S0INpfREQc), [Unsplash License](https://unsplash.com/license). |
| `favicon-photo.png`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` | 이전 파비콘 자산, 현재 설정은 달 사진 파일 참조 | 사용자 제공 칵테일 사진을 OpenAI 내장 이미지 편집 도구로 재구성해 사용했던 이미지입니다. |
| `site/static/favicon.svg` | 이전 D 이니셜 파비콘, 현재 기본 파비콘으로 미사용 | Codex의 도움으로 작성한 SVG입니다. |

사용자가 제공한 원본 사진은 제공받은 자료로 기록하며, 이 README에서 별도의 공개 재사용 라이선스를 부여하지 않습니다. 테마의 MIT 라이선스를 사진에도 일괄 적용하지 않습니다. AI로 편집한 사진은 원본 촬영 이미지와 구분합니다.

디자인 구상에는 [cdg-portfolio](https://cdg-portfolio.com/)와 [Hong-Iron](https://hong-iron.github.io/Hongs_Blog/)의 화면 구성을 참고했습니다. 소개 영역·프로젝트 배치·상단 탐색 구성을 참고했으며, 참고 사이트의 인물 사진이나 개인 소개를 본인 자료로 사용하지 않았습니다.

### Codex 활용 범위

Codex를 사용해 HTML·CSS·JavaScript 수정, Hugo 설정 설명, 오류 원인 분석, 빌드·링크 검증과 문서 정리에 도움을 받았습니다. 화면 구성과 문구, 수정 방향을 요청하고 제안 결과를 확인하며 변경 사항을 조정했습니다.

대표 사례는 SVG 아이콘 크기 확대 문제 수정과 한글 앵커의 현재 목차 표시 오류 수정입니다. 후자의 경우 인코딩된 주소를 해석한 뒤 본문 ID를 찾도록 수정했습니다. 이미지 편집에는 코드 작성용 Codex와 별도로 OpenAI 내장 이미지 편집 도구를 사용했습니다.

제출용 AI 활용 기록에는 실제 사례 2건의 도구·모델(확인 불가 시 미표시)·날짜·목적, 실제 요청 원문, 핵심 응답, 채택·수정·보류 판단, 반영 파일·커밋, 직접 확인한 결과와 한계를 기록합니다. 이 README의 요약은 해당 사례 기록을 대신하지 않습니다.
