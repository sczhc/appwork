import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: [
    '../../../vendor/styles/pages/file-manager.scss'
  ]
})
export class FileManagerComponent {
  isRTL: boolean;

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'File manager - Pages';
    this.isRTL = appService.isRTL;
  }

  viewMode = 'col';
  selected: any = [];

  // Handle focused items
  focused: any = null;
  dropdownOpened: any = null;

  list = [
    { type: 'dir', name: 'Images', changed: '02/13/2018' },
    { type: 'dir', name: 'Scripts', changed: '02/14/2018' },
    { type: 'dir', name: 'Utils', changed: '02/15/2018' },
    { type: 'file', name: 'Archive.zip', changed: '02/16/2018' },
    { type: 'file', name: 'Build.js', changed: '02/17/2018' },
    { type: 'file', name: 'Checklist.doc', changed: '02/18/2018' },
    { type: 'file', name: 'Index.html', changed: '02/19/2018' },
    { type: 'file', name: 'Image-1.jpg', changed: '02/20/2018', path: 'assets/img/bg/5.jpg' },
    { type: 'file', name: 'Image-2.png', changed: '02/21/2018', path: 'assets/img/bg/6.jpg' },
    { type: 'file', name: 'Image-3.gif', changed: '02/22/2018', path: 'assets/img/bg/7.jpg' },
    { type: 'file', name: 'Main.js', changed: '02/23/2018' },
    { type: 'file', name: 'MAKEFILE', changed: '02/24/2018' },
    { type: 'file', name: 'Presentation.pdf', changed: '02/25/2018' },
    { type: 'file', name: 'README.txt', changed: '02/26/2018' },
    { type: 'file', name: 'Style.css', changed: '02/27/2018' },
    { type: 'file', name: 'Test.mp3', changed: '02/28/2018' },
    { type: 'file', name: 'Tutorial.avi', changed: '03/01/2018' }
  ];

  // Icons
  icons = {
    folder: 'far fa-folder',
    archive: 'far fa-file-archive',
    audio: 'far fa-file-audio',
    video: 'far fa-file-video',
    js: 'fab fa-js',
    doc: 'far fa-file-word',
    html: 'fab fa-html5',
    pdf: 'far fa-file-pdf',
    txt: 'far fa-file-alt',
    css: 'fab fa-css3',
    unknown: 'far fa-file'
  };

  isFolder(file) {
    return file.type === 'dir';
  }

  isImage(file) {
    return file.type === 'file' && /\.jpg$|\.png$|\.gif$/i.test(file.name);
  }

  isFile(file) {
    return file.type === 'file' && !/\.jpg$|\.png$|\.gif$/i.test(file.name);
  }

  fileIcon(file) {
    let icon = this.icons['unknown'];

    if (/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(file.name)) { icon = this.icons['archive']; }
    if (/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(file.name)) { icon = this.icons['audio']; }
    if (/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(file.name)) { icon = this.icons['video']; }
    if (/\.js$|\.es6$|\.ts$/i.test(file.name)) { icon = this.icons['js']; }
    if (/\.doc$|\.docx$/i.test(file.name)) { icon = this.icons['doc']; }
    if (/\.htm$|\.html$/i.test(file.name)) { icon = this.icons['html']; }
    if (/\.pdf$/i.test(file.name)) { icon = this.icons['pdf']; }
    if (/\.txt$/i.test(file.name)) { icon = this.icons['txt']; }
    if (/\.css$/i.test(file.name)) { icon = this.icons['css']; }

    return icon;
  }

  toggleSelect($event, item) {
    if ($event.target.checked) {
      this.selected.push(item);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1);
    }
  }

  // Handle focused items
  focusIn(item) {
    this.focused = item;
  }

  focusOut() {
    this.focused = null;
  }

  dropdownOpenChange(opened, item) {
    if (opened) {
      this.dropdownOpened = item;
    } else {
      this.dropdownOpened = null;
    }
  }

}
