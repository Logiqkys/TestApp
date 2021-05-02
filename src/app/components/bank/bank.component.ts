import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
  providers: [EmailService]
})
export class BankComponent implements OnInit {
  public bdo: FormGroup;
  public westpac: FormGroup;
  public disable: boolean = true;
  public formData: FormData;
  public form: FormGroup;
  selectedValue1: number;
  selectedValue2: number;
  toPlace = [
    { id: 13.00, clientName: 'Cubao' },
    { id: 24.00, clientName: 'North Avenue' },
    { id: 16.00, clientName: 'GMA' }
  ];

  fromPlace = [
    { id: 13.00, clientName: 'Santolan' },
    { id: 24.00, clientName: 'Ayala' },
    { id: 16.00, clientName: 'Taft' }
  ];
  public files: NgxFileDropEntry[] = [];
  public f: File[];
  public dropped(files: NgxFileDropEntry[]) {
    const formData = new FormData();
    this.files = files;
    // files.forEach(file => {
    //   this.files.push(file);
    // });

    for (var droppedFile of files) {

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          formData.append('test', file);
          this.f.push(file);
          // this._emailService.email(formData).subscribe((response) => {

          // });
          // this.documentService.upload(formData).subscribe(response => {
          //   console.log(response);
          // })


          // Here you can access the real file
          // console.log(droppedFile.relativePath, file);

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        // console.log(droppedFile.relativePath, fileEntry);
      }
    }
    this.disable = false;
  }

  public fileOver(event) {
    // console.log(event);
  }

  public fileLeave(event) {
    // console.log(event);
  }
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _emailService: EmailService

  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
    });
    this.formData = new FormData();
    this.f = [];
  }
  apply() {





  }
}
