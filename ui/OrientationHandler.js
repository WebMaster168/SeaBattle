export class OrientationHandler{
    static check(){
        const overlay =
        document.getElementById(
            "rotate-device"
        );
 
        const portrait =
            window.innerHeight >
            window.innerWidth;
        const isMobile = window.innerWidth < 768
    
        if (
            isMobile &&
            portrait
        ) {
            overlay.style.display = "flex";
        } else {
            overlay.style.display = "none";
        }
    }
    static init(){
        this.check()

        
        window.addEventListener(
            "resize",
            () => this.check()
        );

        window.addEventListener("orientationchange",
            ()=> this.check()
        )
    }
}

