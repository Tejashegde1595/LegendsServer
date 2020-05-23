import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerserviceService } from '../players/playerservice.service';
import { Player } from 'src/models/Player';
import { PlayerdetailsserviceService } from './playerdetailsservice.service';

@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {
  footplayer:Player;
  id:string;
  constructor(private route:ActivatedRoute,private playerservice:PlayerdetailsserviceService) { 
      this.route.queryParamMap.subscribe(params=>{
        this.id = this.route.snapshot.params.playerid;
      });
      this.playerservice.getplayers(this.id).subscribe(player=>{
        this.footplayer = JSON.parse(JSON.stringify(player));
        console.log(this.footplayer);
      },(err)=>{
        console.log(err);
      });
  }
  ngOnInit(): void {
  }

}
