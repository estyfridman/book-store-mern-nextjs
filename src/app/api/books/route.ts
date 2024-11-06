'use server'

import { NextResponse } from 'next/server'
import { insertManyDocument } from '@/services/mongo'
import { gbooks } from '@/lib/gbooks'

// api/books/post
export async function POST() {
    try {
        const results = await insertManyDocument('books', gbooks);
        return NextResponse.json({ results: results}, { status: 200 });
    } catch (error) {
        console.error("Error from 'api/books' adding new book:", error);
        return NextResponse.json({ error: error});
    }
}



