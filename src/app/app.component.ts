import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DevModeRedirectIssue';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const url = 'http://www.mocky.io/v2/5dc036f23100006d73be3f42';

    this.http.get(url).subscribe({
      next: (data) => {
        console.log('SUCCESS', data);
      },
      error: (err) => console.warn('ERROR', err),
      complete: () => console.log('complete '),
    });
  }
}
