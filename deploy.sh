git fetch
git reset --hard origin/master
npm install
npm run build
pm2 stop ylc-nextjs
pm2 delete ylc-nextjs
pm2 start npm --name "ylc-nextjs" -- start