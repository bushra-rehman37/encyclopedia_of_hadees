import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { BooksComponent } from './books/books.component';
import { NarratorsComponent } from './narrators/narrators.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { FooterComponent } from './footer/footer.component';

import { CommentsComponent } from './comments/comments.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { NarratorDetailComponent } from './narrator-detail/narrator-detail.component';

import { DisplayContentComponent } from './display-content/display-content.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllAuthorsComponent,
    BooksComponent,
    NarratorsComponent,
    AboutUsComponent,
    HeaderComponent,
    TopicsComponent,
    AllBooksComponent,
    FooterComponent,
    CommentsComponent,
    AuthorDetailComponent,
    NarratorDetailComponent,
    DisplayContentComponent,
    TopicDetailComponent,
    BookDetailComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
