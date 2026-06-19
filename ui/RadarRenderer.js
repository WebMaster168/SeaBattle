export class RadarRenderer {
 
    static render() {
 
        const radar =
            document.getElementById("radar");
 
        radar.innerHTML = `
            <div class="radar">
 
                <div class="radar-circle c1"></div>
                <div class="radar-circle c2"></div>
                <div class="radar-circle c3"></div>
                <div class="radar-circle c4"></div>
 
                <div class="radar-line vertical"></div>
                <div class="radar-line horizontal"></div>
 
                <div class="scanner"></div>
 
                <div class="center-dot"></div>
 
            </div>
        `;
    }
 
}