let Vertex = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

let Vertex2D = function(x, y) {
    this.x = x;
    this.y = y;
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

let renderOrt = function(objects, ctx, canvasSize) {
    canvasRadX = canvasSize/2;
    canvasRadY = canvasSize/2;
    
    for(let i = 0; i < objects.length - 1; i++) {
        let currentObj = objects[i-1];

        for(let j = 0; j < objects[i].faces.length -1; j++) {
            var face = objects[i].faces[j];

        }
    }
}