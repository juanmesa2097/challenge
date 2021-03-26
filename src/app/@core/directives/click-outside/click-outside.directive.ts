import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from "@angular/core";

@Directive({
  selector: "[saiClickOutside]",
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener("document:click", ["$event.target"])
  onClick(target: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }

  @HostListener("window:keyup", ["$event"])
  keyEvent(e: KeyboardEvent): void {
    if (e.key === "Esc" || e.key === "Escape") {
      this.clickOutside.emit();
    }
  }
}
