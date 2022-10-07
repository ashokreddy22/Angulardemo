
import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit{
    constructor(private someElemnt:ElementRef){}
    ngOnInit(): void {
       this.someElemnt.nativeElement.style.backgroundColor='red';
    }
    
}