export default class Bullet {
    constructor(canvas, x, y, velocity, bulletColor, orientation) {
      this.canvas = canvas;
      this.x = x;
      this.y = y;
      this.velocity = velocity;
      this.bulletColor = bulletColor;
  
      this.width = 20;
      this.height = 20;

      this.image = new Image();
      this.orientation = orientation;
      this.image.src = `media/images/bullet-${this.orientation}.png`
    }
  
    draw(ctx) {
      if (this.orientation === "left") {
        this.x -= this.velocity;
      }
      if (this.orientation === "up") {
        this.y -= this.velocity;
      }
      if (this.orientation === "right") {
        this.x -= -this.velocity;
      }
      if (this.orientation === "down") {
        this.y -= -this.velocity;
      }
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

  
    collideWith(sprite) {
      if (
        this.x + this.width > sprite.x &&
        this.y + this.height > sprite.y &&
        this.y < sprite.y + sprite.height
      ) {
        return true;
      } else {
        return false;
      }
    }
  }