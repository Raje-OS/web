import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Actor} from '../../model/actor.entity';
import {ActorService} from '../../services/actor.service.service';
import {Director} from '../../../directors/model/director.entity';

@Component({
  selector: 'app-actor-profile',
  templateUrl: './actor-profile.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./actor-profile.component.css']
})
export class ActorProfileComponent implements OnInit {
  actor: Actor | null = null;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.actorService.getActorById(this.id).subscribe(actor => {
        this.actor = actor;
      });
    }
  }
}
