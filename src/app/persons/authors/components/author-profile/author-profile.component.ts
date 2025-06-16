import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Author} from '../../model/author.entity';
import {AuthorService} from '../../services/author.service.service';

@Component({
  selector: 'app-author-profile',
  imports: [
    RouterLink
  ],
  templateUrl: './author-profile.component.html',
  styleUrl: './author-profile.component.css'
})
export class AuthorProfileComponent {
  author: Author | null = null;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.authorService.getAuthorById(this.id).subscribe(author => {
        this.author = author;
      });
    }
  }
}
