#!/bin/sh

npm install

npx prisma generate

npx prisma db push