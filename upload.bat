cmd /c "npm run build"
CScript  zip.vbs  build  build.zip
scp build.zip andrew@andrewmarks.io:~/
del build.zip