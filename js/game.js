class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.x = 0;
    }

    run() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        this.update();       

        setTimeout(() => {
            requestAnimationFrame(() => this.run());
        }, 1000 / 60);
    }

    drawAndUpdate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        this.update();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, 100, 50, 50);
        this.ctx.fillStyle = "DodgerBlue";
        this.ctx.fill();
    }

    update() {
        this.x += 5;
    }
}