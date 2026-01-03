import { NextResponse } from 'next/server';

const redirects: Record<string, string> = {
    instagram: 'https://instagram.com/mordisqueomx',
    facebook: 'https://www.facebook.com/share/1ARC8XaZRz/?mibextid=wwXIfr',
    whatsapp: 'https://wa.me/+526672103964',
};

export async function GET(
    request: Request,
    { params }: { params: Promise<{ platform: string }> }
) {
    const { platform } = (await params);
    const platformKey = platform.toLowerCase();
    const url = redirects[platformKey];

    if (url) {
        return NextResponse.redirect(url, 307);
    }

    return NextResponse.redirect(new URL('/', request.url));
}
