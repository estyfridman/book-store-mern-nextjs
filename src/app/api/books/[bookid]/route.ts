// route: api/books/:bookId

import { NextRequest, NextResponse } from 'next/server';

import { deleteDocument,  } from '@/services/mongo';

export async function DELETE(req: NextRequest) {
    try {
        const { id } =  await req.json();
        const deleteResult = await deleteDocument('books', { id });
        return NextResponse.json({ deleteResult: deleteResult}, { status: 200 });
    } catch (error) {
        console.error("Error deleting book:", error);
        return NextResponse.json({ message: 'Internal Server Error' });
    }
}
