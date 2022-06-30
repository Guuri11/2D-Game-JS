export default class Player {
    rightPressed = false;
    leftPressed = false;
    upPressed = false;
    downPressed = false;
    shootPressed = false;
  
    constructor(canvas, velocity, bulletController) {
      this.canvas = canvas;
      this.velocity = velocity;
      this.bulletController = bulletController;
  
      this.x = this.canvas.width / 2;
      this.y = this.canvas.height / 2;
      this.width = 70;
      this.height = 68;
      this.imageUp = new Image();
      this.imageDown = new Image();
      this.imageLeft = new Image();
      this.imageRight = new Image();
      this.image = new Image();
      this.imageUp.src = "media/images/player-up.png";
      this.imageDown.src = "media/images/player-down.png";
      this.imageLeft.src = "media/images/player-left.png";
      this.imageRight.src = "media/images/player-right.png";
      this.image.src = "media/images/player-right.png";
      this.gameInfo = document.getElementById('game-info')
  
      document.addEventListener("keydown", this.keydown);
      document.addEventListener("keyup", this.keyup);
    }
  
    draw(ctx) {
      if (this.shootPressed) {
        if (this.gameInfo.dataset.playerOrientation === "up") {
          this.bulletController.shoot((this.x + this.width / 2) + 5.5, this.y-10, 4, 10);
        }
        if (this.gameInfo.dataset.playerOrientation === "down") {
          this.bulletController.shoot(this.x + 8, (this.y + this.height / 2) + 15, 4, 10);
        }
        if (this.gameInfo.dataset.playerOrientation === "left") {
          this.bulletController.shoot((this.x - this.width / 2) + 10, this.y + 5.5, 4, 10);
        }
        if (this.gameInfo.dataset.playerOrientation === "right") {
          this.bulletController.shoot((this.x + this.width / 2) + 17, (this.y + this.height / 2) + 6, 4, 10);
        }
      }
      this.move();
      this.collideWithWalls();
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  
    collideWithWalls() {
      //left
      if (this.x < 0) {
        this.x = 0;
      }

      //up
      if (this.y < 0) {
        this.y = 0;
      }
  
      //right
      if (this.x > this.canvas.width - this.width) {
        this.x = this.canvas.width - this.width;
      }

      //down
      if (this.y > this.canvas.width - this.height) {
        this.y = this.canvas.width - this.height;
      }
    }
  
    move() {
      if (this.rightPressed) {
        this.x += this.velocity;
      }
      if (this.leftPressed) {
        this.x += -this.velocity;
      }

      if (this.upPressed) {
        this.y += -this.velocity;
      }

      if (this.downPressed) {
        this.y += this.velocity;
      }
    }
  
    keydown = (event) => {
      if (event.code == "ArrowRight") {
        this.rightPressed = true;
        this.image.src = this.imageRight.src;
        this.gameInfo.dataset.playerOrientation = "right";
    }
      if (event.code == "ArrowLeft") {
        this.leftPressed = true;
        this.image.src = this.imageLeft.src;
        this.gameInfo.dataset.playerOrientation = "left";
      }

      if (event.code == "ArrowUp") {
        this.upPressed = true;
        this.image.src = this.imageUp.src;
        this.gameInfo.dataset.playerOrientation = "up";
      }

      if (event.code == "ArrowDown") {
        this.downPressed = true;
        this.image.src = this.imageDown.src;
        this.gameInfo.dataset.playerOrientation = "down";
      }

      if (event.code == "Space") {
        this.shootPressed = true;
      }
    };
  
    keyup = (event) => {
      if (event.code == "ArrowRight") {
        this.rightPressed = false;
      }
      if (event.code == "ArrowLeft") {
        this.leftPressed = false;
      }
      if (event.code == "ArrowUp") {
        this.upPressed = false;
      }

      if (event.code == "ArrowDown") {
        this.downPressed = false;
      }
      if (event.code == "Space") {
        this.shootPressed = false;
      }
    };
  }
  