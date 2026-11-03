\# My Portfolio



Hugo와 PaperMod 테마를 기반으로 제작 중인 개인 포트폴리오입니다.



\- 공개 사이트: https://dohyn38.github.io/My_Portfolio/

\- 저장소: https://github.com/dohyn38/My_Portfolio



\## 사이트 구성



\- 홈: 자기소개, 관심 분야, 학습 계획, 활동·프로젝트

\- 활동 상세 페이지: 제작 과정과 결과물

\- 상단 메뉴와 본문 링크를 통한 구역 이동

\- 밝은 모드·어두운 모드 및 화면 크기에 따른 배치



현재 일부 콘텐츠는 작성 중인 임시 문구입니다.



\## 파일별 수정 위치



| 파일 | 역할 |

|---|---|

| `site/pages.json` | 사이트 이름·주소·언어·메뉴 설정 |

| `site/layouts/home.html` | 홈 화면의 구역·카드·문구·링크 |

| `site/assets/css/extended/custom.css` | 색상·배치·다크 모드·반응형 스타일 |

| `site/content/projects/portfolio.md` | 활동 상세 내용 |

| `.github/workflows/hugo-pages.yml` | 자동 빌드와 배포 |

| `.github/pages\_build.py` | 의존성 준비와 배포용 빌드 |



홈은 전용 템플릿을 사용하므로 홈 본문은 `site/layouts/home.html`에서 수정합니다.



\## 개발 환경과 설치



현재 배포 워크플로에 지정된 도구 버전은 다음과 같습니다.



| 도구 | 버전 |

|---|---|

| Hugo Extended | 0.167.0 |

| Python | 3.12 |

| Node.js | 24 |

| Go | 1.27.1 |

| Dart Sass | 1.105.0 |

| 제공 준비 스크립트 | prepare\_github\_pages.py 3.1 |



로컬 실행에는 우선 Hugo Extended를 설치합니다. 배포 환경을 재현하거나 추가 도구가 필요한 경우 위 버전과 워크플로의 설치 절차를 참고합니다.



설치 안내:



\- Hugo: https://gohugo.io/installation/

\- Python: https://www.python.org/downloads/

\- Node.js: https://nodejs.org/

\- Go: https://go.dev/dl/

\- Dart Sass: https://sass-lang.com/install/



설치 후 터미널에서 버전을 확인합니다.



```bash

hugo version

python --version

node --version

go version

sass --version

```



\## 로컬 미리보기



저장소 최상위 폴더에서 실행합니다.



```bash

hugo server --source site --config pages.json

```



터미널에 표시되는 로컬 주소를 브라우저에서 엽니다. 종료하려면 터미널에서 `Ctrl + C`를 누릅니다.



\## 배포용 빌드



저장소 최상위 폴더에서 실행합니다.



```bash

python .github/pages\_build.py --dependencies

python .github/pages\_build.py --build

```



생성된 배포 결과는 `public` 폴더에서 확인합니다. 로컬 실행 명령과 필요한 도구는 실제 실행 후 검증 결과에 맞게 보완합니다.



\## 수정과 재배포



1\. 작업 브랜치에서 파일을 수정합니다.

2\. `git diff`로 변경 사항을 확인합니다.

3\. 수정한 파일을 지정해 커밋하고 push합니다.

4\. GitHub Actions에서 해당 커밋의 `build`와 `deploy` 결과를 확인합니다.

5\. 공개 사이트에서 화면과 링크에 변경이 반영됐는지 확인합니다.



현재 워크플로는 모든 브랜치의 push를 실행 대상으로 설정했습니다. 실제 배포는 `github-pages` 환경 보호 규칙을 통과해야 진행됩니다.



모든 브랜치는 같은 공개 주소에 배포됩니다. 마지막으로 완료된 배포가 공개 사이트에 표시됩니다.



\## 동작 확인



\- 홈과 상세 페이지 직접 접속 및 새로고침

\- 상단 메뉴·구역 이동·처음 복귀·외부 링크

\- 밝은 모드와 어두운 모드의 가독성

\- 화면 폭 1440px·768px·390px의 배치

\- Tab·Enter 조작과 키보드 선택 표시

\- 브라우저 200% 확대 상태의 사용 가능 여부



실제 검사 환경·시각, 예상·실제 결과와 화면을 기록합니다.



\## 출처와 이용 조건



\### 테마



\- 이름: PaperMod

\- 원본: https://github.com/adityatelange/hugo-PaperMod

\- 라이선스: MIT

\- 원본의 저작권 및 라이선스 고지를 유지합니다.

\- 저장소에 포함된 `LICENSE`와 사용한 파일의 별도 고지를 확인합니다.



\### 직접 작성한 부분



홈 전용 레이아웃, 사용자 정의 스타일, 사이트 설정과 콘텐츠의 실제 작성·수정 범위는 커밋 이력과 보고서에 기록합니다. AI 도움을 받은 부분은 아래 활용 내역과 구분합니다.



\### AI 활용



Codex를 활용하여 코드 작성, 설정 설명, 오류 원인 분석과 수정 방법에 도움받았습니다. 대표 사례별 요청·응답·본인 판단·반영 파일·직접 검증 결과는 보고서에 기록합니다.



디자인 구상에는 AI 생성 시안을 참고했습니다. 참고용 시안과 사이트에 실제 사용한 이미지 자산은 구분하며, AI 생성 이미지를 게시하면 사용 위치와 생성 도구를 추가 기록합니다.



\### 디자인 참고



\- 참고 사이트: https://cdg-portfolio.com/

\- 참고 범위: 큰 소개 화면, 구역별 구성, 카드 배치

\- 해당 사이트의 코드·사진·개인정보를 사용하려면 별도로 이용 조건을 확인합니다.



\### 추가 자료



외부 이미지·글꼴·아이콘·코드를 추가할 때 아래 표에 기록합니다.



| 자료 | 사용 위치 | 제작 구분 | 원본 URL 또는 도구 | 이용 조건·고지 |

|---|---|---|---|---|

| \[자료명] | \[파일 또는 구역] | \[직접·외부·AI] | \[주소 또는 도구] | \[실제 조건] |



\## 최종 제출 버전



1\. 작업 내용을 커밋하고 원격 저장소에 올립니다.

2\. 작업 브랜치를 `main`에 합칩니다.

3\. 작업별 커밋 이력을 유지하도록 병합 방식을 선택합니다.

4\. `main` push로 시작된 빌드와 배포를 확인합니다.

5\. 공개 사이트가 최종 제출 버전과 일치하는지 검사합니다.



최종 확인 중 다른 브랜치의 배포가 공개 사이트를 덮어쓰지 않도록 관리합니다.



보고서에는 최종 `main` 전체 SHA, 커밋 URL, 해당 Actions 실행 URL과 실제 상태, 유효 커밋 집계 근거를 기록합니다.


### 첫 화면 배경 사진

- 사용 위치: `site/static/images/hero-bg.jpg`, 홈 첫 소개 구역
- 제작 구분: 외부 사진
- 사진: Remy_Loz / Unsplash
- 원본: https://unsplash.com/photos/black-laptop-computer-on-brown-wooden-table-3S0INpfREQc
- 이용 조건: Unsplash License — https://unsplash.com/license
- 적용 방식: 로컬 이미지 파일과 CSS 어두운 오버레이 사용. 사진 속 화면을 본인 작업물로 제시하지 않음.
