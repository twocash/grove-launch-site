@echo off
cd /d C:\GitHub\grove-launch-site
del _fix_nav.py
git add -A
git commit -m "nav: playground to run-the-pattern"
git push
vercel --prod --yes
del "%~f0"
