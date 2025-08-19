import { AfterContentInit, AfterViewInit, Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";


@Directive({
    selector: "[appHighlightText],appHighlight-text",
    standalone: true
})
export class HighlightTextDirective implements OnChanges,AfterContentInit {
    @Input() highlightText!: string;
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("Changes detected:", changes);
        if (changes['highlightText']) {
            this.highLight();
        }
    }
    // ngAfterViewInit(): void {
    //     console.log(this.el.nativeElement.textContent);
    // }
    ngAfterContentInit():void{
        this.highLight();
    }
    private highLight() {
        const text = this.el.nativeElement.textContent;
        if (this.highlightText && text.includes(this.highlightText)) {
            const regex = new RegExp(`(${this.highlightText})`, 'gi');
            const newText = text.replace(regex, `<span class="highlighted">$1</span>`);
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', newText);
        }
    }
}