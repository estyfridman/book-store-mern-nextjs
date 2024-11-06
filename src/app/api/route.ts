'use server';

import { NextRequest, NextResponse } from 'next/server';
import {  insertDocument } from '@/services/mongo';

export async function GET() {
    return NextResponse.json({text: 'test' });
//     try {
//         const books = await getAllDocument('books');
//         return NextResponse.json({ books }, { status: 200 });
//     } catch (error) {
//         console.error("Error fetching books:", error);
//         return NextResponse.json({ error: "Failed to fetch books" }, { status: 500 });
// }
}

interface INewBook {
    title: string;
    price: number; 
    description: string; 
    img: string; 
    rating: { 
        rate: number;
        count: number;
    };
};

export async function POST(req: NextRequest) {
    try {
        const {newBook}: {newBook: INewBook} = await req.json();

        const bookAdded = await insertDocument('books', newBook);
        return NextResponse.json({ book: bookAdded}, { status: 200 });
    } catch (error) {
        console.error("Error from 'api/' adding new book:", error);
        return NextResponse.json({ error: error});
    }
}