'use client'

import { ObjectId } from 'mongodb';
import http from './http';
import { IBook } from '@/lib/models/models';

export async function getBooks(){
    const response = await http.get('/');
    return response.data; 
}
  
export async function createBook(card: IBook){
    return http.post('books', card);
}
  
export async function createAllBooks(){
    return http.post('books');
}
  
export async function updateBook(id: string, card:IBook){
    return http.patch(`/${id}`, card)
}

export async function deleteBook(bookId: ObjectId) {
    if (!ObjectId.isValid(bookId)) {
        throw new Error('Invalid bookId');
    }
    return http.delete(`/${bookId}`);
}