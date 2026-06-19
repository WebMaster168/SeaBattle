export class StatsRenderer {
 
    static render(stats) {
 
        const panel =
            document.getElementById(
                "stats-panel"
            );
 
        panel.innerHTML = `
            <div class="status-card">
 
                <div class="status-header">
 
                    <div class="status-icon">
                        🏆
                    </div>
 
                    <div>
 
                        <div class="status-title">
                            ${stats.turn.toUpperCase()}
                        </div>
 
                        
 
                    </div>
 
                </div>
 
            </div>
 
            <div class="battle-stats">
 
                <div class="mini-stat">
 
                    <span>🎯</span>
 
                    <span class="hits">
                        ${stats.hits}
                    </span>
 
                </div>
 
                <div class="mini-stat">
 
                    <span>🌊</span>
 
                    <span class="misses">
                        ${stats.misses}
                    </span>
 
                </div>
 
                <div class="mini-stat">
 
                    <span class="span-stat">🚢</span>
 
                    <span class="sunk">
                        ${stats.sunk}/10
                    </span>
 
                </div>
 
            </div>
            
        `;
    }
}