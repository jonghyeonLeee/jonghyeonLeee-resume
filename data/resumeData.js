import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";

module.exports = [
  {
    id: 2,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [

      {
        id: 2,
        date: "2022.10 ~",
        title: "컴투버스",
        place: [
          '## 화상회의 웹 개발',
          ' # Typescript 도입',
          ' # CI/CD 배포 프로세스 개선',
            '# 프로젝트 환경 개선을 위한 코딩 컨벤션 및 폴더 구조화',
          ' # 로그 및 사용자 환경 별 문제 해결을 위한 sentry 도입',
          ' # 리액트 개발 최적화를 위한 react-query, react-hook-form, yup 도입',

        ],
        bg: "#F2F4FF",
      },

      {
        id: 3,
        date: "2017.12 ~ 2022.10",
        title: "믹시스템",
        place: [
          '## 채팅 시스템 개발',
            '# REST API 설계 및 구현',
          '# BFF 구현을 통한 모바일,웹 구분',
            '# 안정성 향상을 위한 테스트 코드 도입',
          '## 웹메일 개발',
          '# CI 환경 개선을 위한 git 도입',
          '# 공통 라이브러리 구현',
          '# 캐싱을 사용하여 웹 최적화를 통한 초기 로딩 속도 개선',
          '# 사용자 편의성 증대를 위한 파일 업/다운로드 개선',
        ],
        bg: "#EEF5FA",
      },
      {
        id: 1,
        date: "2008.03 ~ 2018.02",
        title: "한국기술교육대학교",
        place: [
          '## 컴퓨터공학부',
          '# CS/Web 기반 지식 습득',
        ],
        bg: "#EEF5FA",
      },
    ],
  },
];
