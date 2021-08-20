import { Injectable } from '@angular/core';
import {Movie} from "../../interfaces/movie.interfase";
// @ts-ignore
const { parse } = require('json2csv');
// @ts-ignore
import { saveAs } from '../../../../node_modules/file-saver/src/FileSaver.js';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor() { }
  public downloadFile(data: Movie[], filename? : string) {
    let csvData = this.convertToCSV(data);
    let file = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(file, `${filename}.csv`);
  }

  public convertToCSV(objArray: Movie[]): string {
    const fields: string[] = ['Title', 'Year', 'Type'];
    const opts: Object = { fields };
    const csv = parse(objArray, opts);
    console.log('csv', csv);
    return csv;
  }
}
