## Docker Test Repository

-   docker 공부용 레포지토리입니다.
-   Dockerfile을 수정했다면, 이미지를 다시 빌드 해야 함

### docker build -t docs/pnpm:20-alpine .

-   docker build : 이미지 생성
-   -t docs/pnpm:20-alpine : 생성된 이미지에 태그를 지정
    -   [ docs/pnpm ] : 이미지 이름
    -   [ 20-alpine ] : 태그 이름
-   . : 현재 디렉터리를 빌드 context로 사용 ( Dockerfile과 필요한 파일들이 위치한 디렉터리 )

### docker compose up -d

-   docker compose up : docker-compose.yml에서 정의한 서비스를 생성하고 실행
-   -d : container를 백그라운드에서 실행하도록 하는 모드 [ 실행되는 동안 터미널을 점유하지 않고, 다른 작업 가능 ]

### docker compose down -v

-   docker compose down : docker-compose.yml에서 실행 중인 container를 중지하고 삭제
-   -v : container와 함께 익명 볼륨을 삭제

### 볼륨?

-   Docker 볼륨은 컨테이너가 데이터를 저장하거나 공유할 수 있도록 하는 독립된 스토리지 공간입니다.
-   볼륨은 컨테이너가 삭제되더라도 데이터가 유지되며, 다른 컨테이너에서도 공유가 가능합니다.
-   볼륨의 종류:
    -   이름 있는 볼륨(Named Volume): docker-compose.yml에서 정의한 볼륨.
    -   익명 볼륨(Anonymous Volume): 컨테이너 실행 시 자동으로 생성되는 볼륨. [ 이름 없음 ]
