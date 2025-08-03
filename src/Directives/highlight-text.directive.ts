import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: "[appHighlightText]",
    standalone: true
})
export class HighlightTextDirective implements OnInit {
    constructor(private el: ElementRef) {

    }
    ngOnInit(): void {
        (this.el.nativeElement as HTMLElement).style.backgroundColor = "yellow";
    }



    // @Input() highlightText: string;

    // constructor(private el: ElementRef, private renderer: Renderer2) {}

    // ngOnChanges() {
    //     this.highlight();
    // }

    // private highlight() {
    //     const text = this.el.nativeElement.textContent;
    //     if (this.highlightText && text.includes(this.highlightText)) {
    //     const regex = new RegExp(`(${this.highlightText})`, 'gi');
    //     const newText = text.replace(regex, `<span class="highlighted">$1</span>`);
    //     this.renderer.setProperty(this.el.nativeElement, 'innerHTML', newText);
    //     }
    // }
}