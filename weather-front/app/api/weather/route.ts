import { NextRequest, NextResponse } from "next/server";

const APIKEY = '5faab37d79a55fd06072e3ada49f3a7a';
export async function GET(request: any) {
    const {searchParams} = new URL(request.url);
    const city = searchParams.get('city');
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
   
    const res = await fetch(url);
    const data = await res.json();
    console.log('city', data)
    return NextResponse.json(data);
}