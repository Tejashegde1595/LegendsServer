import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/Player'
import { PlayerserviceService } from './playerservice.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  footplayers:Player[]=[];
  constructor(private players :PlayerserviceService) {
    players.getplayers().subscribe(result=>{
      console.log("result is",result);
      this.footplayers = JSON.parse(JSON.stringify(result));
      console.log("Players are"+this.footplayers);
      },(err)=>{
        console.log(err);
        console.log("Players are"+this.footplayers);
      })

   
   }

  ngOnInit() {
  }


}
