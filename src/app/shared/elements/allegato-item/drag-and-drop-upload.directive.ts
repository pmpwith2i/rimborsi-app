import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDragAndDropUpload]'
})
export class DragAndDropUploadDirective {
  @Output() fileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background;

  // Dragover Event
  @HostListener('dragover', ['$event']) dragOver(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#e2eefd';
  }

  // Dragleave Event
  @HostListener('dragleave', ['$event'])
  public dragLeave(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#ffffff';
  }

  // Drop Event
  @HostListener('drop', ['$event'])
  public drop(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = '#ffffff';
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
