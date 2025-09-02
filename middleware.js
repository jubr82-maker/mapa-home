import { NextResponse } from 'next/server'
export function middleware(req){ const res=NextResponse.next(); if(!req.cookies.get('lang')) res.cookies.set('lang','fr',{path:'/',maxAge:31536000}); return res }
