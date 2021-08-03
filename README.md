
=======
# Santa Fe 리뉴얼
모델 | 사이즈
:--: | :--:
PC | 1024px ~ 
Tablet | 768px ~ 1023px
Mobile | ~768px

## pc
---
  - [X]  비디오 버튼 크기조절  
  - [X] 갤러리 크기조절  
  - [X] safety : 탭 공간 조절  
  - tech, per : 이미지 위치 조정  
  - [X] 푸터 : 박스크기조절

## tablet
---
 - [X] 메뉴 토글, 로고 가운데, 사이드메뉴 상단오른쪽   
 - [X]  메인 비디오 텍스트 가운데 정렬/ 버튼2개 합치기  
 - [X]  디자인,테크놀로지,퍼포- 레이아웃 변경  
 4. 푸터 메뉴-3/3  
 5. 카피라이트,패밀리-가운데정렬  
 6. 버튼들 기본값으로 고정  

## git 사용법
 ### ~(틸트)표시는 git 주소 입력.
1. `git clone ~`으로 깃의 파일을 복사합.   
    -> 만일 이미 클론한 파일이라면 `git pull origin master`를 이용하여 해당 깃을 최신화 해줌.
2. `1번`을 시행했다면 준비가 완료됨. 이후 파일을 수정, 추가, 제거를 하고 git에 업로드 하면됨.
3. 업로드 순서는 아래와 같음.
  ```
  git add .
  git commit -m '~~~'(~~~은 개발자가 원하는 코멘트를 적으면 됨. 가급적 영어)
  git remote origin ~(~은 git 주소.) -> 이부분은 처음 한번만 하면 됨!!
  git push origin master (master 부분은 타 브랜치 이름을 적어도 됨!)
  ```
4. branch 관련 키워드
   - branch 리스트 확인 : `git branch`, *표시된 부분이 현재 활성화된 branch임.
   - 원격 저장소(remote repository)에 있는 branch 목록 확인 : `git branch -a`
   - branch 생성 : `git branch ~`, ~(틸트)에는 생성할 브랜치 이름 입력
   - 활성 branch 변경 : `git checkout ~`, ~(틸트)에는 변경할 브랜치 이름 입력

# 0803 완료.