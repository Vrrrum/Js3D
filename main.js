const canvas = document.querySelector('#canv');
const ctx = canvas.getContext('2d')

let Vertex = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

let Vertex2D = function(x, y) {
    this.x = x;
    this.y = y;
}

let project = function(M) {
    // console.log(M.x);
    // console.log(M);
    return new Vertex2D(M.x, M.z);
}

let Cube = function(center, size) {
    rad = size/2;

    this.verticies = [
        // Przód
        new Vertex(center.x - rad, center.y - rad, center.z - rad), // Lewy dolny 0
        new Vertex(center.x - rad, center.y + rad, center.z - rad), // Prawy dolny 1
        new Vertex(center.x - rad, center.y + rad, center.z + rad), // Prawy górny 2
        new Vertex(center.x - rad, center.y - rad, center.z + rad), // Lewy górny 3
        // Tył
        new Vertex(center.x + rad, center.y - rad, center.z + rad), // Lewy górny 4
        new Vertex(center.x + rad, center.y + rad, center.z + rad), // Prawy górny 5
        new Vertex(center.x + rad, center.y + rad, center.z - rad), // Prawy dolny 6
        new Vertex(center.x + rad, center.y - rad, center.z - rad), // Lewy dolny 7
    ];

    this.faces = [
        // Front
        [this.verticies[0], this.verticies[1], this.verticies[3]],
        [this.verticies[1], this.verticies[2], this.verticies[3]],
        // Right
        [this.verticies[1], this.verticies[6], this.verticies[5]],
        [this.verticies[1], this.verticies[2], this.verticies[5]],
        // Back
        [this.verticies[5], this.verticies[6], this.verticies[7]],
        [this.verticies[5], this.verticies[7], this.verticies[4]],
        // Left
        [this.verticies[7], this.verticies[4], this.verticies[3]],
        [this.verticies[3], this.verticies[0], this.verticies[7]],
        // Bottom
        [this.verticies[0], this.verticies[7], this.verticies[1]],
        [this.verticies[1], this.verticies[6], this.verticies[7]],
        // Top
        [this.verticies[3], this.verticies[4], this.verticies[5]],
        [this.verticies[3], this.verticies[2], this.verticies[5]],
    ];
}

let cube = new Cube(new Vertex(0, 0, 0), 200);
let objects = [cube];

let renderOrt = function(objects, ctx) {
    const dx = ctx.canvas.clientWidth / 2;
    const dy = ctx.canvas.clientHeight / 2;

    for(let i = 0; i < objects.length; i++) {
        for(let j = 0; j < objects[i].faces.length; j++) {
            let face = objects[i].faces[j];

            let P = project(face[0]);
            ctx.beginPath();
            ctx.moveTo(P.x + dx, -P.y + dy);

            for(let k = 1; k < face.length; k++) {
                let P = project(face[k]);
                ctx.lineTo(P.x + dx, -P.y + dy);
            }

            ctx.closePath();
            ctx.stroke();

            console.count();
        }
    }
}

renderOrt(objects, ctx);