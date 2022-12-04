rmdir deploy
mkdir deploy
mkdir deploy\views

copy build .\deploy_temp
move deploy_temp\index.html deploy\views\index.html
move deploy_temp deploy\deploy_temp
rename deploy\deploy_temp public

rmdir ..\weather-station-server\src
mkdir ..\weather-station-server\src
copy deploy ..\weather-station-server\src