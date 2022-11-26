import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit{
  region = 'norte';
 
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.region = this.route.snapshot.paramMap.get('region') || 'norte';
  }

}
