import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Director} from '../../model/director.entity';
import {DirectorService} from '../../services/director.service.service';

@Component({
  selector: 'app-director-profile',
  templateUrl: './director-profile.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./director-profile.component.css']
})
export class DirectorProfileComponent implements OnInit {
  director: Director | null = null;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private directorService: DirectorService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.directorService.getDirectorById(this.id).subscribe(director => {
        this.director = director;
      });
    }
  }
}
