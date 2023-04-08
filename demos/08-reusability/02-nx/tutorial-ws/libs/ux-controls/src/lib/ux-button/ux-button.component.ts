import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ux-button',
  templateUrl: './ux-button.component.html',
  styleUrls: ['./ux-button.component.scss'],
})
export class UxButtonComponent {
  @Input() disabled = false;
  @Input() label = '';
  @Input() icon = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.icon = '';
  }

  buttonClicked() {
    this.onClick.emit();
  }
}
