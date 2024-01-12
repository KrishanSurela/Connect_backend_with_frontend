# Connect_backend_with_frontend

## React installation process with vite

- npm create vite@latest .
- Select a framework: » React
- Select a variant: » JavaScript
- npm install
- npm run dev (for run the frontend project)

## for Create a web request for data from the backend

- useEffect()

- npm install axios (but there is major error of CORS Policy,ham frontend me bhi resolve(proxy) kr skte hai aur backend me bhi)

- So we need to add CORS packege in backend (proxy)

- add code to the vite.config.js => server:{ proxy:{'/api':'http://localhost:5600'}},
