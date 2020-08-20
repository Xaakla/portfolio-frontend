function Ball(radius, vx, vy, x, y, color, held) {
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.x = x;
    this.y = y;
    this.color = color;
    this.held = held;
}

var cnv = document.querySelector('#canvas');
var ctx = cnv.getContext('2d');

var catX, catY, hyp, catX2, catY2, hyp2 = 0;

var gravity = 0.1;

var ball = new Ball(20, Math.floor(Math.random() * -10), 0, 25, 75, '#ffff00', false);
var ball2 = new Ball(20, Math.floor(Math.random() * 10), 0, 255, 15, '#ffff00', false);

var img = document.querySelector('#js-img');

cnv.addEventListener('mousedown', function(e) {
    var pointer = "cursor: grabbing;";
    cnv.style.cssText = pointer;

    catX = ball.x - e.offsetX;
    catY = ball.y - e.offsetY;
    catX2 = ball2.x - e.offsetX;
    catY2 = ball2.y - e.offsetY;
    hyp = Math.sqrt((catX * catX) + (catY * catY));
    hyp2 = Math.sqrt((catX2 * catX2) + (catY2 * catY2));

    if (hyp < ball.radius && !ball.held) {
        // ball.held = ball.held ? false : true;
        ball.held = true;
    }
    if (hyp2 < ball2.radius && !ball2.held) {
        // ball.held = ball.held ? false : true;
        ball2.held = true;
    }
}, false);

cnv.addEventListener('mouseup', function(e) {
    var pointer = "cursor: grab;";
    cnv.style.cssText = pointer;

    if (ball.held) {
        ball.held = false;
        ball.vy = Math.floor(Math.random() * -8);
        ball.vx = Math.floor(Math.random() * 4);
    }
    if (ball2.held) {
        ball2.held = false;
        ball2.vy = Math.floor(Math.random() * -8);
        ball2.vx = Math.floor(Math.random() * -4);
    }
}, false);

cnv.addEventListener('mousemove', function(e) {
    if (ball.held) {
        ball.x = e.offsetX;
        ball.y = e.offsetY;
    }
    if (ball2.held) {
        ball2.x = e.offsetX;
        ball2.y = e.offsetY;
    }
}, false);

const loop = () => {
    window.requestAnimationFrame(loop, cnv);
    update();
    render();
}

const update = () => {
    colide();

    if (!ball.held) {
        ball.vy += gravity;
        ball.y += ball.vy;
        ball.x += ball.vx;
    } else {
        ball.vy = 0;
        ball.vx = 0;
    }
    if (!ball2.held) {
        ball2.vy += gravity;
        ball2.y += ball2.vy;
        ball2.x += ball2.vx;
    } else {
        ball2.vy = 0;
        ball2.vx = 0;
    }

    // bounce on the floor
    if (ball.y + ball.radius > cnv.height || ball.y + ball.radius < 0) {
        if (ball.y + ball.radius < 0) {
            ball.y = ball.radius;
        } else {
            ball.y = cnv.height - ball.radius;
        }
        ball.vy *= -.8;
    }
    if (ball2.y + ball2.radius > cnv.height || ball2.y + ball2.radius < 0) {
        if (ball2.y + ball2.radius < 0) {
            ball2.y = ball2.radius;
        } else {
            ball2.y = cnv.height - ball2.radius;
        }
        ball2.vy *= -.8;
    }

    // bounce on the wall
    if (ball.x - ball.radius < 0 || ball.x + ball.radius > cnv.width) {
        if (ball.x - ball.radius < 0) {
            ball.x = ball.radius;
        } else {
            ball.x = cnv.width - ball.radius;
        }
        ball.vx *= -.4;
    }
    if (ball2.x - ball2.radius < 0 || ball2.x + ball2.radius > cnv.width) {
        if (ball2.x - ball2.radius < 0) {
            ball2.x = ball2.radius;
        } else {
            ball2.x = cnv.width - ball2.radius;
        }
        ball2.vx *= -.4;
    }

    if(ball.color === "#00f" && ball2.color === "#00f") {
        alert('azul');
    }
}

const colide = () => {
    if (ball.x + ball.radius > ball2.x &&
        ball.x < ball2.x + ball2.radius &&
        ball.y + ball.radius > ball2.y &&
        ball.y < ball2.y + ball2.radius
    ) {
        // ball.color = "#00f";
        // ball2.color = "#f00";
        // ball.vx *= -.8;
        // ball2.vx*= -.8;

        if (cnv.style.display != 'none') {
            cnv.style.cssText = "display: none;";
            img.style.cssText = `
                display: flex;    
                animation: appear 1s linear forwards;
            `;
        }
    }
}

const render = () => {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fillStyle = ball.color;
    ctx.arc(ball2.x, ball2.y, ball2.radius, 0, 2 * Math.PI);
    ctx.fillStyle = ball2.color;
    ctx.closePath();
    ctx.fill();
}

loop();