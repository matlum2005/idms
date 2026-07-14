import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService, DashboardTotals } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  totals: DashboardTotals = {
    totalInterns: 0,
    totalBatches: 0,
    freeIds: 0,
    premiumIds: 0,
  };

  analytics: Array<{ title: string; value: string; icon: string }> = [];

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe((res: DashboardTotals) => {
      this.totals = res;
      this.analytics = [
        { title: 'Active Interns', value: String(res.totalInterns), icon: 'group' },
        { title: 'Total Batches', value: String(res.totalBatches), icon: 'storage' },
        { title: 'Free IDs', value: String(res.freeIds), icon: 'redeem' },
        { title: 'Premium IDs', value: String(res.premiumIds), icon: 'workspace_premium' },
      ];
    });
  }
}


