import { NextRequest, NextResponse } from "next/server";

const APIKEY = '5faab37d79a55fd06072e3ada49f3a7a';
export async function GET(request: any) {
    // const {searchParams} = new URL(request.url);
    // const addres = searchParams.get('address');

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${APIKEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
}