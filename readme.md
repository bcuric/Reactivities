To start backend:
    - cd .\API\
    - dotnet watch run

To start client:
    - cd .\client-app\
    - npm start

To drop database
    - Go to projects root folder
    - dotnet ef database drop -p .\Persistance\ -s API/
