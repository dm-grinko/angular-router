import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost, PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public id: string;
  public post: IPost;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.post = this.postsService.getPostById(this.id);

    if (!this.post) {
      this.router.navigate(['/']);
    }
  }
}
