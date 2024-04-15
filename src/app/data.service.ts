import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  bookDetails = [
    {
      "bookid": 123,
      "book_name": "The Alchemist",
      "product_costprice": 160,
      "product_saleprice": 150,
      "rating": 3.47,
      "author": "Paulo Coelho",
      "description":"It gives you an insight of how life can be in different perspectives."
    },
    {
      "bookid": 124,
      "book_name": "The Atomic Habits",
      "product_costprice": 170,
      "product_saleprice": 140,
      "rating": 4.47,
      "author": "James Clear",
      "description": "All big things come from small beginnings. The seed of every habit is a single, tiny decision"
    },
    {
      "bookid": 125,
      "book_name": "The Art of Laziness",
      "product_costprice": 140,
      "product_saleprice": 120,
      "rating": 4,
      "author": "T M Caufield",
      "description": "A motivational book for beginners! Do you constantly feel unmotivated to work on your dreams? If the answer is yes, then this book is for you."
    },
    {
      "bookid": 126,
      "book_name": "The Art of Being ALONE",
      "product_costprice": 165,
      "product_saleprice": 155,
      "rating": 3,
      "author": "Renuka Gavrani",
      "description": "The fear of loneliness was injected into our minds since we were kids"
    },
    {
      "bookid": 127,
      "book_name": "How to Talk to Anyone",
      "product_costprice": 130,
      "product_saleprice": 120,
      "rating": 4.7,
      "author": "Leil Lowndes",
      "description": "How to Talk to Anyone teaches you the art of human communication, starting from when you meet someone from eating dinner together."
    },
    {
      "bookid": 128,
      "book_name": "The Power of one thought",
      "product_costprice": 160,
      "product_saleprice": 150,
      "rating": 3.47,
      "author": "Paulo Coelho",
      "description": "I am a soul, I'm the master of my mind, I'm the master of my body. I accept everyone."
    }
  ]
  getData(){
    return this.bookDetails
  }
}
