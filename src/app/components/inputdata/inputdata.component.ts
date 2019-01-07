import { Component, OnInit } from '@angular/core';
import { LoadOrigeDataService } from '../../services/load-orige-data.service';
import { Businese } from '../../class/businese';

@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.css']
})
export class InputdataComponent implements OnInit {

  geturl = 'https://localhost:44375/api/dorandom/';
  dataSet: Businese[] = [];
  constructor(private LoadOrigeData: LoadOrigeDataService) { }

  ngOnInit() { }
  // 图片上传返回
  bindingdata(info) {
    if (info.file.status === 'done') {  // 订阅型的EventEmitter  https://www.cnblogs.com/Martincheng/p/10182426.html
      // alert(info.file.status);
     this.LoadOrigeData.getbusinessdata(this.geturl).subscribe(data => {     // 这里来 subscribe
       this.dataSet = data as Businese[] ;
     });
      // this.dataSet[1].id = '10000' ;
    //  console.log(this.dataSet.length);
    }
  }
}
