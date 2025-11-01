#!/bin/bash

echo "🔧 Compilando sitio principal..."
npm install
npm run build

echo "🔧 Compilando blog..."
cd vacioblog
npm install
npm run build
cd ..

echo "📁 Integrando blog dentro del sitio principal..."
rm -rf dist/blog
mkdir -p dist/blog
cp -r vacioblog/dist/* dist/blog

echo "🚀 Corriendo sitio localmente en http://localhost:3000 ..."
cd dist
serve -l 3000 --single
